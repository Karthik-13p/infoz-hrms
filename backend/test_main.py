import os

# ---------------------------------------------------------
# SET FAKE API KEY BEFORE IMPORTING main
# ---------------------------------------------------------

os.environ["GROQ_API_KEY"] = "test-api-key"

from fastapi.testclient import TestClient
from unittest.mock import patch, MagicMock

from main import app


client = TestClient(app)


# ---------------------------------------------------------
# ROOT ENDPOINT
# ---------------------------------------------------------

def test_root():
    response = client.get("/")

    assert response.status_code == 200

    data = response.json()

    assert data["message"] == (
        "Infoz HR AI Assistant API is running"
    )


# ---------------------------------------------------------
# EMPTY MESSAGE
# ---------------------------------------------------------

def test_empty_message_returns_400():
    response = client.post(
        "/api/chat",
        json={
            "message": "",
            "history": []
        }
    )

    assert response.status_code == 400

    data = response.json()

    assert data["detail"] == "Message cannot be empty."


# ---------------------------------------------------------
# WHITESPACE MESSAGE
# ---------------------------------------------------------

def test_whitespace_message_returns_400():
    response = client.post(
        "/api/chat",
        json={
            "message": "   ",
            "history": []
        }
    )

    assert response.status_code == 400

    data = response.json()

    assert data["detail"] == "Message cannot be empty."


# ---------------------------------------------------------
# MISSING MESSAGE
# ---------------------------------------------------------

def test_missing_message_returns_422():
    response = client.post(
        "/api/chat",
        json={
            "history": []
        }
    )

    assert response.status_code == 422


# ---------------------------------------------------------
# CHAT SUCCESS
# ---------------------------------------------------------

@patch("main.client.chat.completions.create")
def test_chat_success(mock_create):

    mock_response = MagicMock()

    mock_response.choices = [
        MagicMock(
            message=MagicMock(
                content="Infoz HR helps organizations manage HR workflows."
            )
        )
    ]

    mock_create.return_value = mock_response

    response = client.post(
        "/api/chat",
        json={
            "message": "What is Infoz HR?",
            "history": []
        }
    )

    assert response.status_code == 200

    data = response.json()

    assert data["success"] is True

    assert data["reply"] == (
        "Infoz HR helps organizations manage HR workflows."
    )

    mock_create.assert_called_once()


# ---------------------------------------------------------
# CHAT REQUEST SENT TO GROQ
# ---------------------------------------------------------

@patch("main.client.chat.completions.create")
def test_chat_sends_current_question(mock_create):

    mock_response = MagicMock()

    mock_response.choices = [
        MagicMock(
            message=MagicMock(
                content="Infoz HR provides HR management capabilities."
            )
        )
    ]

    mock_create.return_value = mock_response

    response = client.post(
        "/api/chat",
        json={
            "message": "What does Infoz HR do?",
            "history": []
        }
    )

    assert response.status_code == 200

    call_kwargs = mock_create.call_args.kwargs

    messages = call_kwargs["messages"]

    assert messages[-1]["role"] == "user"

    assert messages[-1]["content"] == (
        "What does Infoz HR do?"
    )


# ---------------------------------------------------------
# SYSTEM KNOWLEDGE IS SENT
# ---------------------------------------------------------

@patch("main.client.chat.completions.create")
def test_chat_sends_system_knowledge(mock_create):

    mock_response = MagicMock()

    mock_response.choices = [
        MagicMock(
            message=MagicMock(
                content="Infoz HR is an HR platform."
            )
        )
    ]

    mock_create.return_value = mock_response

    response = client.post(
        "/api/chat",
        json={
            "message": "Tell me about Infoz HR",
            "history": []
        }
    )

    assert response.status_code == 200

    call_kwargs = mock_create.call_args.kwargs

    messages = call_kwargs["messages"]

    assert messages[0]["role"] == "system"

    assert "Infoz HR" in messages[0]["content"]

    assert "PRICING PLANS" in messages[0]["content"]


# ---------------------------------------------------------
# CONVERSATION HISTORY
# ---------------------------------------------------------

@patch("main.client.chat.completions.create")
def test_chat_includes_valid_history(mock_create):

    mock_response = MagicMock()

    mock_response.choices = [
        MagicMock(
            message=MagicMock(
                content="Here is information about attendance."
            )
        )
    ]

    mock_create.return_value = mock_response

    response = client.post(
        "/api/chat",
        json={
            "message": "Tell me more",
            "history": [
                {
                    "role": "user",
                    "content": "What is attendance?"
                },
                {
                    "role": "assistant",
                    "content": "Infoz HR supports attendance workflows."
                }
            ]
        }
    )

    assert response.status_code == 200

    messages = (
        mock_create.call_args.kwargs["messages"]
    )

    assert messages[1]["role"] == "user"

    assert messages[1]["content"] == (
        "What is attendance?"
    )

    assert messages[2]["role"] == "assistant"

    assert messages[2]["content"] == (
        "Infoz HR supports attendance workflows."
    )

    assert messages[-1]["content"] == "Tell me more"


# ---------------------------------------------------------
# INVALID HISTORY ROLES ARE IGNORED
# ---------------------------------------------------------

@patch("main.client.chat.completions.create")
def test_invalid_history_roles_are_ignored(mock_create):

    mock_response = MagicMock()

    mock_response.choices = [
        MagicMock(
            message=MagicMock(
                content="Response"
            )
        )
    ]

    mock_create.return_value = mock_response

    response = client.post(
        "/api/chat",
        json={
            "message": "Hello",
            "history": [
                {
                    "role": "system",
                    "content": "Invalid history"
                },
                {
                    "role": "user",
                    "content": "Valid message"
                }
            ]
        }
    )

    assert response.status_code == 200

    messages = (
        mock_create.call_args.kwargs["messages"]
    )

    contents = [
        message["content"]
        for message in messages
    ]

    assert "Invalid history" not in contents

    assert "Valid message" in contents


# ---------------------------------------------------------
# EMPTY HISTORY CONTENT IS IGNORED
# ---------------------------------------------------------

@patch("main.client.chat.completions.create")
def test_empty_history_content_is_ignored(mock_create):

    mock_response = MagicMock()

    mock_response.choices = [
        MagicMock(
            message=MagicMock(
                content="Response"
            )
        )
    ]

    mock_create.return_value = mock_response

    response = client.post(
        "/api/chat",
        json={
            "message": "Hello",
            "history": [
                {
                    "role": "user",
                    "content": "   "
                },
                {
                    "role": "assistant",
                    "content": "Useful response"
                }
            ]
        }
    )

    assert response.status_code == 200

    messages = (
        mock_create.call_args.kwargs["messages"]
    )

    contents = [
        message["content"]
        for message in messages
    ]

    assert "   " not in contents

    assert "Useful response" in contents


# ---------------------------------------------------------
# ONLY LAST 10 HISTORY ITEMS ARE USED
# ---------------------------------------------------------

@patch("main.client.chat.completions.create")
def test_only_last_ten_history_items_are_used(mock_create):

    mock_response = MagicMock()

    mock_response.choices = [
        MagicMock(
            message=MagicMock(
                content="Response"
            )
        )
    ]

    mock_create.return_value = mock_response

    history = [
        {
            "role": "user",
            "content": f"Message {i}"
        }
        for i in range(15)
    ]

    response = client.post(
        "/api/chat",
        json={
            "message": "Final question",
            "history": history
        }
    )

    assert response.status_code == 200

    messages = (
        mock_create.call_args.kwargs["messages"]
    )

    # First message = system
    # Next 10 = history
    # Last = current question
    assert len(messages) == 12

    assert messages[1]["content"] == "Message 5"

    assert messages[10]["content"] == "Message 14"

    assert messages[-1]["content"] == "Final question"


# ---------------------------------------------------------
# GROQ MODEL CONFIGURATION
# ---------------------------------------------------------

@patch("main.client.chat.completions.create")
def test_groq_configuration(mock_create):

    mock_response = MagicMock()

    mock_response.choices = [
        MagicMock(
            message=MagicMock(
                content="Test response"
            )
        )
    ]

    mock_create.return_value = mock_response

    response = client.post(
        "/api/chat",
        json={
            "message": "Hello",
            "history": []
        }
    )

    assert response.status_code == 200

    call_kwargs = mock_create.call_args.kwargs

    assert call_kwargs["model"] == "openai/gpt-oss-120b"

    assert call_kwargs["temperature"] == 0.3

    assert call_kwargs["max_tokens"] == 500


# ---------------------------------------------------------
# GROQ ERROR HANDLING
# ---------------------------------------------------------

@patch("main.client.chat.completions.create")
def test_groq_error_returns_500(mock_create):

    mock_create.side_effect = Exception(
        "Groq API error"
    )

    response = client.post(
        "/api/chat",
        json={
            "message": "Hello",
            "history": []
        }
    )

    assert response.status_code == 500

    data = response.json()

    assert data["detail"] == (
        "Unable to generate AI response."
    )


# ---------------------------------------------------------
# RESPONSE STRUCTURE
# ---------------------------------------------------------

@patch("main.client.chat.completions.create")
def test_chat_response_structure(mock_create):

    mock_response = MagicMock()

    mock_response.choices = [
        MagicMock(
            message=MagicMock(
                content="Test response"
            )
        )
    ]

    mock_create.return_value = mock_response

    response = client.post(
        "/api/chat",
        json={
            "message": "Hello",
            "history": []
        }
    )

    assert response.status_code == 200

    data = response.json()

    assert "success" in data

    assert "reply" in data

    assert isinstance(
        data["success"],
        bool
    )

    assert isinstance(
        data["reply"],
        str
    )
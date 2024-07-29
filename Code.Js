<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <style>
      body {
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f5f5f5;
        margin: 0;
      }

      .container {
        text-align: center;
        width: 50%;
        background-color: #fff;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
      }

      #chatbot {
        border: 1px solid #ccc;
        padding: 10px;
        height: 300px;
        overflow-y: scroll;
        margin-bottom: 10px;
      }

      #message {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
      }

      #sendButton {
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }

      #sendButton:hover {
        background-color: #0056b3;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>GG's Travel Chatbot</h1>
      <div id="chatbot"></div>
      <textarea id="message" placeholder="Hello, I'm here to assist you in planning your perfect adventure! ✨ Ask me anything about destinations, activities, local cuisines, or travel tips!"></textarea>
      <button id="sendButton">SEND</button>
    </div>

    <script>
      const chatbot = document.getElementById('chatbot');
      const messageBox = document.getElementById('message');
      const sendButton = document.getElementById('sendButton');

      sendButton.addEventListener('click', async () => {
        const userInput = messageBox.value.trim();
        if (userInput) {
          addMessageToChatbot('You', userInput);
          messageBox.value = '';
          google.script.run.withSuccessHandler(updateChatbot).getChatbotResponse(userInput);
        }
      });

      function addMessageToChatbot(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = ${sender}: ${message};
        chatbot.appendChild(messageElement);
        chatbot.scrollTop = chatbot.scrollHeight;
      }

      function updateChatbot(response) {
        addMessageToChatbot("GG's Travel Chatbot", response);
      }
    </script>
  </body>
</html>

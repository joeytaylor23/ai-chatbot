const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const userMessage = input.value.trim();
  if (!userMessage) return;

  appendMessage("user", userMessage);
  input.value = "";

  // Simulate a simple bot reply
  const botReply = await getBotReply(userMessage);
  appendMessage("bot", botReply);
});

function appendMessage(sender, text) {
  const messageEl = document.createElement("div");
  messageEl.className = `message ${sender}`;
  messageEl.innerText = text;
  chatBox.appendChild(messageEl);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function getBotReply(message) {
  // Simulate a response delay and return a dummy reply
  await new Promise(resolve => setTimeout(resolve, 500));
  return `You said: "${message}". I’m still learning!`;
}

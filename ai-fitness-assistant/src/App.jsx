import { useState, useEffect } from "react";
import ChatBox from "./components/ChatBox";
import InputBox from "./components/InputBox";
import QuickActions from "./components/QuickActions";
import BMI from "./components/BMI";
import { sendMessageToGemini } from "./services/gemini";
import { saveMessages, loadMessages } from "./utils/localStorage";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(loadMessages());
  }, []);

  useEffect(() => {
    saveMessages(messages);
  }, [messages]);

  const handleSend = async (text) => {
    if (!text) return;

    const newMsgs = [...messages, { text, sender: "user" }];
    setMessages(newMsgs);

    const reply = await sendMessageToGemini(text);

    setMessages([...newMsgs, { text: reply, sender: "bot" }]);
  };

  return (
    <div className="app">
      <h1>🏋️ AI Fitness Assistant</h1>

      <QuickActions onSend={handleSend} />
      <BMI />
      <ChatBox messages={messages} />
      <InputBox onSend={handleSend} />
    </div>
  );
}

export default App;
import { useState } from "react";
import { FaMicrophone } from "react-icons/fa";

const InputBox = ({ onSend }) => {
  const [input, setInput] = useState("");
  const [listening, setListening] = useState(false);

  const handleVoice = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();

    setListening(true);

    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      onSend(transcript);
      setListening(false);
    };

    recognition.onend = () => setListening(false);

    recognition.start();
  };

  return (
    <div className="input-box">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask fitness..."
      />

      <button onClick={() => { onSend(input); setInput(""); }}>
        Send
      </button>

      <button
        className={`mic-btn ${listening ? "listening" : ""}`}
        onClick={handleVoice}
      >
        <FaMicrophone />
      </button>
    </div>
  );
};

export default InputBox;
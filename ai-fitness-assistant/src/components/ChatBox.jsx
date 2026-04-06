import Message from "./Message";

const ChatBox = ({ messages }) => {
  return (
    <div className="chat-box">
      <div className="chat-inner">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`chat-row ${msg.sender === "user" ? "right" : "left"}`}
          >
            <Message text={msg.text} sender={msg.sender} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatBox;
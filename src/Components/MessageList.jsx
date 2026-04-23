function MessageList({ messages, currentUsername }) {
  return (
    <div className="messages">
      {messages.map((msg, i) => {
        const isMe = msg.sender === currentUsername;
        return (
          <div key={i} className={`message ${isMe ? "sent" : "received"}`}>
            {!isMe && <div className="sender-name">{msg.sender}</div>}
            <div className="text-content">{msg.content}</div>
            <div className="timestamp">
              {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MessageList;
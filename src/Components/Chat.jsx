import { useEffect, useState, useRef } from "react";
import SockJS from "sockjs-client/dist/sockjs";
import { Client } from "@stomp/stompjs";

import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const clientRef = useRef(null);

  useEffect(() => {
    const client = new Client({
      webSocketFactory: () => new SockJS("http://localhost:8080/ws"),
      reconnectDelay: 5000,

      onConnect: () => {
        console.log("Connected ✅");
        client.subscribe("/topic/messages", (msg) => {
          const data = JSON.parse(msg.body);
          setMessages((prev) => [...prev, data]);
        });
      },
    });

    client.activate();
    clientRef.current = client;

    return () => client.deactivate();
  }, []);

  const sendMessage = (text) => {
    if (!username || !text.trim()) return;

    clientRef.current.publish({
      destination: "/app/chat",
      body: JSON.stringify({
        sender: username,
        content: text,
      }),
    });
  };

  return (
    <div className="chat-box">
      <div className="chat-header">
        <div className="chat-topbar">
          <div className="back-icon">←</div>
          <div className="chat-user">
            <div className="avatar">💬</div>
            <div>
              <p className="title">Chat Room</p>
              <p className="subtitle">
                <span className="online-dot"></span> Online
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="username-bar">
        <label>Name</label>
        <input
          className="username"
          placeholder="Enter name"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <MessageList messages={messages} currentUsername={username} />
      <MessageInput sendMessage={sendMessage} />
    </div>
  );
}

export default Chat;
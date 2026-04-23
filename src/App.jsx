import Chat from "./Components/Chat";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="glass-card">
        <h1>WebSocket Chat</h1>
        <Chat />
      </div>
    </div>
  );
}

export default App;
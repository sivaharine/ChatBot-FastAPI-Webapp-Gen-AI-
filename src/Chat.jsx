import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input) return;

    setMessages([...messages, { sender: "You", text: input }]);
    const userInput = input;
    setInput("");

    try {
      const res = await axios.post("http://127.0.0.1:8000/chat", {
        message: userInput,
      });
      setMessages((prev) => [
        ...prev,
        { sender: "Chatbot", text: res.data.response },
      ]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f5f6fa",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "15px 25px",
          backgroundColor: "#4B6BFB",
          color: "#fff",
          fontSize: "20px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Gemini AI Chat
      </div>

      {/* Chat Area */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              alignSelf: m.sender === "You" ? "flex-end" : "flex-start",
              backgroundColor: m.sender === "You" ? "#DCF8C6" : "#fff",
              padding: "12px 16px",
              margin: "6px 0",
              borderRadius: "10px",
              maxWidth: "60%",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <strong>{m.sender}:</strong> <br />
            {m.text}
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>

      {/* Input Section */}
      <div
        style={{
          padding: "15px",
          display: "flex",
          backgroundColor: "#fff",
          borderTop: "1px solid #ddd",
        }}
      >
        <input
          style={{
            flex: 1,
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "16px",
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          style={{
            marginLeft: "10px",
            padding: "12px 20px",
            backgroundColor: "#4B6BFB",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

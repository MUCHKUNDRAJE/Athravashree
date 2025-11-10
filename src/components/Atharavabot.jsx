import { Send } from "lucide-react";
import React, { useState } from "react";

const ArthravBot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: " Hi 👋 I'm  ArthravMitra! How can I help you today? I know everything about Athravashree — what do you want to know?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [
      ...messages,
      { sender: "user", text: input },
      { sender: "bot", text: "Got it! Let me think about that... 🤔" },
    ];
    setMessages(newMessages);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-gray-400 border-b px-4 py-3 bg-gray-50">
        <h2 className="text-2xl font-semibold text-[#8B276F] flex items-center justify-center  staatliches-regular ">
            <h1 className="mt-2">Arthrav Mitra </h1>
        <img className="scale-90 h-10 " src="/Chartbotlogo.png" alt="Chatbot" />

    

        </h2>
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`inter md:w-96 max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                msg.sender === "user"
                  ? "bg-[#8B276F] text-white rounded-br-none"
                  : "bg-gray-100 text-gray-800 rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className="border-t p-3 bg-gray-50 flex items-center gap-2">
        <textarea
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 inter resize-none border border-gray-300 rounded-xl px-5 py-1 outline-none focus:ring-1 focus:ring-[#8B276F]"
        />
        <button
          onClick={handleSend}
          className="bg-[#8B276F] text-white rounded-xl px-4 py-4 hover:bg-[#741e5e] transition-all"
        >
          <Send/>
        </button>
      </div>
    </div>
  );
};

export default ArthravBot;

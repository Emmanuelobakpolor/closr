import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, AlertCircle, Check, CheckCheck } from "lucide-react";

interface Chat {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: boolean;
  status?: "active" | "resolved";
}

interface Message {
  id: number;
  sender: string;
  type: "user" | "bot";
  text: string;
  timestamp: string;
  read: boolean;
}

const chats: Chat[] = [
  {
    id: 1,
    name: "Ada Johnson",
    avatar: "AJ",
    lastMessage: "Hi! How much is the blue dress?",
    time: "2h ago",
    unread: true,
    status: "active"
  },
  {
    id: 2,
    name: "Ada Johnson",
    avatar: "AJ",
    lastMessage: "Thank you! I'dl complete the...",
    time: "2h ago",
    unread: false,
    status: "resolved"
  },
  {
    id: 3,
    name: "Chioma Okafor",
    avatar: "CO",
    lastMessage: "Do you have this in size S?",
    time: "1h ago",
    unread: false,
    status: "active"
  },
  {
    id: 4,
    name: "Ngozi Eze",
    avatar: "NE",
    lastMessage: "What colors are available?",
    time: "15m ago",
    unread: false,
    status: "active"
  },
  {
    id: 5,
    name: "Ema Nwankwo",
    avatar: "EN",
    lastMessage: "Order received. Thank you!",
    time: "5d ago",
    unread: false,
    status: "resolved"
  }
];

const messages: Message[] = [
  {
    id: 1,
    sender: "Ada Johnson",
    type: "user",
    text: "Hi! How much is the blue dress?",
    timestamp: "10:30 AM",
    read: true
  },
  {
    id: 2,
    sender: "Bot",
    type: "bot",
    text: "The Blue Summer Dress is ₦15,000. It's currently in stock.",
    timestamp: "10:31 AM",
    read: true
  },
  {
    id: 3,
    sender: "Ada Johnson",
    type: "user",
    text: "Great! Let me place an order",
    timestamp: "10:32 AM",
    read: true
  },
  {
    id: 4,
    sender: "Bot",
    type: "bot",
    text: "Great choice! Here's your order summary:\nBlue Summer Dress x1\nPrice: ₦15,000\nClick the link below to complete your payment",
    timestamp: "10:33 AM",
    read: true
  },
  {
    id: 5,
    sender: "Ada Johnson",
    type: "user",
    text: "Thanks! I'll complete the payment now",
    timestamp: "10:35 AM",
    read: true
  }
];

export default function Chats() {
  const [selectedChat, setSelectedChat] = useState(chats[0]);
  const [messageText, setMessageText] = useState("");
  const [showPaymentOverlay, setShowPaymentOverlay] = useState(false);

  const handleSendMessage = () => {
    if (messageText.trim()) {
      setMessageText("");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Chats</h1>
        <p className="text-muted-foreground">Monitor and manage customer conversations</p>
      </div>

      {/* Chat Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* Chat List */}
        <div className="lg:col-span-1 bg-white rounded-xl border border-border overflow-hidden flex flex-col">
          {/* Search */}
          <div className="p-4 border-b border-border">
            <input 
              type="text"
              placeholder="Search chats..."
              className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Chat List Items */}
          <div className="flex-1 overflow-y-auto">
            {chats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => setSelectedChat(chat)}
                className={`w-full px-4 py-3 border-b border-border text-left transition-all hover:bg-secondary/30 ${
                  selectedChat.id === chat.id ? "bg-primary/5 border-l-4 border-l-primary" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${
                    chat.unread ? "bg-primary" : "bg-muted"
                  }`}>
                    {chat.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-semibold truncate ${chat.unread ? "text-primary" : ""}`}>
                      {chat.name}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">{chat.lastMessage}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground ml-13">{chat.time}</p>
              </button>
            ))}
          </div>

          {/* Chat Stats Footer */}
          <div className="p-4 border-t border-border bg-secondary/10 grid grid-cols-3 gap-2 text-center text-xs">
            <div>
              <div className="font-bold text-primary">1,284</div>
              <div className="text-muted-foreground">Total Chats</div>
            </div>
            <div>
              <div className="font-bold text-green-600">342</div>
              <div className="text-muted-foreground">Converted</div>
            </div>
            <div>
              <div className="font-bold text-purple-600">&lt;1 sec</div>
              <div className="text-muted-foreground">Avg Response</div>
            </div>
          </div>
        </div>

        {/* Chat Details */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-border flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                {selectedChat.avatar}
              </div>
              <div>
                <p className="font-semibold text-sm">{selectedChat.name}</p>
                <p className="text-xs text-muted-foreground">
                  {selectedChat.status === "active" ? "🟢 Active now" : "✓ Resolved"}
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              End Active
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-xs ${msg.type === "user" ? "bg-primary text-white" : "bg-secondary text-foreground"} rounded-lg p-3`}>
                  <p className="text-sm">{msg.text}</p>
                  <div className={`text-xs mt-1 flex items-center gap-1 ${msg.type === "user" ? "text-white/70" : "text-muted-foreground"}`}>
                    <span>{msg.timestamp}</span>
                    {msg.type === "user" && msg.read && <CheckCheck className="w-3 h-3" />}
                  </div>
                </div>
              </div>
            ))}

            {/* Payment Notification */}
            <div className="flex justify-start">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 max-w-xs">
                <p className="text-xs text-yellow-800 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>The bot is handling this conversation automatically. You can take over at any time.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-border flex gap-2">
            <input 
              type="text"
              placeholder="Type a message to take over..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1 px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button 
              onClick={handleSendMessage}
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-1 px-3"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Payment Overlay Modal */}
      {showPaymentOverlay && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-bold mb-4">Order Summary</h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-sm">Blue Summer Dress x1</span>
                <span className="font-semibold">₦15,000</span>
              </div>
            </div>
            <Button 
              onClick={() => setShowPaymentOverlay(false)}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Pay ₦15,000
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

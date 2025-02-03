import React, { useState, useEffect } from "react";
import { SendHorizontal, MessageCircleIcon, X, Loader } from "lucide-react";
import { useUser } from "../contex/UserContext";
import axios from "axios";

export default function CarChatWidget() {
    const { user } = useUser();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false); // Change to false to simulate not signed-in state

    useEffect(() => {
        if (user !== null) {
            setIsSignedIn(true);

        }
        else {
            setIsSignedIn(false);
        }
    }, [user]);
    const handleSendMessage = async () => {
        if (!input.trim() || loading) return;

        if (!isSignedIn) {
            setMessages((prev) => [...prev, { role: "error", content: "Please sign in to use the AI assistant." }]);
            return;
        }

        const userMessage = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        try {
            const response = await axios.post("http://localhost:8000/recommend", {
                question: input,
                user_id: user?.email
            });

            const suggestedCars = response.data.suggested_cars;
            let aiMessageContent = "Here are some car suggestions for your trip:\n\n";

            suggestedCars.forEach(car => {
                aiMessageContent += `• **${car.carName}** (${car.carBrand})\n  - ${car.description}\n  - Capacity: ${car.capacity} people\n  - Price per day: $${car.ppD}\n\n`;
            });

            const aiMessage = { role: "ai", content: aiMessageContent };
            setMessages((prev) => [...prev, aiMessage]);
        } catch (error) {
            console.error("Error fetching AI response:", error);
            setMessages((prev) => [...prev, { role: "error", content: "Failed to fetch car suggestions. Please try again later." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-5 right-5 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 z-50"
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageCircleIcon className="w-6 h-6" />}
            </button>

            {/* Chat Box */}
            {isOpen && (
                <div className="fixed bottom-20 right-5 w-80 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-40">
                    <div className="p-4 bg-blue-600 text-white text-lg font-semibold">Car Assistant</div>
                    <div className="flex-1 p-4 space-y-2 overflow-y-scroll max-h-72">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`p-2 rounded-lg max-w-[75%] whitespace-pre-wrap ${msg.role === "user"
                                    ? "bg-blue-100 text-right ml-auto"
                                    : msg.role === "ai"
                                        ? "bg-gray-200 text-left"
                                        : "bg-red-100 text-center text-red-700"
                                    }`}
                            >
                                {msg.content}
                            </div>
                        ))}
                        {loading && (
                            <div className="flex justify-center items-center mt-2">
                                <Loader className="animate-spin text-blue-600 w-5 h-5" />
                                <span className="ml-2 text-sm text-gray-500">Thinking...</span>
                            </div>
                        )}
                    </div>
                    <div className="p-2 border-t flex items-center">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={isSignedIn ? "Ask for car suggestions..." : "Sign in to use AI assistant"}
                            className="flex-1 p-2 border rounded-lg focus:outline-none"
                            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                            disabled={loading || !isSignedIn}
                        />
                        <button
                            onClick={handleSendMessage}
                            className={`ml-2 p-2 rounded-lg ${loading || !isSignedIn ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700 text-white"
                                }`}
                            disabled={loading || !isSignedIn}
                        >
                            <SendHorizontal className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

import { Fragment, useState, useRef, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import ChatHome from "./ChatHome";

export default function HospitalChatbot({ open, setOpen }) {
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [showHome, setShowHome] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    
    const messagesEndRef = useRef(null);
    const navigate = useNavigate();

    // Auto-scroll to the latest message
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    // Send query to Django API
    const handleSend = async (userText) => {
        const textToSend = userText || input;
        if (!textToSend.trim()) return;

        setShowHome(false);
        if (!userText) setInput("");

        // 1. Append user message
        setMessages((prev) => [...prev, { from: "user", text: textToSend }]);
        setIsLoading(true);

        try {
            // 2. Call your Django AI endpoint
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/chat/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    message: textToSend,
                    history: messages.slice(-4) // Sends the last 4 messages for context
                }),
            });

            const data = await response.json();

            // 3. Append bot response with doctors and action buttons
            setMessages((prev) => [
                ...prev,
                {
                    from: "bot",
                    type: data.type,
                    text: data.text,
                    doctors: data.doctors || [],
                    actions: data.actions || []
                }
            ]);
        } catch (err) {
            console.error("Chatbot API Error:", err);
            setMessages((prev) => [
                ...prev,
                {
                    from: "bot",
                    text: "Please try asking that again, or contact our reception for immediate assistance.",
                    actions: [{ label: "📞 Call Reception", type: "call", value: "9082097421" }]
                }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    // Handle action chip clicks (Links vs Phone Calls vs Messages)
    const handleActionClick = (action) => {
        if (action.type === "call") {
            window.location.href = `tel:${action.value}`;
        } else if (action.type === "link") {
            navigate(action.value);
            setOpen(false);
        } else {
            handleSend(action.value || action.label);
        }
    };

    // Handle home screen tile selections
    const handleHomeSelect = (value) => {
        const promptMap = {
            doctor: "I want to find a doctor",
            specialities: "Can you list your medical specialities and departments?", // <-- Updated to trigger the new backend intent
            heart: "I have a heart or chest problem",
            skin: "I need a doctor for skin rash or burn",
            child: "I need a pediatrician for my child",
            bone: "I have bone or joint pain"
        };
        handleSend(promptMap[value] || value);
    };

    return (
        <Transition appear show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={() => setOpen(false)}>
                <div className="fixed inset-0 bg-black/30 backdrop-blur-xs" />

                <div className="fixed inset-0 flex items-end sm:items-center justify-center sm:justify-end p-2 sm:p-4">
                    <Dialog.Panel className="w-full sm:w-[390px] h-[85vh] sm:h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100">

                        {/* Header */}
                        <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center shadow-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                                <span className="font-semibold text-sm sm:text-base">Mallika Assistant</span>
                            </div>
                            <button 
                                onClick={() => setOpen(false)}
                                className="text-white/80 hover:text-white text-lg font-bold px-2 py-0.5 rounded-lg hover:bg-blue-700 transition"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Body */}
                        <div className="flex-1 overflow-y-auto bg-gray-50 p-4 space-y-4">
                            {showHome ? (
                                <ChatHome onSelect={handleHomeSelect} />
                            ) : (
                                <>
                                    {messages.map((m, i) => (
                                        <div key={i} className={`flex w-full ${m.from === "user" ? "justify-end" : "justify-start"} mb-4`}>
                                            <div className={`flex flex-col space-y-2 max-w-[85%] ${m.from === "user" ? "items-end" : "items-start"}`}>

                                                {/* Text Bubble */}
                                                {m.text && (
                                                    <div
                                                        className={`px-4 py-3 text-sm shadow-sm whitespace-pre-wrap leading-relaxed ${
                                                            m.from === "user"
                                                                ? "bg-blue-600 text-white rounded-2xl rounded-tr-sm"
                                                                : "bg-gray-100 text-gray-800 rounded-2xl rounded-tl-sm border border-gray-200"
                                                        }`}
                                                    >
                                                        {m.text}
                                                    </div>
                                                )}

                                                {/* Action Chips */}
                                                {m.actions && m.actions.length > 0 && (
                                                    <div className={`flex flex-wrap gap-1.5 mt-1 ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                                                        {m.actions.map((act, idx) => (
                                                            <button
                                                                key={idx}
                                                                onClick={() => handleActionClick(act)}
                                                                className="bg-white border border-blue-300 text-blue-700 text-xs px-3 py-1.5 rounded-full hover:bg-blue-50 hover:border-blue-500 transition-all shadow-sm font-medium"
                                                            >
                                                                {act.label}
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* Doctor Cards */}
                                                {m.doctors && m.doctors.length > 0 && (
                                                    <div className="w-full space-y-2 mt-2">
                                                        <div className="flex items-center gap-2 px-1">
                                                            <div className="h-px bg-gray-300 flex-1"></div>
                                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                                                Recommended Specialists
                                                            </p>
                                                            <div className="h-px bg-gray-300 flex-1"></div>
                                                        </div>
                                                        
                                                        <div className="space-y-2 max-h-64 overflow-y-auto pr-1 custom-scrollbar">
                                                            {m.doctors.map((doc) => (
                                                                <div
                                                                    key={doc.id || doc.slug}
                                                                    className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm flex items-center gap-3 hover:border-blue-400 transition-colors"
                                                                >
                                                                    <img
                                                                        src={doc.photo_url || doc.photo || "/placeholder-doctor.png"}
                                                                        alt={doc.name}
                                                                        className="w-12 h-12 rounded-full object-cover border border-gray-100 shadow-sm flex-shrink-0"
                                                                    />
                                                                    <div className="flex-1 min-w-0">
                                                                        <p className="text-sm font-bold text-gray-900 truncate">
                                                                            {doc.name}
                                                                        </p>
                                                                        <p className="text-xs text-blue-600 font-semibold truncate mb-0.5">
                                                                            {doc.department_name}
                                                                        </p>
                                                                        {doc.degrees && (
                                                                            <p className="text-[10px] text-gray-500 truncate">
                                                                                {doc.degrees}
                                                                            </p>
                                                                        )}
                                                                    </div>
                                                                    <Link
                                                                        to={`/doctor-profile/${doc.slug}`}
                                                                        onClick={() => setOpen(false)}
                                                                        className="bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white border border-blue-100 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors flex-shrink-0"
                                                                    >
                                                                        View
                                                                    </Link>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                            </div>
                                        </div>
                                    ))}

                                    {/* Typing Indicator */}
                                    {isLoading && (
                                        <div className="flex w-full justify-start mb-4">
                                            <div className="flex flex-col items-start max-w-[85%]">
                                                <div className="px-4 py-3 text-sm shadow-sm bg-gray-100 text-gray-500 font-medium rounded-2xl rounded-tl-sm border border-gray-200 w-fit animate-pulse">
                                                    Typing...
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div ref={messagesEndRef} />
                                </>
                            )}
                        </div>

                        {/* Input Footer */}
                        {!showHome && (
                            <div className="p-3 border-t bg-white flex gap-2 items-center">
                                <input
                                    className="flex-1 border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-3.5 py-2 text-sm outline-none transition"
                                    placeholder="Type your query or symptom..."
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                    disabled={isLoading}
                                />
                                <button
                                    onClick={() => handleSend()}
                                    disabled={isLoading || !input.trim()}
                                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white px-4 py-2 rounded-xl text-sm font-medium transition flex-shrink-0"
                                >
                                    Send
                                </button>
                            </div>
                        )}

                        {/* Quick Reset / Call CTA */}
                        <div className="bg-gray-100 border-t border-gray-200 px-4 py-2 flex justify-between items-center text-xs">
                            <button 
                                onClick={() => { setShowHome(true); setMessages([]); }}
                                className="text-gray-500 hover:text-gray-800 font-medium underline"
                            >
                                ↺ Reset Chat
                            </button>
                            <a
                                href="tel:02226798585"
                                className="text-green-700 font-semibold hover:underline"
                            >
                                📞 Call: 022 26798585
                            </a>
                        </div>

                    </Dialog.Panel>
                </div>
            </Dialog>
        </Transition>
    );
}
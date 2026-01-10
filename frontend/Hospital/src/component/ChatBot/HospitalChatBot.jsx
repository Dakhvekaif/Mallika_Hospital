import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { getBotReply } from "./rules.js";
import ChatHome from "./ChatHome";

export default function HospitalChatbot({ open, setOpen }) {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [showHome, setShowHome] = useState(true);

    const handleAction = async (value) => {
        setShowHome(false);
        setMessages([]);

        const reply = await getBotReply(value);
        setMessages([{ from: "bot", ...reply }]);
    };

    const sendMessage = async () => {
        if (!input.trim()) return;

        const text = input;
        setInput("");

        setMessages((prev) => [...prev, { from: "user", text }]);

        const reply = await getBotReply(text);
        setMessages((prev) => [...prev, { from: "bot", ...reply }]);
    };

    return (
        <Transition appear show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={() => setOpen(false)}>
                <div className="fixed inset-0 bg-black/30" />

                <div className="fixed inset-0 flex items-end sm:items-center justify-center sm:justify-end p-4">
                    <Dialog.Panel className="w-full sm:w-[380px] h-[90vh] sm:h-[600px] bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden">

                        {/* Header */}
                        <div className="bg-blue-600 text-white px-4 py-3 flex justify-between">
                            <span className="font-semibold">Mallika Hospital</span>
                            <button onClick={() => setOpen(false)}>✕</button>
                        </div>

                        {/* Body */}
                        <div className="flex-1 overflow-y-auto bg-gray-50">
                            {showHome ? (
                                <ChatHome onSelect={handleAction} />
                            ) : (
                                <div className="p-4 space-y-4">

                                    {messages.map((m, i) => (
                                        <div key={i} className="space-y-2">

                                            {/* Text */}
                                            {m.text && (
                                                <div
                                                    className={`px-4 py-2 rounded-lg text-sm max-w-[85%]
                          ${m.from === "user"
                                                            ? "bg-blue-600 text-white ml-auto"
                                                            : "bg-white border"}
                        `}
                                                >
                                                    {m.text}
                                                </div>
                                            )}

                                            {/* Departments */}
                                            {m.type === "departments" && (
                                                <div className="bg-white border rounded-lg overflow-hidden">
                                                    <div className="px-4 py-2 text-sm font-semibold border-b">
                                                        {m.title}
                                                    </div>
                                                    <div className="max-h-64 overflow-y-auto">
                                                        {m.departments.map((d) => (
                                                            <button
                                                                key={d.id}
                                                                onClick={() => handleAction(d.name)}
                                                                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 border-b last:border-b-0"
                                                            >
                                                                {d.name}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Doctors (general or department) */}
                                            {m.doctors && m.doctors.length > 0 && (
                                                <div className="bg-white border rounded-lg overflow-hidden">
                                                    <div className="px-4 py-2 text-sm font-semibold border-b">
                                                        Doctors
                                                    </div>
                                                    <div className="max-h-64 overflow-y-auto">
                                                        {m.doctors.map((doc) => (
                                                            <div
                                                                key={doc.id}
                                                                className="flex items-center gap-3 px-4 py-2 border-b last:border-b-0"
                                                            >
                                                                <img
                                                                    src={doc.photo}
                                                                    alt={doc.name}
                                                                    className="w-8 h-8 rounded-full object-cover"
                                                                />
                                                                <div>
                                                                    <p className="text-sm font-medium">{doc.name}</p>
                                                                    <p className="text-xs text-gray-500">
                                                                        {doc.start_time && doc.end_time
                                                                            ? `${doc.start_time} – ${doc.end_time}`
                                                                            : "Timing not available"}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                    ))}

                                </div>
                            )}
                        </div>

                        {/* Input */}
                        {!showHome && (
                            <div className="border-t p-2 flex gap-2">
                                <input
                                    className="flex-1 border rounded-lg px-3 py-2 text-sm"
                                    placeholder="Ask something else..."
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                                />
                                <button
                                    onClick={sendMessage}
                                    className="bg-blue-600 text-white px-4 rounded-lg"
                                >
                                    Send
                                </button>
                            </div>
                        )}

                        {/* Call CTA */}
                        <a
                            href="tel:9082097421"
                            className="bg-green-600 text-white text-center py-2 text-sm"
                        >
                            Call Mallika Hospital
                        </a>

                    </Dialog.Panel>
                </div>
            </Dialog>
        </Transition>
    );
}

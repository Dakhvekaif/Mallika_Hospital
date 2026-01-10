import { useState } from "react";
import HospitalChatbot from "./HospitalChatBot";

export default function ChatbotWrapper() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
              onClick={() => setOpen(true)}
              className="fixed bottom-6 right-6 z-40
                bg-blue-600 text-white px-5 py-3 rounded-full shadow-xl
                flex items-center gap-2 text-base
                hover:scale-105 transition"
            >
              💬 Chat with Umendra
            </button>


            <HospitalChatbot open={open} setOpen={setOpen} />
        </>
    );
}

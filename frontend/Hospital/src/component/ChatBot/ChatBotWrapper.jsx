import { useState } from "react";
import HospitalChatbot from "./HospitalChatBot";
import Botimg from '../../assets/ChatBot/Goldy.png';

export default function ChatbotWrapper() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="fixed bottom-0 left-0 z-40
                bg-blue-600 text-white px-5 py-3 rounded-full shadow-xl
                flex items-center gap-2 scale-80 md:scale-100 bottom-6 left-4
                hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400
                transition"
              aria-label="Chat with Umendra"
            >
              <img
                src={Botimg}
                alt="Chat bot"
                className="w-10 h-10"
              />
              <span>Chat with Mallika</span>
            </button>

            <HospitalChatbot open={open} setOpen={setOpen} />
        </>
    );
}

import { useState } from "react";
import HospitalChatbot from "./HospitalChatBot";
import Botimg from "../../assets/ChatBot/Goldy.png";

export default function ChatbotWrapper() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="
          fixed z-40 bottom-6
          left-1/2 -translate-x-1
          md:left-auto md:right-6 md:translate-x-0
          bg-blue-600 text-white
          px-4 py-2 rounded-full shadow-xl
          flex items-center gap-2
          hover:bg-blue-700
          focus:outline-none focus:ring-2 focus:ring-blue-400
          transition
        "
        aria-label="Chat with Mallika"
      >
        <img
          src={Botimg}
          alt="Chat bot"
          className="w-12 h-12"
        />
        <span>Chat with Mallika</span>
      </button>

      <HospitalChatbot open={open} setOpen={setOpen} />
    </>
  );
}

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
          fixed z-40 bottom-4 right-4
          md:bottom-6 md:right-6
          bg-blue-600 text-white
          px-2 py-2 md:px-4 md:py-2
          rounded-full shadow-xl
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
          className="w-12 h-13 md:w-12 md:h-12"
        />
        <span className="hidden md:inline">Chat with Mallika</span>
      </button>

      <HospitalChatbot open={open} setOpen={setOpen} />
    </>
  );
}

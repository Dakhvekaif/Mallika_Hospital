import { Link } from "react-router-dom";

export default function Hero () {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-cyan-900 opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-10 text-white">
          WELCOME TO <br />
          MALLIKA SUPER-SPECIALIST HOSPITAL
        </h1>

        <div className="flex justify-center items-center gap-10 md:gap-20">
          <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105">
              Book Appointment
          </Link>

          <Link to="/find-doctor" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105">
              Find Doctor
          </Link>
        </div>
      </div>
    </div>
  );
}

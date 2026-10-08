import React from 'react';
import { CheckCircle, Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Thankyou() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 sm:p-6 font-sans">
      {/* Injecting custom keyframe animation for the entrance effect */}
      <style>
        {`
          @keyframes slideUpFade {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-entrance {
            animation: slideUpFade 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}
      </style>

      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl border-t-[6px] border-[#0A58CA] p-8 sm:p-10 text-center animate-entrance relative overflow-hidden">
        
        {/* Subtle background pattern for visual depth */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#E7F1FF]/50 to-transparent pointer-events-none"></div>

        <div className="relative z-10">
          <div className="mx-auto w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-green-100">
            <CheckCircle className="w-10 h-10 text-green-500" strokeWidth={2.5} />
          </div>

          <h1 className="text-3xl font-bold text-[#0A58CA] mb-3">
            Thank You!
          </h1>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            Your form has been successfully submitted. Our team at <strong className="text-gray-800">Mallika Super-Speciality Hospital</strong> has received your details and will get back to you shortly.
          </p>

          <div className="bg-[#E7F1FF] rounded-xl p-6 text-left mb-8 border border-blue-100/50 shadow-sm">
            <h3 className="text-[#0A58CA] font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0A58CA] animate-pulse"></span>
              For Urgent Inquiries
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#0A58CA] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Phone</p>
                  <p className="text-gray-800 font-medium">+91 9082097421</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#0A58CA] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Email</p>
                  <p className="text-gray-800 font-medium">hospital.m@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0A58CA] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Location</p>
                  <p className="text-gray-800 text-sm leading-snug">
                    Sharma Estate, S.V Road,<br />
                    Jogeshwari West, Mumbai - 400102
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Replaced button with Link for React Router */}
            <Link 
              to="/"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0A58CA] hover:bg-blue-800 text-white px-6 py-3.5 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Homepage
            </Link>
            
            {/* Replaced button with Link for React Router */}
            <Link 
              to="/contact"
              className="flex-1 inline-flex items-center justify-center bg-transparent border-2 border-[#0A58CA] text-[#0A58CA] hover:bg-[#E7F1FF] px-6 py-3.5 rounded-lg font-semibold transition-all duration-200 active:scale-[0.98]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-400 text-sm animate-entrance" style={{ animationDelay: '0.2s' }}>
        <p>&copy; {new Date().getFullYear()} Mallika Super-Speciality Hospital.</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  );
}
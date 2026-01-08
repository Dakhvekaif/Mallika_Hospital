import { Link } from 'react-router-dom';
import Navbar from './Navbar/navbar';
import desktopVideo from '../../assets/HeroPage/hero-desktop.mp4';
import mobileVideo from '../../assets/HeroPage/hero-mobile.mp4';

function Header() {
  return (
    <>
      <Navbar />

      {/* Hero Wrapper */}
      <div className="relative w-full h-[100vh] overflow-hidden md:mt-16">
        
        {/* Desktop Video */}
        <video
          className="hidden md:block absolute top-1/2 left-1/2 min-w-full min-h-full 
                     -translate-x-1/2 -translate-y-1/2 object-cover -z-10"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={desktopVideo} type="video/mp4" />
        </video>

        {/* Mobile Video */}
        <video
          className="block md:hidden absolute top-1/2 left-1/2 min-w-full min-h-full
                     -translate-x-1/2 -translate-y-1/2 object-cover -z-10"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={mobileVideo} type="video/mp4" />
        </video>

        {/* Hero Content */}
        <div className="relative flex justify-center items-end h-full pb-12 md:pb-20 gap-3 md:gap-6">
        <Link
          to="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold
                     text-sm md:text-base
                     py-2 px-4 md:py-3 md:px-6
                     rounded-md md:rounded-lg
                     transition-all duration-200 transform hover:scale-105"
        >
          Book Appointment
        </Link>

        <Link
          to="/find-doctor"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold
                     text-sm md:text-base
                     py-2 px-4 md:py-3 md:px-6
                     rounded-md md:rounded-lg
                     transition-all duration-200 transform hover:scale-105"
        >
          Find Doctor
        </Link>
      </div>
      </div>
    </>
  );
}

export default Header;
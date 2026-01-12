import { Link } from 'react-router-dom';
import desktopVideo from '../../../assets/HeroPage/hero-desktop.mp4';
import mobileVideo from '../../../assets/HeroPage/hero-mobile.mp4';

function Hero() {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden md:mt-16 max-w-full">
      
      {/* Desktop Video */}
      <video
        className="hidden md:block absolute inset-0 w-full h-full object-cover -z-10"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={desktopVideo} type="video/mp4" />
      </video>

      {/* Mobile Video */}
      <video
        className="block md:hidden absolute inset-0 w-full h-full object-cover -z-10"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={mobileVideo} type="video/mp4" />
      </video>

      {/* Hero Content */}
     <div className="
        relative flex items-end h-full pb-12 md:pb-20
        justify-start md:justify-center
        px-4 md:px-0
      ">
        <Link
          to="/find-doctor"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold
                     text-sm md:text-base 
                     py-2 px-6 md:py-3 md:px-8
                     rounded-md md:rounded-lg
                     transition-all duration-200 transform hover:scale-105
                     flex justify-center items-center"
        >
          Find Doctor
        </Link>
      </div>
    </div>
  );
}

export default Hero;
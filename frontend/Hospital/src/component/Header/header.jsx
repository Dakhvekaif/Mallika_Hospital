import Hero from './Hero/hero';
import Navbar from './Navbar/navbar';
import heropagephoto from '../../assets/HeroPage/heropagephoto.png';
// import { BrowserRouter } from "react-router-dom";


function Header() {
  return (
    <div className="min-h-screen bg-cover md:bg-top bg-center overflow-hidden"
        style={{backgroundImage: `url(${heropagephoto})`}}>
      <Navbar />
      <Hero/>
    </div>
  );
}

export default Header;
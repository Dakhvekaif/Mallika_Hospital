import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet-async'; // 1. IMPORT HELMET FOR HOMEPAGE SEO

// Components
import Header from './Header/header';
import Navbar from './Header/Navbar/navbar'; 
import Main from './Main/main';
import Footer from './Footer/footer';

// Services component
import CathLab from './Header/Services/cathlab'; 
import ICU from './Header/Services/icu';
import OperatingTheatre from './Header/Services/ot';
import Ward from './Header/Services/ward';
import DialysisCenter from './Header/Services/dialysiscenter';
import Pharmacy from './Header/Services/pharmacy';
import Laboratory from './Header/Services/lab';

// AboutUs 
import AboutUs from "./AboutUs/About";

//Surgeries
import GeneralSurgery from './Header/Surgeries/GeneralSurgery';
import OncoSurgery from './Header/Surgeries/OncoSurgery';
import ObstetricsGynecology from './Header/Surgeries/ObstetricsGynecology';
import Orthopedic from './Header/Surgeries/Orthopedic';
import NeuroSurgery from './Header/Surgeries/NeuroSurgery';
import Ent from './Header/Surgeries/Ent';
import Opthalmology from './Header/Surgeries/Opthalmology';
import Proctology from './Header/Surgeries/Proctology';
import PediatricSurgery from "./Header/Surgeries/PediatricSurgery.jsx";
import PlasticSurgery from './Header/Surgeries/PlasticSurgery.jsx';
import Urology from "./Header/Surgeries/Urology.jsx";

//Consultants
import InternalMedicine from "./Header/Consultants/PhysicianDiabetology";
import Nephrology from "./Header/Consultants/Neprology";
import Cardiology from "./Header/Consultants/Cardiology";
import Neurology from "./Header/Consultants/Neurology";
import Oncology from "./Header/Consultants/Oncology";
import Gastroenterology from "./Header/Consultants/Gastroenterology";
import Pediatrician from "./Header/Consultants/Pediatrician";
import Dermatology from "./Header/Consultants/Dermatology";
import Hematology from "./Header/Consultants/Hematology";

// Cashless & TPA
import CashlessTpa from "./Cashless&TPA/CashlessTPA";

// GovtSchemes
import GovtSchemes from "./GovtSch/GovtSchemes";

// ContactUs
import ContactUs from "./ContactUS/ContactUs";

// Dashboard
import Dashboard from "./dashboard/Dashboard.jsx"

// Find Doctor
import DoctorsList from "./Doctor/doctor";
import DoctorProfile from "./Doctor/doctorprofle";
import ChatbotWrapper from "./ChatBot/ChatBotWrapper";

import Testimonial from "./Testimonial/Testimonial";

function App() {
  const { pathname } = useLocation();

  // Check if current route is dashboard to hide global nav/footer
  const isDashboard = pathname.includes('/dashboard');

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [pathname]);

  // 2. HOMEPAGE BRAND DOMINANCE SCHEMA
  const homepageSchema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": "Mallika Hospital",
    "alternateName": "Mallika Multi-Speciality Hospital",
    "url": "https://mallikahospital.co.in",
    "logo": "https://mallikahospital.co.in/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9082097421",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    },
    "sameAs": [
      "https://www.facebook.com/people/Mallika-Multi-Specialty-Hospital/",
      "https://www.instagram.com/mallika_hospital",
      "https://www.linkedin.com/in/mallika-hospital-27b547115/"
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar only shows if NOT on dashboard */}
      {!isDashboard && <Navbar />} 
      
      <div className="flex-grow"> 
        <Routes>
          {/* Homepage - Refactored to include Meta & Entity Schema */}
          <Route path="/" element={
            <>
              <Helmet>
                <title>Mallika Hospital - Multi Speciality Hospital in Jogeshwari West</title>
                <meta name="description" content="Mallika Super-Speciality Hospital in Jogeshwari West, Mumbai offers 24/7 emergency care, advanced ICU, Cath Lab, modular OT, and expert multi-specialty treatments." />
                <link rel="canonical" href="https://mallikahospital.co.in" />
                <script type="application/ld+json">
                  {JSON.stringify(homepageSchema)}
                </script>
              </Helmet>
              <Header/>
              <Main/>
            </>
          } />  

          {/* Core Routes */}
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/about-us' element={<AboutUs />} />

          {/* Service Pages */}
          <Route path="/services/cathlab" element={<CathLab />} />
          <Route path="/services/icu" element={<ICU />} />
          <Route path="/services/ot" element={<OperatingTheatre />} />
          <Route path="/services/ward" element={<Ward />} />
          <Route path="/services/dialysis-center" element={<DialysisCenter />} />
          <Route path="/services/pharmacy" element={<Pharmacy />} />
          <Route path="/services/pathology-lab" element={<Laboratory />} />

          {/* Surgery Pages */}
          <Route path='/surgeries/general-surgery' element={<GeneralSurgery />} />
          <Route path='/surgeries/onco-surgery' element={<OncoSurgery />} />
          <Route path='/surgeries/obstetrics-and-gynecology' element={<ObstetricsGynecology />} />
          <Route path='/surgeries/orthopedic' element={<Orthopedic />} />
          <Route path='/surgeries/neuro-surgery' element={<NeuroSurgery />} />
          <Route path='/surgeries/ent' element={<Ent />} />
          <Route path='/surgeries/Opthalmology' element={<Opthalmology />} />
          <Route path='/surgeries/proctology' element={<Proctology />} />
          <Route path='/surgeries/pediatric-surgery' element={<PediatricSurgery />} />
          <Route path='/surgeries/plastic-surgery' element={<PlasticSurgery />} />
          <Route path='/surgeries/urology' element={<Urology />} />

          {/* Consultants Pages */}
          <Route path='/consultants/physician-and-diabetology' element={<InternalMedicine />} />
          <Route path='/consultants/nephrology' element={<Nephrology />} />
          <Route path='/consultants/cardiology' element={<Cardiology />} />
          <Route path='/consultants/neurology' element={<Neurology />} />
          <Route path='/consultants/oncology' element={<Oncology />} />
          <Route path='/consultants/gastroenterology' element={<Gastroenterology />} />
          <Route path='/consultants/pediatrician' element={<Pediatrician />} />
          <Route path='/consultants/dermatology' element={<Dermatology />} />
          <Route path='/consultants/hematology' element={<Hematology />} />

          {/* Additional Pages */}
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/cashless-&-tpa' element={<CashlessTpa />} />
          <Route path='/govt.sch' element={<GovtSchemes />} />
          <Route path='/contact' element={<ContactUs />} />

          {/* Find Doctor */}
          <Route path="/find-doctor" element={<DoctorsList />} />
          <Route path="/doctor-profile/:slug" element={<DoctorProfile />} />
        </Routes>
      </div>

      {/* Footer and Chatbot hide on dashboard */}
      {!isDashboard && <Footer />}
      {!isDashboard && <ChatbotWrapper />}
    </div>
  );
}

export default App;
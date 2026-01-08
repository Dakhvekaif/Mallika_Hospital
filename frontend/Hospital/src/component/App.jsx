import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

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
// import PlasticSurgery from './Header/Surgeries/PlasticSurgery';
// import VascularSurgery from './Header/Surgeries/VascularSurgery';

//Consultants
import InternalMedicine from "./Header/Consultants/PhysicianDiabetology";
import Nephrology from "./Header/Consultants/Neprology";
import Cardiology from "./Header/Consultants/Cardiology";
import Neurology from "./Header/Consultants/Neurology";
import Oncology from "./Header/Consultants/Oncology";
import Gastroenterology from "./Header/Consultants/Gastroenterology";
import Pediatrician from "./Header/Consultants/Pediatrician";
import Dermatology from "./Header/Consultants/Dermatology";
// import Urology from "./Header/Consultants/Urology";
// import Radiology from "./Header/Consultants/Radiology";

// Cashless & TPA
import CashlessTpa from "./Cashless&TPA/CashlessTPA";

// GovtSchemes
import GovtSchemes from "./GovtSch/GovtSchemes";

// ContactUs
import ContactUs from "./ContactUS/ContactUs";

// Meida
// import Floor1 from "./Media/floor1";
// import Floor2 from "./Media/floor2";
// import Floor3 from "./Media/floor3";
// import Dashboard from "./dashboard/Dashboard.jsx"

// Find Doctor
import DoctorsList from "./Doctor/doctor";
import DoctorProfile from "./Doctor/doctorprofle";

function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // or "smooth"
    });
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> 
      
      <div className="flex-grow"> 
        <Routes>
          {/* Homepage */}
          <Route path="/" element={
            <>
              <Header/>
              <Main/>
            </>          } />  

          {/* About Us */}
          {/* <Route path='/dashboard' element={<Dashboard />} /> */}
          <Route path='/about-us' element={<AboutUs />} />

          {/* Service Pages */}
          <Route path="/services/cathlab" element={<CathLab />} />
          <Route path="/services/icu" element={<ICU />} />
          <Route path="/services/ot" element={<OperatingTheatre />} />
          <Route path="/services/ward" element={<Ward />} />
          <Route path="/services/dialysis-center" element={<DialysisCenter />} />
          <Route path="/services/pharmacy" element={<Pharmacy />} />
          <Route path="/services/lab" element={<Laboratory />} />

          {/* Surgery Pages */}
          <Route path='/surgeries/general-surgery' element={<GeneralSurgery />} />
          <Route path='/surgeries/onco-surgery' element={<OncoSurgery />} />
          <Route path='/surgeries/obstetrics-and-gynecology' element={<ObstetricsGynecology />} />
          <Route path='/surgeries/orthopedic' element={<Orthopedic />} />
          <Route path='/surgeries/neuro-surgery' element={<NeuroSurgery />} />
          <Route path='/surgeries/ent' element={<Ent />} />
          <Route path='/surgeries/Opthalmology' element={<Opthalmology />} />
          <Route path='/surgeries/proctology' element={<Proctology />} />
          {/* <Route path='/surgeries/plastic-surgery' element={<PlasticSurgery />} /> */}
          {/* <Route path='/surgeries/vascular-surgery' element={<VascularSurgery />} /> */}

          {/* Consultants Pages */}
          <Route path='/consultants/physician-and-diabetology' element={<InternalMedicine />} />
          <Route path='/consultants/neprology' element={<Nephrology />} />
          <Route path='/consultants/cardiology' element={<Cardiology />} />
          <Route path='/consultants/neurology' element={<Neurology />} />
          <Route path='/consultants/oncology' element={<Oncology />} />
          <Route path='/consultants/gastroenterology' element={<Gastroenterology />} />
          <Route path='/consultants/pediatrician' element={<Pediatrician />} />
          <Route path='/consultants/dermatology' element={<Dermatology />} />
          {/* <Route path='/consultants/urology' element={<Urology />} /> */}
          {/* <Route path='/consultants/radiology' element={<Radiology />} /> */}

          {/* Cashless & TPA */}
          <Route path='/cashless-&-tpa' element={<CashlessTpa />} />

          {/* Govt Schemes */}
          <Route path='/govt.sch' element={<GovtSchemes />} />

          {/* ContactUs */}
          <Route path='/contact' element={<ContactUs />} />

          {/* Media */}
          {/* <Route path='media/floor1' element={<Floor1 />} />
          <Route path='media/floor2' element={<Floor2 />} />
          <Route path='media/floor3' element={<Floor3 />} /> */}

          {/* Find Doctor */}
          <Route path="/find-doctor" element={<DoctorsList />} />
          <Route path="/doctor-profile/:id" element={<DoctorProfile />} />

        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
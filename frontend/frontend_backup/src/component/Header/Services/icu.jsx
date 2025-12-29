import img1 from '../../../assets/Services/ICU/icu.png';
import img2 from '../../../assets/Services/ICU/icuimg1.png';
import img3 from '../../../assets/Services/ICU/icuimg2.png';
import img4 from '../../../assets/Services/ICU/icuimg3.png';
import { FaUserNurse, FaHeartbeat, FaShieldVirus, FaNotesMedical, FaUsers, FaComments, FaCouch } from 'react-icons/fa';

const ICU = () => {
  return (
      <div className="w-full min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80 z-10"></div>
        <img 
          src={img1} 
          alt="Intensive Care Unit (ICU)" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Intensive Care Unit (ICU)</h1>
            <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto">
              Delivering critical, round-the-clock care with advanced technology and a dedicated team of experts.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* What is an ICU Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">A Place for Critical Care</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Intensive Care Unit (ICU) is a specialized department designed to provide comprehensive care for patients with life-threatening illnesses or injuries. 
            Staffed by a highly trained team of critical care specialists, our ICU is equipped with advanced technology to monitor and support vital organ functions 24/7.
          </p>
        </section>

        {/* Our ICU Features Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our ICU Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <FaUserNurse className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Critical Care</h3>
              <p className="text-gray-600">Our dedicated team of intensivists, nurses, and therapists is present around the clock to provide constant monitoring and immediate intervention.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <FaHeartbeat className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Life Support</h3>
              <p className="text-gray-600">State-of-the-art equipment including advanced ventilators, hemodynamic monitors, and dialysis machines to support every critical need.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <FaShieldVirus className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Private Isolation Rooms</h3>
              <p className="text-gray-600">We offer private rooms with negative pressure capabilities to ensure patient privacy, comfort, and strict infection control.</p>
            </div>
          </div>
        </section>

        {/* Conditions We Treat Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Conditions We Manage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <FaNotesMedical className="text-2xl text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Post-Surgical Recovery</h3>
                <p className="text-gray-600">Close monitoring after major surgeries like open-heart, organ transplants, or neurosurgery.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaNotesMedical className="text-2xl text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Severe Respiratory Failure</h3>
                <p className="text-gray-600">Providing advanced respiratory support, including mechanical ventilation for conditions like ARDS.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaNotesMedical className="text-2xl text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Sepsis & Severe Infections</h3>
                <p className="text-gray-600">Rapid response and aggressive treatment for life-threatening infections and septic shock.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaNotesMedical className="text-2xl text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Cardiovascular Emergencies</h3>
                <p className="text-gray-600">Care for patients after a major heart attack, cardiogenic shock, or unstable cardiac arrhythmias.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Family-Centered Care Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Family-Centered Care</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaUsers className="text-3xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Visiting Hours</h3>
              <p className="text-gray-600">We understand the importance of family presence and offer flexible visiting policies to support our patients and their loved ones.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaComments className="text-3xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Regular Communication</h3>
              <p className="text-gray-600">Our team is committed to providing families with regular, clear, and compassionate updates on their loved one's condition.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaCouch className="text-3xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comfortable Waiting Area</h3>
              <p className="text-gray-600">A quiet and comfortable space is available for families to rest while they remain close to their loved ones.</p>
            </div>
          </div>
        </section>

        {/* Image section */}
        <section className="bg-gray-300 rounded-lg p-8 md:p-12 flex flex-wrap gap-10 justify-center">
          <img src={img2} alt="ICU-image" className='w-90' />
          <img src={img3} alt="ICU-image" className='w-90' />
          <img src={img4} alt="ICU-image" className='w-90' />
        </section>

      </div>
    </div>
  );
};

export default ICU;
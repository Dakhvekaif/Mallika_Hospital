import img1 from '../../../assets/Services/Pharma/pharma.png';
import img2 from '../../../assets/Services/Pharma/pharmaimg1.png';
import img3 from '../../../assets/Services/Pharma/pharmaimg2.png';
import img4 from '../../../assets/Services/Pharma/pharmaimg3.png';
import { FaPills, FaUserMd, FaClock, FaPrescriptionBottle, FaFileMedical, FaComments, FaHandHoldingMedical } from 'react-icons/fa';

const Pharmacy = () => {
  return (
    <div className="w-full min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80 z-10"></div>
        <img 
          src={img1} 
          alt="Hospital Pharmacy" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">24/7 Hospital Pharmacy</h1>
            <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto">
              Your trusted partner for accurate, timely, and compassionate pharmaceutical care.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Partner in Health</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our hospital pharmacy is an integral part of your healthcare team. We are dedicated to ensuring you receive the right medications, 
            at the right dose, with clear instructions. Our expert pharmacists are here to answer your questions and support your wellness journey.
          </p>
        </section>

        {/* Our Pharmacy Services Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Pharmacy Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <FaPrescriptionBottle className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Inpatient & Outpatient</h3>
              <p className="text-gray-600">We efficiently manage prescriptions for patients within the hospital and for those being discharged.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <FaComments className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Medication Counseling</h3>
              <p className="text-gray-600">Our pharmacists provide private consultations to explain your medication, dosage, and potential side effects.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <FaClock className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quick & Easy Refills</h3>
              <p className="text-gray-600">We offer convenient options to refill your prescriptions, saving you time and hassle.</p>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <FaPills className="text-2xl text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Comprehensive Stock</h3>
                <p className="text-gray-600">Our pharmacy maintains a wide inventory of prescription and over-the-counter medications to meet your needs.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaFileMedical className="text-2xl text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Prescription Management</h3>
                <p className="text-gray-600">We work with your doctors to ensure prescriptions are accurate, filled promptly, and safely managed.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaUserMd className="text-2xl text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Medication Therapy Management</h3>
                <p className="text-gray-600">We help you understand your medications better to improve health outcomes and prevent adverse drug events.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaHandHoldingMedical className="text-2xl text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Specialty Medications</h3>
                <p className="text-gray-600">Access to specialized medications for complex conditions, with dedicated support for patients.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How to Get Your Prescription Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How to Get Your Prescription</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaFileMedical className="text-3xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">1. Submit Your Prescription</h3>
              <p className="text-gray-600">Have your doctor send it to us electronically, or drop it off at our pharmacy counter.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaPills className="text-3xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">2. We Fill It with Care</h3>
              <p className="text-gray-600">Our pharmacists review your prescription for accuracy and prepare your medication with precision.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaComments className="text-3xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">3. Pickup & Consultation</h3>
              <p className="text-gray-600">Pick up your order at your convenience. Our pharmacist is available to answer any final questions you may have.</p>
            </div>
          </div>
        </section>

        {/* Image section */}
        <section className="bg-gray-300 rounded-lg p-8 md:p-12 flex flex-wrap gap-10 justify-center">
          <img src={img2} alt="Pharmacy-image" className='w-90' />
          <img src={img3} alt="Pharmacy-image" className='w-90' />
          <img src={img4} alt="Pharmacy-image" className='w-90' />
        </section>

      </div>
    </div>
  );
};

export default Pharmacy;
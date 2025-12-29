import img1 from '../../../assets/Services/Ward/ward.png';
import img2 from '../../../assets/Services/Ward/wardimg1.png';
import img3 from '../../../assets/Services/Ward/wardimg2.png';
import img4 from '../../../assets/Services/Ward/wardimg3.png';
import { FaBed, FaUserNurse, FaUtensils, FaWifi, FaConciergeBell, FaBaby, FaHeart, FaHome, FaClipboardList } from 'react-icons/fa';

const Ward = () => {
  return (
    <div className="w-full min-h-screen bg-white pt-20">
    {/* Hero Section */}
    <div className="relative h-96 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80 z-10"></div>
      <img 
        src={img1} 
        alt="Our Wards" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Wards</h1>
          <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto">
            A comfortable and supportive environment designed for your recovery and well-being.
          </p>
        </div>
      </div>
    </div>
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Comfort & Care During Your Stay</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our inpatient wards are designed to provide a healing environment where you can rest and recover with peace of mind. 
            With a focus on comfort, privacy, and dedicated medical care, we ensure you feel supported every step of the way.
          </p>
        </section>

        {/* Our Ward Features Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Ward Features & Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <FaBed className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comfortable Rooms</h3>
              <p className="text-gray-600">Well-appointed private and semi-private rooms designed for rest and recovery.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <FaUserNurse className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Nursing Care</h3>
              <p className="text-gray-600">Our compassionate nursing team is available around the clock to assist with your needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <FaUtensils className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nutritional Support</h3>
              <p className="text-gray-600">Healthy, delicious meals tailored to your dietary needs and prepared by expert dietitians.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <FaWifi className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Patient Entertainment</h3>
              <p className="text-gray-600">Stay connected with complimentary Wi-Fi and access to television and other amenities.</p>
            </div>
          </div>
        </section>

        {/* Types of Wards Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Wards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaConciergeBell className="text-3xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">General Wards</h3>
              <p className="text-gray-600">Semi-private and general wards providing excellent care for patients recovering from a wide range of conditions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaBaby className="text-3xl text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Maternity Ward</h3>
              <p className="text-gray-600">A special, nurturing environment for mothers and newborns, featuring private labor and delivery rooms.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaHeart className="text-3xl text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Private Rooms</h3>
              <p className="text-gray-600">For those seeking enhanced privacy and comfort, our private rooms offer a serene space for recovery.</p>
            </div>
          </div>
        </section>
        
        {/* Guide for Patients & Families Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Guide for Patients & Families</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaClipboardList className="text-3xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Admission</h3>
              <p className="text-gray-600">Our front desk staff will guide you through a smooth and efficient admission process, ensuring all necessary information is recorded.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaConciergeBell className="text-3xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">During Your Stay</h3>
              <p className="text-gray-600">Meals are served at scheduled times. Nurses are available at the press of a button, and we have clear visiting hours to support your rest.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaHome className="text-3xl text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Discharge</h3>
              <p className="text-gray-600">Our team will provide you with detailed instructions for at-home care, medications, and follow-up appointments to ensure a smooth transition.</p>
            </div>
          </div>
        </section>

        {/* Image section */}
        <section className="bg-gray-300 rounded-lg p-8 md:p-12 flex flex-wrap gap-10 justify-center">
          <img src={img2} alt="Ward-image" className='w-90' />
          <img src={img3} alt="Ward-image" className='w-90' />
          <img src={img4} alt="Ward-image" className='w-90' />
        </section>

      </div>
    </div>
  );
};

export default Ward;
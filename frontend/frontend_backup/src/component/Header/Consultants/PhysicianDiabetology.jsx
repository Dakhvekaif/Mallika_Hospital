import { FaUserMd, FaStethoscope, FaShieldAlt, FaNotesMedical, FaCheckCircle, FaHeartbeat } from 'react-icons/fa';

const InternalMedicine = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Physicians</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Your dedicated partners in long-term health, with a special focus on diabetes and chronic disease management.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive Care for Adults</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team of board-certified internal medicine physicians is dedicated to preventing, diagnosing, and treating a wide range of adult illnesses. 
            We serve as your primary care providers, offering continuous, coordinated care to help you achieve and maintain your best possible health.
          </p>
        </section>

        {/* Our Approach to Care - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">A Foundation for Your Wellness</h2>
            <p className="text-gray-600 mb-4">
              We believe in building a strong, trusting relationship with you, centered on communication, education, and personalized care.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaStethoscope className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Preventative Health:</strong> We focus on routine check-ups, screenings, and vaccinations to keep you healthy.</span></li>
              <li className="flex items-start"><FaNotesMedical className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Chronic Disease Management:</strong> We provide expert, long-term management for conditions like diabetes, hypertension, and asthma.</span></li>
              <li className="flex items-start"><FaUserMd className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Coordination of Care:</strong> We serve as your central point of contact, coordinating with specialists to ensure all your health needs are met.</span></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" alt="Physician consulting with a patient" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Areas of Expertise - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Areas of Expertise</h2>
          
          {/* Expertise 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaHeartbeat className="text-red-500 mr-3" />Diabetology</h3>
              <p className="text-gray-600">
                Our physicians have special expertise in managing all types of diabetes. We provide comprehensive care, including medication management, lifestyle counseling, and monitoring to prevent complications.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop" alt="Doctor reviewing a glucose monitor" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaShieldAlt className="text-green-500 mr-3" />Preventative Medicine</h3>
              <p className="text-gray-600">
                We are your proactive partners in health, offering annual physicals, risk assessments, and personalized wellness plans to help you stay ahead of potential health issues.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop" alt="Doctor talking to a healthy patient" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaNotesMedical className="text-purple-500 mr-3" />Acute & Chronic Care</h3>
              <p className="text-gray-600">
                From treating common illnesses like the flu to managing complex chronic conditions, our physicians provide skilled, evidence-based care to improve your health and quality of life.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1780&auto=format&fit=crop" alt="Physician reviewing a patient chart" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
        </section>

        {/* Meet Our Physicians Section - The Main Focus */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Expert Physicians</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1887&auto=format&fit=crop" alt="Dr. Evelyn Reed" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Evelyn Reed</h3>
                <p className="text-blue-600 mb-3">MD, FACP - Chief of Internal Medicine</p>
                <p className="text-gray-600 text-sm">A dedicated primary care physician with a special interest in preventative medicine and women's health, committed to building lasting patient relationships.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1780&auto=format&fit=crop" alt="Dr. Ben Carter" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Ben Carter</h3>
                <p className="text-blue-600 mb-3">MD, FACE - Diabetologist & Endocrinologist</p>
                <p className="text-gray-600 text-sm">An expert in diabetes and thyroid disorders, Dr. Carter provides advanced, compassionate care to help patients manage their conditions effectively.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ce2?q=80&w=1887&auto=format&fit=crop" alt="Dr. Aisha Khan" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Aisha Khan</h3>
                <p className="text-blue-600 mb-3">MD, FACP - Internal Medicine Physician</p>
                <p className="text-gray-600 text-sm">Passionate about whole-patient care, Dr. Khan focuses on managing complex chronic diseases and promoting healthy lifestyle changes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-teal-600 rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Your Long-Term Health Partner</h2>
          <p className="text-lg mb-6">Take control of your health. Schedule a check-up with one of our expert physicians today.</p>
          <button className="bg-white text-teal-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
            Schedule a Check-Up
          </button>
        </section>

      </div>
    </div>
  );
};

export default InternalMedicine;
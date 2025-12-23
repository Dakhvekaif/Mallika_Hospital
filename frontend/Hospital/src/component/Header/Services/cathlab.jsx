import { FaHeartbeat, FaMicroscope, FaUserMd, FaProcedures, FaLaptopMedical, FaClock } from 'react-icons/fa'; // Example icons

const CathLab = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Catheterization Laboratory (Cath Lab)</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Providing state-of-the-art diagnostic and interventional cardiology services for your heart health.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* What is a Cath Lab Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What is a Cath Lab?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Catheterization Laboratory is a specialized hospital room equipped with advanced imaging technology. 
            It allows our cardiologists to perform minimally invasive tests and procedures to diagnose and treat 
            cardiovascular conditions, such as clogged arteries and heart valve problems.
          </p>
        </section>

        {/* Our Advanced Technology Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Advanced Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <FaLaptopMedical className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flat-Panel Detectors</h3>
              <p className="text-gray-600">Provides sharper, clearer images with lower radiation doses for enhanced safety and precision.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <FaMicroscope className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">IVUS & OCT Imaging</h3>
              <p className="text-gray-600">Intravascular ultrasound and optical coherence tomography for detailed views inside the arteries.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <FaHeartbeat className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">3D Rotational Angiography</h3>
              <p className="text-gray-600">Creates a 3D model of the heart's vessels, allowing for better planning of complex procedures.</p>
            </div>
          </div>
        </section>

        {/* Procedures Performed Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Procedures Performed</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <FaProcedures className="text-2xl text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Coronary Angiography</h3>
                <p className="text-gray-600">An X-ray test to find out if your coronary arteries are narrowed or blocked.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaProcedures className="text-2xl text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Percutaneous Coronary Intervention (PCI)</h3>
                <p className="text-gray-600">Also known as angioplasty, a procedure to open up blocked coronary arteries.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaProcedures className="text-2xl text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Stent Placement</h3>
                <p className="text-gray-600">A small, expandable mesh tube is placed in an artery to keep it open.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaProcedures className="text-2xl text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Pacemaker & ICD Implantation</h3>
                <p className="text-gray-600">Devices to help control abnormal heart rhythms.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* What to Expect Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What to Expect: Your Journey with Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaClock className="text-3xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Before the Procedure</h3>
              <p className="text-gray-600">You will receive specific instructions on eating, drinking, and medication. Our team will review the procedure and answer any questions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaUserMd className="text-3xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">During the Procedure</h3>
              <p className="text-gray-600">You will be awake but given medication to relax. A small catheter is inserted, and you may feel mild pressure. The procedure typically lasts 1-2 hours.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaHeartbeat className="text-3xl text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">After the Procedure</h3>
              <p className="text-gray-600">You will be monitored for several hours. Most patients go home the same day or the next morning. We provide clear instructions for recovery at home.</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-600 rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Prioritize Your Heart Health?</h2>
          <p className="text-lg mb-6">Our expert cardiology team is here to provide you with the best possible care.</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
            Schedule a Consultation
          </button>
        </section>

      </div>
    </div>
  );
};

export default CathLab;
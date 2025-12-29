import { FaBrain, FaMicroscope, FaUserMd, FaCogs, FaShieldAlt, FaCheckCircle, FaBone } from 'react-icons/fa';
const Neurosurgery = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Neurosurgery</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Pioneering surgical solutions for the most complex conditions of the brain, spine, and nervous system.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Excellence in Neurological and Spinal Care</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Neurosurgery department is at the forefront of treating disorders of the brain, spine, and peripheral nerves. 
            Our team of highly skilled neurosurgeons combines unparalleled expertise with the most advanced technology 
            to provide the safest and most effective care for our patients.
          </p>
        </section>

        {/* Our Approach - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Precision, Technology, and Compassion</h2>
            <p className="text-gray-600 mb-4">
              We are dedicated to a multidisciplinary approach, ensuring every patient receives a comprehensive and personalized treatment plan.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaMicroscope className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Advanced Intra-Operative Technology:</strong> We utilize high-definition microscopes, intra-operative MRI, and computer-assisted neuronavigation for unparalleled precision.</span></li>
              <li className="flex items-start"><FaShieldAlt className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Minimally Invasive & Endoscopic Techniques:</strong> We prioritize less invasive approaches to reduce trauma, minimize pain, and accelerate recovery.</span></li>
              <li className="flex items-start"><FaUserMd className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Collaborative Expertise:</strong> Our neurosurgeons work closely with neurologists, oncologists, and critical care specialists to manage the most complex cases.</span></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1780&auto=format&fit=crop" alt="Neurosurgeon using advanced technology" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Areas of Surgical Expertise - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Areas of Surgical Expertise</h2>
          
          {/* Expertise 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaBrain className="text-blue-600 mr-3" />Brain Surgery</h3>
              <p className="text-gray-600">
                Our team is skilled in treating a wide range of brain conditions with the utmost precision, from removing complex tumors to repairing vascular abnormalities.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Brain Tumor Surgery (Glioma, Meningioma, Pituitary Tumors)</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Cerebrovascular Surgery (Aneurysms, AVMs, Stroke)</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Traumatic Brain Injury (TBI) Management</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop" alt="Advanced surgical technology" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaBone className="text-purple-600 mr-3" />Spine Surgery</h3>
              <p className="text-gray-600">
                We offer comprehensive surgical and non-surgical care for the entire spine, focusing on relieving pain, restoring stability, and improving function.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Minimally Invasive & Robotic-Assisted Spine Surgery</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Decompression for Spinal Stenosis & Herniated Discs</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Spinal Fusion & Deformity Correction (Scoliosis)</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop" alt="Surgeon analyzing a spine model" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaCogs className="text-teal-600 mr-3" />Functional Neurosurgery</h3>
              <p className="text-gray-600">
                This specialized field focuses on restoring function and improving quality of life for patients with movement disorders, chronic pain, and epilepsy.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Deep Brain Stimulation (DBS) for Parkinson's & Tremors</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Surgery for Epilepsy</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Neurostimulation for Chronic Pain Management</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=2070&auto=format&fit=crop" alt="Abstract neural network visualization" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
        </section>

        {/* Meet Our Neurosurgeons Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Neurosurgeons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1887&auto=format&fit=crop" alt="Dr. Aris Thorne" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Aris Thorne</h3>
                <p className="text-blue-600 mb-3">MD, PhD, FACS - Chief of Neurosurgery</p>
                <p className="text-gray-600 text-sm">A world-renowned expert in skull-base and cerebrovascular surgery, dedicated to pioneering techniques for treating complex brain tumors and aneurysms.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1780&auto=format&fit=crop" alt="Dr. Lena Petrova" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Lena Petrova</h3>
                <p className="text-blue-600 mb-3">MD - Spine Specialist</p>
                <p className="text-gray-600 text-sm">Fellowship-trained in complex spinal reconstruction, Dr. Petrova specializes in minimally invasive and robotic-assisted procedures to correct deformities and alleviate pain.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ce2?q=80&w=1887&auto=format&fit=crop" alt="Dr. Ben Carter" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Ben Carter</h3>
                <p className="text-blue-600 mb-3">MD, FRCS - Functional Neurosurgeon</p>
                <p className="text-gray-600 text-sm">A leader in the field of functional neurosurgery, Dr. Carter is an expert in Deep Brain Stimulation and surgery for movement disorders and epilepsy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-600 rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">At the Forefront of Neurological Care</h2>
          <p className="text-lg mb-6">If you are facing a complex neurological condition, our expert team is here to provide the advanced care and hope you deserve.</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
            Request a Neurosurgery Consultation
          </button>
        </section>

      </div>
    </div>
  );
};

export default Neurosurgery;
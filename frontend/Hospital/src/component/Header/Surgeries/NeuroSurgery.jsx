import img1 from '../../../assets/Surgery/Neuro/neuro.png';
import img2 from '../../../assets/Surgery/Neuro/neuroimg1.png';
import img3 from '../../../assets/Surgery/Neuro/neuroimg2.png';
import img4 from '../../../assets/Surgery/Neuro/neuroimg3.png';
import img5 from '../../../assets/Surgery/Neuro/neuroimg4.png';
import doc1 from '../../../assets/Surgery/Neuro/doc1.png';
import doc2 from '../../../assets/Surgery/Neuro/doc2.png';
import doc3 from '../../../assets/Surgery/Neuro/doc3.png';
import doc4 from '../../../assets/Surgery/Neuro/doc4.png';
import { FaBrain, FaMicroscope, FaUserMd, FaCogs, FaShieldAlt, FaCheckCircle, FaBone } from 'react-icons/fa';

const Neurosurgery = () => {
  return (
      <div className="w-full min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80 z-10"></div>
          <img 
            src={img1} 
            alt="Neurosurgery" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Neurosurgery</h1>
              <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-xl max-w-3xl mx-auto">
                Pioneering surgical solutions for the most complex conditions of the brain, spine, and nervous system.
              </p>
            </div>
          </div>
        </div>

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
            <img src={img2} 
            alt="Neurosurgeon using advanced technology" 
            className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
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
              <img src={img3} 
              alt="Advanced surgical technology" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
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
              <img src={img4} 
              alt="Surgeon analyzing a spine model" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
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
              <img src={img5} 
              alt="Abstract neural network visualization" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
        </section>

        {/* Meet Our Lead Surgeons Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Lead Surgeons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src={doc1} alt="Dr. image" className="w-full h-full object-cover" />
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src={doc2} alt="Dr. image" className="w-full h-full object-cover" />
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src={doc3} alt="Dr. image" className="w-full h-full object-cover" />
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src={doc4} alt="Dr. image" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Neurosurgery;
import img1 from '../../../assets/Surgery/Ortho/ortho.png';
import img2 from '../../../assets/Surgery/Ortho/orthoimg1.png';
import img3 from '../../../assets/Surgery/Ortho/orthoimg2.png';
import img4 from '../../../assets/Surgery/Ortho/orthoimg3.png';
import img5 from '../../../assets/Surgery/Ortho/orthoimg4.png';
import doc1 from '../../../assets/Surgery/Ortho/doc1.png';
import doc2 from '../../../assets/Surgery/Ortho/doc2.png';
import doc3 from '../../../assets/Surgery/Ortho/doc3.png';
import { FaBone, FaRunning, FaUserMd, FaHandHoldingMedical, FaWheelchair, FaCheckCircle} from 'react-icons/fa';

const Orthopedic = () => {
  return (
      <div className="w-full min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80 z-10"></div>
          <img 
            src={img1} 
            alt="Orthopedics" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Orthopedics</h1>
              <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-xl max-w-3xl mx-auto">
                Dedicated to restoring your mobility, relieving your pain, and getting you back to the life you love.
              </p>
            </div>
          </div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Partner in Musculoskeletal Health</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Orthopedics department offers comprehensive care for a wide range of conditions affecting your bones, joints, ligaments, tendons, and muscles. 
            From conservative therapies to advanced surgical procedures, our expert team is dedicated to helping you regain strength, function, and mobility.
          </p>
        </section>

        {/* Our Approach - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">A Full Spectrum of Bone & Joint Care</h2>
            <p className="text-gray-600 mb-4">
              We believe in a personalized approach to your care, starting with the most conservative treatments and advancing to surgery only when necessary.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaHandHoldingMedical className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Non-Surgical Treatments:</strong> We offer physical therapy, medication management, and injections to effectively manage pain and improve function.</span></li>
              <li className="flex items-start"><FaUserMd className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Minimally Invasive Surgery:</strong> Whenever possible, we use arthroscopic and other advanced techniques to minimize pain and accelerate recovery.</span></li>
              <li className="flex items-start"><FaBone className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Complex Reconstruction:</strong> Our surgeons are experts in joint replacement, spine surgery, and trauma care for the most challenging conditions.</span></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src={img2} 
            alt="Surgeon analyzing a knee model" 
            className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Areas of Expertise - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Areas of Expertise</h2>
          
          {/* Expertise 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Joint Replacement</h3>
              <p className="text-gray-600">
                Relieve chronic pain and restore function with our advanced joint replacement procedures. We specialize in minimally invasive hip and knee replacements to help you get back on your feet faster.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Total & Partial Knee Replacement</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Total Hip Replacement</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Shoulder & Elbow Replacement</li>
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
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Sports Medicine</h3>
              <p className="text-gray-600">
                We provide specialized care for athletes of all levels. Our focus is on the prevention, diagnosis, and treatment of sports-related injuries, helping you return to your peak performance safely and quickly.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Arthroscopic Knee & Shoulder Surgery</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> ACL & Ligament Reconstruction</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Concussion Management</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src={img4}
              alt="Athlete training with physiotherapist" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Spine Care</h3>
              <p className="text-gray-600">
                Our spine specialists offer expert diagnosis and treatment for back and neck pain. We offer a full range of options, from physical therapy to complex spinal reconstruction, to alleviate pain and restore stability.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Minimally Invasive Spine Surgery</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Herniated Disc Treatment</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Spinal Fusion & Decompression</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src={img5} 
              alt="Doctor examining a spine model" 
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
          </div>
        </section>

      </div>
    </div>
  );
};

export default Orthopedic;
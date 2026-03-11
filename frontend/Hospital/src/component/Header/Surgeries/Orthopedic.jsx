import img from '../../../assets/Surgery/Ortho/ortho.png';
import img1 from '../../../assets/Surgery/Ortho/orthoimg1.png';
import img2 from '../../../assets/Surgery/Ortho/orthoimg2.png';
import img3 from '../../../assets/Surgery/Ortho/orthoimg3.png';
import img4 from '../../../assets/Surgery/Ortho/orthoimg4.png';
import img5 from '../../../assets/Surgery/Ortho/orthoimg5.png';
import img6 from '../../../assets/Surgery/Ortho/orthoimg6.png';
import { FaBone, FaRunning, FaUserMd, FaHandHoldingMedical, FaWheelchair, FaCheckCircle} from 'react-icons/fa';
import { useEffect, useState } from 'react';
import DoctorCard from '../DoctorCard.jsx';
import { getDoctors } from '../../dashboard/api.js';

const Orthopedic = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ UPDATED: Based on your data, the ID should be 13
  const ORTHOPAEDIC_SURGERY_DEPARTMENT_ID = 15; 

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getDoctors();

        // Filter only Orthopedic Surgery doctors by matching the department ID 15
        const orthopedicSurgeryDoctors = data.filter(
          (doctor) => doctor.department === ORTHOPAEDIC_SURGERY_DEPARTMENT_ID
        );

        setDoctors(orthopedicSurgeryDoctors);
      } catch (error) {
        console.error("Failed to fetch doctors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const formatTime = (time) => {
    if (!time) return 'By Appointment';
    const [h, m] = time.split(':');
    const hour = h % 12 || 12;
    const ampm = h >= 12 ? 'PM' : 'AM';
    return `${hour}:${m} ${ampm}`;
  };

  return (
      <div className="w-full min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-blue-700/30 z-10"></div>
          <img 
            src={img} 
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

        {/* Orthopedic Surgery Doctors Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Orthopedic & Laproscopic Specialists
          </h2>

          {loading ? (
            <p className="text-center text-gray-500">Loading specialists...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {doctors.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  doctor={doctor}
                  departmentName="Orthopedic"
                  formatTime={formatTime}
                />
              ))}
            </div>
          )}
        </section>

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
            <img src={img1} 
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
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Fracture Surgery</h3>
              <p className="text-gray-600">
                Fracture surgery is performed to repair broken bones when they cannot heal properly with casting or splinting alone. The procedure involves realigning the broken bone fragments and stabilizing them using plates, screws, rods, or pins to ensure proper healing. Fracture surgery helps restore normal bone function, reduce pain, and prevent long-term deformity or loss of movement. With proper care and rehabilitation, most patients recover well and regain strength and mobility.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={img2} 
              alt="Advanced surgical technology" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Joint Dislocation slippe Disc</h3>
              <p className="text-gray-600">
                Joint dislocation occurs when the ends of bones are forced out of their normal position, usually due to injury or trauma. Surgical treatment is required when the joint cannot be safely repositioned or when there is repeated dislocation. Surgery helps restore joint alignment, stability, and normal movement while reducing pain and the risk of future injuries.Slipped disc, also known as a herniated or prolapsed disc, happens when the soft inner portion of a spinal disc pushes out and presses on nearby nerves. Surgery is recommended when severe pain, weakness, or nerve damage does not improve with conservative treatment. The procedure relieves pressure on the nerves, reduces pain, and improves mobility and quality of life.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={img3}
              alt="Athlete training with physiotherapist" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
          
          {/* Expertise 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Joint Replacement</h3>
              <p className="text-gray-600">
                Joint replacement surgery of the hip or knee is performed to relieve severe pain and restore movement in joints damaged by arthritis, injury, or wear and tear. During the procedure, the damaged joint surfaces are removed and replaced with artificial implants designed to function like a natural joint. Hip and knee replacement surgery significantly improves mobility, reduces pain, and enhances quality of life. With proper rehabilitation, most patients can return to daily activities and enjoy long-term relief.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={img4} 
              alt="Advanced surgical technology" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>


          {/* Expertise 5 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Arthroscopic Rotatar Cuff repair</h3>
              <p className="text-gray-600">
                Arthroscopic rotator cuff repair is a minimally invasive procedure used to treat tears in the rotator cuff tendons of the shoulder. Using a small camera and specialized instruments, the surgeon repairs the damaged tendons through tiny incisions, reducing pain and tissue damage. This surgery helps restore shoulder strength, stability, and range of motion. With proper physiotherapy and rehabilitation, most patients achieve good recovery and improved shoulder function.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={img5}
              alt="Athlete training with physiotherapist" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
          
          {/* Expertise 4 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Arthroscopic Ligament Reconstruction</h3>
              <p className="text-gray-600">
                Arthroscopic ligament reconstruction is a minimally invasive surgical procedure used to repair or replace a damaged ligament, most commonly in the knee or shoulder. The surgery is performed using a small camera (arthroscope) and specialized instruments through tiny incisions, allowing precise reconstruction of the ligament. This procedure helps restore joint stability, reduce pain, and improve movement. With proper rehabilitation and physiotherapy, patients can gradually return to normal activities and sports.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={img6} 
              alt="Doctor examining a spine model" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
        </section>

        {/* Meet Our Lead Surgeons Section */}
        {/* <section>
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
        </section> */}

      </div>
    </div>
  );
};

export default Orthopedic;
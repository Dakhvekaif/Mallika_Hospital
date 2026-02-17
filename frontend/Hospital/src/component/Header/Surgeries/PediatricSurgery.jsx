import img1 from '../../../assets/Consultant/Pediat/pediat.png';
import img2 from '../../../assets/Consultant/Pediat/pediatimg1.png';
import img3 from '../../../assets/Consultant/Pediat/pediatimg2.png';
import img4 from '../../../assets/Consultant/Pediat/pediatimg3.png';
import img5 from '../../../assets/Consultant/Pediat/pediatimg4.png';
import { FaUserMd, FaUsers, FaShieldAlt, FaHandHoldingMedical, FaHeartbeat, FaCheckCircle, FaChild, FaBaby, FaStethoscope } from 'react-icons/fa';

const PediatricSurgery = () => {
  return (
      <div className="w-full min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-teal-700/80 z-10"></div>
          <img 
            src={img1} 
            alt="Pediatric Surgery" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Pediatric Surgery</h1>
              <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-xl max-w-3xl mx-auto">
                Providing specialized surgical care for our youngest patients with expertise, compassion, and a child-friendly approach.
              </p>
            </div>
          </div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Expert Surgical Care for Children</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Pediatric Surgery department is dedicated to providing the highest quality surgical care for infants, 
            children, and adolescents. Our pediatric surgeons have specialized training in surgical procedures for 
            children of all ages, ensuring your child receives the most appropriate and effective treatment in a 
            child-friendly environment.
          </p>
        </section>

        {/* Our Approach - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Child-Centered Surgical Care</h2>
            <p className="text-gray-600 mb-4">
              We understand that children have unique medical needs and require special care. Our approach is built on:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaChild className="text-teal-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Family-Centered Care:</strong> We involve parents and guardians in every step of the treatment process, ensuring you're informed and comfortable with decisions.</span></li>
              <li className="flex items-start"><FaBaby className="text-teal-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Minimally Invasive Techniques:</strong> Whenever possible, we use advanced minimally invasive procedures that result in less pain, smaller scars, and faster recovery.</span></li>
              <li className="flex items-start"><FaHeartbeat className="text-teal-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Child-Friendly Environment:</strong> From our colorful waiting areas to our pediatric recovery rooms, every aspect of our facility is designed with children in mind.</span></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src={img2}
             alt="Pediatric surgeon with child" 
             className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Areas of Surgical Expertise - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Areas of Pediatric Surgical Expertise</h2>
          
          {/* Expertise 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Neonatal Surgery</h3>
              <p className="text-gray-600">
                Our surgeons specialize in correcting congenital anomalies and surgical problems in newborns, including premature infants. We work closely with neonatologists to provide comprehensive care.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Congenital Diaphragmatic Hernia Repair</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Abdominal Wall Defects (Omphalocele, Gastroschisis)</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Intestinal Atresia Repair</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src={img3} 
              alt="Neonatal surgery" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Pediatric General Surgery</h3>
              <p className="text-gray-600">
                We perform a wide range of common and complex surgical procedures for children of all ages, using the most advanced techniques to ensure optimal outcomes.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Appendectomy & Hernia Repair</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Pyloromyotomy for Pyloric Stenosis</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Circumcision & Undescended Testicle Repair</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src={img4} 
              alt="Pediatric surgical procedure" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Pediatric Thoracic Surgery</h3>
              <p className="text-gray-600">
                Our team has extensive experience in treating chest and lung conditions in children, using minimally invasive approaches whenever possible to reduce recovery time.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Congenital Lung Lesions</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Chest Wall Deformities (Pectus Excavatum)</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Mediastinal Tumors</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src={img5} 
              alt="Pediatric thoracic surgery" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
        </section>

        {/* Special Programs Section */}
        <section className="bg-teal-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Specialized Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaStethoscope className="text-teal-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Prenatal Counseling</h3>
              <p className="text-gray-600">
                We provide counseling for expectant parents when congenital anomalies are detected before birth, helping you understand treatment options and prepare for your baby's care.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaShieldAlt className="text-teal-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Trauma Care</h3>
              <p className="text-gray-600">
                Our pediatric surgeons are part of the trauma team, providing specialized surgical care for children who have experienced injuries.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaHandHoldingMedical className="text-teal-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Long-Term Follow-Up</h3>
              <p className="text-gray-600">
                We provide comprehensive follow-up care to monitor your child's recovery and development after surgery, ensuring the best long-term outcomes.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PediatricSurgery;
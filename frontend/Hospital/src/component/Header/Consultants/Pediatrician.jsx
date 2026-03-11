import img1 from '../../../assets/Consultant/Pediat/pediat.png';
import img2 from '../../../assets/Consultant/Pediat/pediatimg1.png';
import img3 from '../../../assets/Consultant/Pediat/pediatimg2.png';
import img4 from '../../../assets/Consultant/Pediat/pediatimg3.png';
import img5 from '../../../assets/Consultant/Pediat/pediatimg4.png';
import { useEffect, useState } from 'react';
import { getDoctors } from '../../dashboard/api';
import DoctorCard from '../DoctorCard';
import { FaBaby, FaStethoscope, FaShieldAlt, FaNotesMedical, FaChild, FaHeart } from 'react-icons/fa';

const Pediatrician = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ ONLY THESE 3 DOCTORS
  const ALLOWED_DOCTOR_IDS = [92, 55, 56];

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getDoctors();

        // ✅ FILTER BY ID (EXACT MATCH)
        const selectedDoctors = data.filter((doctor) =>
          ALLOWED_DOCTOR_IDS.includes(doctor.id)
        );

        setDoctors(selectedDoctors);
      } catch (error) {
        console.error('Failed to fetch doctors:', error);
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
          src={img1} 
          alt="Pediatrician" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pediatrician</h1>
            <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto">
              Providing gentle, expert, and compassionate care for your little ones, from infancy through young adulthood.
            </p>
          </div>
        </div>
      </div>

              {/* DOCTORS */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Pediatrician Consultants
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading doctors...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                departmentName="Cardiology"
                formatTime={formatTime}
              />
            ))}
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">A Partner in Your Child's Health</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team of board-certified pediatricians is dedicated to the health and well-being of your children. 
            We provide comprehensive medical care in a friendly, nurturing environment, working with you as a partner to ensure your child grows up healthy and strong.
          </p>
        </section>

        {/* Our Approach to Care - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Care That Grows With Them</h2>
            <p className="text-gray-600 mb-4">
              We believe in building a lifelong, trusting relationship with your child and your family, centered on communication and preventative care.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaStethoscope className="text-green-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Well-Child Visits:</strong> We focus on regular check-ups, developmental screenings, and vaccinations to keep your child healthy.</span></li>
              <li className="flex items-start"><FaShieldAlt className="text-green-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Sick Visits:</strong> We offer same-day appointments for when your child is unwell, providing prompt and compassionate care.</span></li>
              <li className="flex items-start"><FaHeart className="text-green-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Parental Guidance:</strong> We take the time to answer your questions and provide expert advice on nutrition, sleep, and behavior.</span></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src={img2} 
            alt="Pediatrician happily examining a baby" 
            className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Areas of Expertise - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Areas of Expertise</h2>
          
          {/* Expertise 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaBaby className="text-yellow-500 mr-3" />Newborn & Infant Care</h3>
              <p className="text-gray-600">
                We provide expert care for your newest family members, including check-ups, feeding support, and guidance for new parents.
              </p>
            </div>
            <div className="md:w-1/2">
            <img src={img3} 
              alt="Doctor holding a newborn's hand" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaNotesMedical className="text-blue-500 mr-3" />Vaccinations & Preventative Care</h3>
              <p className="text-gray-600">
                We follow the latest immunization schedules to protect your child from preventable diseases and offer comprehensive well-child exams.
              </p>
            </div>
            <div className="md:w-1/2">
            <img src={img4} 
              alt="Child getting a gentle check-up" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaChild className="text-purple-500 mr-3" />Developmental & Behavioral Health</h3>
              <p className="text-gray-600">
                We monitor your child's growth and development, providing screenings and support for developmental delays, ADHD, and other behavioral concerns.
              </p>
            </div>
            <div className="md:w-1/2">
            <img src={img5} 
              alt="Pediatrician talking with a child and parent" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pediatrician;
import React from 'react';
import { FaBaby, FaStethoscope, FaShieldAlt, FaNotesMedical, FaChild, FaHeart } from 'react-icons/fa';

const Pediatrician = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Pediatricians</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Providing gentle, expert, and compassionate care for your little ones, from infancy through young adulthood.
            </p>
          </div>
        </div>
      </section>

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
            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" alt="Pediatrician happily examining a baby" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
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
              <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop" alt="Doctor holding a newborn's hand" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
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
              <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1780&auto=format&fit=crop" alt="Child getting a gentle check-up" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
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
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop" alt="Pediatrician talking with a child and parent" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
        </section>

        {/* Meet Our Pediatricians Section - The Main Focus */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Expert Pediatricians</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1887&auto=format&fit=crop" alt="Dr. Emily Watson" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Emily Watson</h3>
                <p className="text-blue-600 mb-3">MD, FAAP - Chief of Pediatrics</p>
                <p className="text-gray-600 text-sm">A dedicated pediatrician with a special interest in newborn care and early childhood development, committed to supporting new families.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1780&auto=format&fit=crop" alt="Dr. Mark Robinson" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Mark Robinson</h3>
                <p className="text-blue-600 mb-3">MD, FAAP - Pediatrician</p>
                <p className="text-gray-600 text-sm">Passionate about preventative care and patient education, Dr. Robinson enjoys building long-term relationships with his patients and their families.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ce2?q=80&w=1887&auto=format&fit=crop" alt="Dr. Sarah Chen" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Sarah Chen</h3>
                <p className="text-blue-600 mb-3">MD, FAAP - Developmental-Behavioral Pediatrician</p>
                <p className="text-gray-600 text-sm">An expert in child development and behavioral health, Dr. Chen provides compassionate care for children with ADHD, autism, and learning differences.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-green-600 rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Your Child's Health is Our Priority</h2>
          <p className="text-lg mb-6">Partner with us to give your child the healthiest possible start in life. Schedule a visit today.</p>
          <button className="bg-white text-green-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
            Schedule a Well-Child Visit
          </button>
        </section>

      </div>
    </div>
  );
};

export default Pediatrician;
import { FaEarListen, FaUserDoctor, FaWind, FaMicrophone, FaCircleCheck , FaHeadSideVirus } from 'react-icons/fa6'; // Using react-icons v6
import { FaStethoscope, FaComments } from 'react-icons/fa'; // Using react-icons v5 for compatibility

const Ent = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Otolaryngology (ENT)</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Expert care for your ears, nose, and throat, helping you breathe, hear, and feel better.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive Care for All Ages</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Department of Otolaryngology provides expert medical and surgical care for a wide range of ear, nose, and throat conditions. 
            From managing common allergies to performing complex head and neck surgery, our team is dedicated to improving your quality of life.
          </p>
        </section>

        {/* Our Approach - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">A Focus on Your Well-being</h2>
            <p className="text-gray-600 mb-4">
              We combine advanced diagnostic tools with personalized treatment plans to address your unique needs effectively.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaStethoscope className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Advanced Diagnostics:</strong> We use in-office endoscopy, hearing tests, and allergy testing to provide an accurate diagnosis quickly.</span></li>
              <li className="flex items-start"><FaUserDoctor className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Personalized Treatment:</strong> We offer a full range of treatments, from medications and therapy to minimally invasive and traditional surgery.</span></li>
              <li className="flex items-start"><FaComments className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Patient-Centered Care:</strong> We take the time to listen to your concerns and educate you on your condition and treatment options.</span></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1584467735871-8ec4bb12fb12?q=80&w=2070&auto=format&fit=crop" alt="Doctor using an endoscope" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Areas of Expertise - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Areas of Expertise</h2>
          
          {/* Expertise 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaEarListen className="text-blue-600 mr-3" />Ear & Hearing</h3>
              <p className="text-gray-600">
                We provide comprehensive care for hearing loss, balance disorders, and other ear-related conditions in both children and adults.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCircleCheck  className="text-green-500 mr-2" /> Hearing Loss & Hearing Aid Fitting</li>
                <li className="flex items-center"><FaCircleCheck  className="text-green-500 mr-2" /> Cochlear Implants & BAHA</li>
                <li className="flex items-center"><FaCircleCheck  className="text-green-500 mr-2" /> Treatment for Ear Infections & Tinnitus</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop" alt="Hearing test being performed" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaWind className="text-purple-600 mr-3" />Nose & Sinus</h3>
              <p className="text-gray-600">
                Find relief from chronic sinus issues, nasal obstruction, and allergies with our advanced medical and surgical treatments.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCircleCheck className="text-green-500 mr-2" /> Minimally Invasive Sinus Surgery (FESS)</li>
                <li className="flex items-center"><FaCircleCheck className="text-green-500 mr-2" /> Balloon Sinuplasty</li>
                <li className="flex items-center"><FaCircleCheck className="text-green-500 mr-2" /> Allergy Testing & Immunotherapy</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=2070&auto=format&fit=crop" alt="Doctor examining a sinus CT scan" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaMicrophone className="text-teal-600 mr-3" />Throat & Voice</h3>
              <p className="text-gray-600">
                Our specialists diagnose and treat conditions affecting your voice, swallowing, and airway, including sleep-disordered breathing.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCircleCheck className="text-green-500 mr-2" /> Voice & Swallowing Disorders</li>
                <li className="flex items-center"><FaCircleCheck className="text-green-500 mr-2" /> Tonsillectomy & Adenoidectomy</li>
                <li className="flex items-center"><FaCircleCheck className="text-green-500 mr-2" /> Diagnosis & Treatment of Sleep Apnea</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2070&auto=format&fit=crop" alt="Doctor using a laryngoscope" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
        </section>

        {/* Meet Our ENT Specialists Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our ENT Specialists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1887&auto=format&fit=crop" alt="Dr. Emily Carter" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Emily Carter</h3>
                <p className="text-blue-600 mb-3">MD, FACS - Chief of Otolaryngology</p>
                <p className="text-gray-600 text-sm">With extensive experience in sinus surgery and allergy management, Dr. Carter is dedicated to providing relief for chronic sinus sufferers.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1780&auto=format&fit=crop" alt="Dr. Ben Reed" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Ben Reed</h3>
                <p className="text-blue-600 mb-3">MD - Otology/Neurotology Specialist</p>
                <p className="text-gray-600 text-sm">A specialist in ear disorders, Dr. Reed focuses on hearing loss, cochlear implants, and complex ear surgery to restore hearing and balance.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ce2?q=80&w=1887&auto=format&fit=crop" alt="Dr. Sophia Lin" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Sophia Lin</h3>
                <p className="text-blue-600 mb-3">MD - Head & Neck Surgeon</p>
                <p className="text-gray-600 text-sm">Expert in treating voice and swallowing disorders, as well as tumors of the head and neck, with a focus on preserving function.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-600 rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Breathe, Hear, and Feel Better</h2>
          <p className="text-lg mb-6">Don't let ENT issues affect your daily life. Schedule a consultation with our experts today.</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
            Schedule an ENT Appointment
          </button>
        </section>

      </div>
    </div>
  );
};

export default Ent;
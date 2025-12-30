import img1 from '../../../assets/Surgery/Ent/ent.png';
import img2 from '../../../assets/Surgery/Ent/entimg1.png';
import img3 from '../../../assets/Surgery/Ent/entimg2.png';
import img4 from '../../../assets/Surgery/Ent/entimg3.png';
import img5 from '../../../assets/Surgery/Ent/entimg4.png';
import doc1 from '../../../assets/Surgery/Ent/doc1.png';
import doc2 from '../../../assets/Surgery/Ent/doc2.png';
import doc3 from '../../../assets/Surgery/Ent/doc3.png';
import { FaEarListen, FaUserDoctor, FaWind, FaMicrophone, FaCircleCheck , FaHeadSideVirus } from 'react-icons/fa6'; // Using react-icons v6
import { FaStethoscope, FaComments } from 'react-icons/fa'; // Using react-icons v5 for compatibility

const Ent = () => {
  return (
      <div className="w-full min-h-screen bg-white pt-20">
              {/* Hero Section */}
              <div className="relative h-96 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80 z-10"></div>
                <img 
                  src={img1} 
                  alt="Otolaryngology (ENT)" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Otolaryngology (ENT)</h1>
                    <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
                    <p className="text-xl max-w-3xl mx-auto">
                      Expert care for your ears, nose, and throat, helping you breathe, hear, and feel better.
                    </p>
                  </div>
                </div>
              </div>

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
            <img src={img2} 
            alt="Doctor using an endoscope" 
            className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
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
              <img src={img3} 
              alt="Hearing test being performed" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
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
              <img src={img4} 
              alt="Doctor examining a sinus CT scan" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
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
              <img src={img5} 
              alt="Doctor using a laryngoscope" 
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

export default Ent;
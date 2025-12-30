import img1 from '../../../assets/Surgery/Procto/procto.png';
import img2 from '../../../assets/Surgery/Procto/proctoimg1.png';
import img3 from '../../../assets/Surgery/Procto/proctoimg2.png';
import img4 from '../../../assets/Surgery/Procto/proctoimg3.png';
import { FaUserMd, FaShieldAlt, FaHandHoldingMedical, FaMicroscope, FaCheckCircle, FaHeart } from 'react-icons/fa';

const Proctology = () => {
  return (
      <div className="w-full min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80 z-10"></div>
          <img 
            src={img1} 
            alt="Colorectal Surgery (Proctology)" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Colorectal Surgery (Proctology)</h1>
              <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-xl max-w-3xl mx-auto">
               Providing expert, compassionate, and discreet care for your colorectal and anorectal health.
              </p>
            </div>
          </div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Health and Comfort Are Our Priority</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Department of Colorectal Surgery is dedicated to the diagnosis and treatment of conditions affecting the colon, rectum, and anus. 
            We understand these issues can be sensitive, which is why we provide a supportive, confidential environment where you can receive the advanced care you need.
          </p>
        </section>

        {/* Our Approach - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">A Focus on Diagnosis, Treatment, and Comfort</h2>
            <p className="text-gray-600 mb-4">
              Our approach is centered around patient well-being, utilizing the latest techniques to ensure effective and comfortable treatment.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaShieldAlt className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Confidential & Compassionate Care:</strong> We provide a private and respectful setting, ensuring you feel comfortable discussing your symptoms and treatment options.</span></li>
              <li className="flex items-start"><FaMicroscope className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Advanced Diagnostics:</strong> We use state-of-the-art tools like high-resolution anoscopy and colonoscopy for accurate and early diagnosis.</span></li>
              <li className="flex items-start"><FaHandHoldingMedical className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Minimally Invasive Options:</strong> Whenever possible, we offer minimally invasive and non-surgical treatments that minimize pain and speed up recovery.</span></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src={img2} 
            alt="Doctor in a modern consultation room" 
            className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Conditions We Treat - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Conditions We Treat</h2>
          
          {/* Condition Group 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Common Anorectal Conditions</h3>
              <p className="text-gray-600">
                We provide effective, minimally invasive treatments for a wide range of common and often painful conditions.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Hemorrhoids</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Anal Fissures</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Anal Fistulas & Abscesses</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Pilonidal Sinus</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src={img3} 
              alt="Abstract medical technology visualization" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Condition Group 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Complex Colorectal Conditions</h3>
              <p className="text-gray-600">
                Our specialists are highly trained to manage more complex diseases of the colon and rectum using advanced medical and surgical therapies.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Inflammatory Bowel Disease (Crohn's, Ulcerative Colitis)</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Diverticular Disease</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Colorectal Cancer Screening & Surgery</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Pelvic Floor Disorders</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src={img4}
               alt="Doctor analyzing a medical scan" 
               className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
        </section>

        {/* Meet Our Lead Surgeons Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Lead Surgeons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="" alt="Dr. image" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Name</h3>
                <p className="text-blue-600 mb-3">Title</p>
                <p className="text-gray-600 text-sm">
                  Description
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="" alt="Dr. image" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Name</h3>
                <p className="text-blue-600 mb-3">Title</p>
                <p className="text-gray-600 text-sm">
                  Description.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="" alt="Dr. image" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Sara Davis</h3>
                <p className="text-blue-600 mb-3">Ttitle</p>
                <p className="text-gray-600 text-sm">
                  Descrioption.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Proctology;
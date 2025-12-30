import img1 from '../../../assets/Surgery/Gyeno/gyeno.png';
import img2 from '../../../assets/Surgery/Gyeno/gyenoimg1.png';
import img3 from '../../../assets/Surgery/Gyeno/gyenoimg2.png';
import doc1 from '../../../assets/Surgery/Gyeno/doc1.png';
import doc2 from '../../../assets/Surgery/Gyeno/doc2.png';
import { FaBaby, FaHeartbeat, FaUserMd, FaFemale, FaShieldAlt, FaCheckCircle, FaComments } from 'react-icons/fa';

const ObstetricsGynecology = () => {
  return (
      <div className="w-full min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80 z-10"></div>
          <img 
            src={img1} 
            alt="Obstetrics & Gynecology" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Obstetrics & Gynecology</h1>
              <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-xl max-w-3xl mx-auto">
                Providing compassionate and comprehensive care for women through every stage of life.
              </p>
            </div>
          </div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">A Partner in Your Lifelong Health</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Department of Obstetrics & Gynecology is dedicated to providing exceptional, personalized care for women. 
            From your first gynecological exam to welcoming a new baby and navigating menopause, our expert team is here to support you with compassion and respect.
          </p>
        </section>

        {/* Our Dual Focus - Side-by-Side */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Obstetrics Care */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <FaBaby className="text-pink-500 mr-3" />
              Obstetrics Care
            </h2>
            <p className="text-gray-600 mb-6">
              We celebrate the journey of motherhood by providing comprehensive prenatal, delivery, and postpartum care in a warm and supportive environment.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Prenatal Care:</strong> Regular check-ups, screenings, and guidance to ensure a healthy pregnancy for you and your baby.</span></li>
              <li className="flex items-start"><FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Labor & Delivery:</strong> State-of-the-art birthing suites with a dedicated team to support your birth plan.</span></li>
              <li className="flex items-start"><FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>High-Risk Pregnancy Management:</strong> Expert care for mothers with complex medical conditions.</span></li>
            </ul>
          </div>

          {/* Gynecology Care */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <FaFemale className="text-purple-500 mr-3" />
              Gynecology Care
            </h2>
            <p className="text-gray-600 mb-6">
              We are committed to your overall well-being, offering a full range of services to manage your reproductive and sexual health through all life stages.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Wellness Exams:</strong> Annual check-ups, including Pap smears, HPV testing, and breast exams.</span></li>
              <li className="flex items-start"><FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Minimally Invasive Surgery:</strong> Advanced laparoscopic and robotic procedures for fibroids, endometriosis, and more.</span></li>
              <li className="flex items-start"><FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Menopause Management:</strong> Personalized care to help you navigate the changes of midlife with comfort and confidence.</span></li>
            </ul>
          </div>
        </section>

        {/* Areas of Expertise - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Your Journey, Our Expertise</h2>
          
          {/* Expertise 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Family Planning & Contraception</h3>
              <p className="text-gray-600">
                We provide confidential counseling and a full range of contraceptive options to help you make the best choices for your body and your future.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Contraceptive Counseling</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> IUD & Implant Insertion</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Fertility Awareness & Preconception Counseling</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src={img2}
              alt="Doctor consulting with a patient"
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Advanced Gynecologic Surgery</h3>
              <p className="text-gray-600">
                When surgery is necessary, our specialists are leaders in minimally invasive techniques, including robotic and laparoscopic surgery, which means less pain and a quicker recovery.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Robotic & Laparoscopic Hysterectomy</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Myomectomy (Fibroid Removal)</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Endometriosis Resection</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src={img3} 
              alt="Advanced surgical technology" 
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
            {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="" alt="Dr. Name" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Sara Davis</h3>
                <p className="text-blue-600 mb-3">Ttitle</p>
                <p className="text-gray-600 text-sm">
                  Descrioption.
                </p>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ObstetricsGynecology;
import img from '../../../assets/Surgery/Urology/urology.png';
import img1 from '../../../assets/Surgery/Urology/urologyimg1.png';
import img2 from '../../../assets/Surgery/Urology/urologyimg2.png';
import img3 from '../../../assets/Surgery/Urology/urologyimg3.png';
import img4 from '../../../assets/Surgery/Urology/urologyimg4.png';
import { FaUserMd, FaUsers, FaShieldAlt, FaHandHoldingMedical, FaHeartbeat, FaCheckCircle, FaStethoscope, FaWater, FaSearch } from 'react-icons/fa';

const Urology = () => {
  return (
      <div className="w-full min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-blue-700/30 z-10"></div>
          <img 
            src={img} 
            alt="Urology" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Urology</h1>
              <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-xl max-w-3xl mx-auto">
                Comprehensive care for urinary tract and male reproductive system conditions with advanced treatments and personalized care.
              </p>
            </div>
          </div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Expert Urological Care</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Urology department provides comprehensive diagnosis and treatment for conditions affecting the urinary tract 
            and male reproductive system. Our board-certified urologists utilize the latest minimally invasive techniques 
            and advanced technologies to deliver effective treatments with faster recovery times and improved outcomes.
          </p>
        </section>

        {/* Our Approach - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Approach to Urological Health</h2>
            <p className="text-gray-600 mb-4">
              We provide comprehensive care for urological conditions with a focus on patient comfort and advanced treatment options:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaHeartbeat className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Minimally Invasive Procedures:</strong> We specialize in laparoscopic and endoscopic techniques that result in less pain, smaller incisions, and faster recovery.</span></li>
              <li className="flex items-start"><FaWater className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Comprehensive Diagnostics:</strong> Our advanced imaging and diagnostic tools help us accurately identify and treat urological conditions.</span></li>
              <li className="flex items-start"><FaSearch className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Precision Medicine:</strong> We tailor treatments to your specific condition, taking into account your lifestyle and overall health.</span></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src={img1}
             alt="Urologist consulting with patient" 
             className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Areas of Expertise - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Areas of Urological Expertise</h2>
          
          {/* Expertise 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Kidney & Ureteral Conditions</h3>
              <p className="text-gray-600">
                We provide comprehensive treatment for kidney stones, blockages, and other conditions affecting the kidneys and ureters with minimally invasive approaches.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Kidney Stone Treatment (ESWL, Ureteroscopy)</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Hydronephrosis Treatment</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Kidney Tumor Surgery</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src={img2} 
              alt="Kidney stone treatment" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Bladder & Prostate Care</h3>
              <p className="text-gray-600">
                Our specialists provide advanced treatment for bladder and prostate conditions, including cancer, BPH, and urinary incontinence.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Prostate Cancer Treatment</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> BPH (Enlarged Prostate) Management</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Bladder Cancer Surgery</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src={img3} 
              alt="Prostate examination" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Male Reproductive Health</h3>
              <p className="text-gray-600">
                We offer comprehensive care for male reproductive conditions, including infertility, erectile dysfunction, and varicocele treatment.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Erectile Dysfunction Treatment</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Male Infertility Management</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Varicocele Repair</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src={img4} 
              alt="Male reproductive health consultation" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
        </section>

        {/* Special Programs Section */}
        <section className="bg-blue-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Specialized Urological Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaHeartbeat className="text-blue-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Pediatric Urology</h3>
              <p className="text-gray-600">
                Specialized care for congenital urological conditions in children, including hypospadias, undescended testicles, and vesicoureteral reflux.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaWater className="text-blue-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Female Urology</h3>
              <p className="text-gray-600">
                Comprehensive treatment for female urological conditions, including urinary incontinence, pelvic organ prolapse, and recurrent UTIs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaStethoscope className="text-blue-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Urologic Oncology</h3>
              <p className="text-gray-600">
                Advanced treatment for urological cancers including prostate, bladder, kidney, and testicular cancer with multidisciplinary approach.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Urology;
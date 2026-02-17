// import img1 from '../../../assets/Surgery/Plastic/plastic.png';
// import img2 from '../../../assets/Surgery/Plastic/plasticimg1.png';
// import img3 from '../../../assets/Surgery/Plastic/plasticimg2.png';
// import img4 from '../../../assets/Surgery/Plastic/plasticimg3.png';
// import img5 from '../../../assets/Surgery/Plastic/plasticimg4.png';
import { FaUserMd, FaUsers, FaShieldAlt, FaHandHoldingMedical, FaHeartbeat, FaCheckCircle, FaStar, FaSpa, FaGem } from 'react-icons/fa';

const PlasticSurgery = () => {
  return (
      <div className="w-full min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80 z-10"></div>
          <img 
            src={"img1"} 
            alt="Plastic Surgery" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Plastic & Reconstructive Surgery</h1>
              <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-xl max-w-3xl mx-auto">
                Enhancing form and function through artistic precision and surgical excellence.
              </p>
            </div>
          </div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Artistry Meets Surgical Excellence</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Plastic and Reconstructive Surgery department combines surgical precision with artistic vision 
            to deliver exceptional results. Whether you're seeking reconstructive surgery after trauma or illness, 
            or considering cosmetic enhancement, our board-certified surgeons provide personalized care with 
            attention to detail and natural-looking outcomes.
          </p>
        </section>

        {/* Our Approach - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Philosophy of Care</h2>
            <p className="text-gray-600 mb-4">
              We believe in enhancing your natural beauty while maintaining function and harmony. Our approach is built on:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaGem className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Individualized Treatment:</strong> Every patient is unique, and we create customized surgical plans tailored to your specific goals and anatomy.</span></li>
              <li className="flex items-start"><FaSpa className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Natural Results:</strong> Our goal is to enhance your features while maintaining a natural appearance that complements your overall look.</span></li>
              <li className="flex items-start"><FaStar className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Comprehensive Care:</strong> From initial consultation through recovery, we provide complete support to ensure your comfort and satisfaction.</span></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src={"img2"}
             alt="Plastic surgeon consulting with patient" 
             className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Areas of Surgical Expertise - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Surgical Specialties</h2>
          
          {/* Expertise 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Facial Rejuvenation</h3>
              <p className="text-gray-600">
                Our facial procedures are designed to restore a youthful, refreshed appearance while maintaining your natural expression and character.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Facelift & Neck Lift</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Blepharoplasty (Eyelid Surgery)</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Brow Lift & Forehead Surgery</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src={"img3"} 
              alt="Facial rejuvenation procedure" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Body Contouring</h3>
              <p className="text-gray-600">
                Sculpt and refine your body contours with our advanced body procedures that remove excess fat and skin while creating a more toned appearance.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Tummy Tuck (Abdominoplasty)</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Liposuction & Body Sculpting</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Body Lift after Weight Loss</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src={"img4"} 
              alt="Body contouring procedure" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Breast Surgery</h3>
              <p className="text-gray-600">
                Our breast procedures enhance, reduce, or reconstruct breasts to achieve a more balanced and proportionate figure.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Breast Augmentation</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Breast Lift (Mastopexy)</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Breast Reduction & Reconstruction</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src={"img5"} 
              alt="Breast surgery procedure" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
        </section>

        {/* Non-Surgical Treatments Section */}
        <section className="bg-blue-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Non-Surgical Enhancements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaSpa className="text-blue-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Injectables & Fillers</h3>
              <p className="text-gray-600">
                Smooth wrinkles and restore volume with Botox, Dysport, and dermal fillers for a refreshed, youthful appearance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaStar className="text-blue-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Laser Treatments</h3>
              <p className="text-gray-600">
                Improve skin texture, reduce pigmentation, and remove unwanted hair with our advanced laser technologies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaGem className="text-blue-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Skin Rejuvenation</h3>
              <p className="text-gray-600">
                Restore your skin's radiance with chemical peels, microdermabrasion, and other rejuvenation treatments.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlasticSurgery;
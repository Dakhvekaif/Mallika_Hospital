import img from '../../../assets/Surgery/General/general.png';
import img1 from '../../../assets/Surgery/General/generalimg1.png';
import img2 from '../../../assets/Surgery/General/generalimg2.webp';
import img3 from '../../../assets/Surgery/General/generalimg3.png';
import img4 from '../../../assets/Surgery/General/generalimg4.png';
import img5 from '../../../assets/Surgery/General/generalimg5.webp';
import img6 from '../../../assets/Surgery/General/generalimg6.webp';
import img7 from '../../../assets/Surgery/General/generalimg7.webp';
import img8 from '../../../assets/Surgery/General/generalimg8.webp';
import img9 from '../../../assets/Surgery/General/generalimg9.webp';
import img10 from '../../../assets/Surgery/General/generalimg10.webp';
import { FaUserMd, FaProcedures, FaHandHoldingMedical, FaShieldAlt, FaCheckCircle, FaUserFriends } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import DoctorCard from '../DoctorCard.jsx';
import { getDoctors } from '../../dashboard/api.js';

const GeneralSurgery = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ UPDATED: Based on your data, the ID should be 13
  const GENERAL_SURGERY_DEPARTMENT_ID = 17; 

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getDoctors();

        // Filter only General Surgery doctors by matching the department ID 17
        const generalSurgeryDoctors = data.filter(
          (doctor) => doctor.department === GENERAL_SURGERY_DEPARTMENT_ID
        );
        generalSurgeryDoctors.sort((a, b) => (a.display_order ?? 100) - (b.display_order ?? 100));
        
        setDoctors(generalSurgeryDoctors);
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
            alt="General Surgery" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">General & Laproscopic Surgery</h1>
              <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-xl max-w-3xl mx-auto">
                Expert surgical care for a wide range of conditions, using advanced techniques for a faster recovery.              
              </p>
            </div>
          </div>
        </div>

         {/* General Surgery Doctors Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our General & Laproscopic Specialists
          </h2>

          {loading ? (
            <p className="text-center text-gray-500">Loading specialists...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {doctors.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  doctor={doctor}
                  departmentName="General Surgery"
                  formatTime={formatTime}
                />
              ))}
            </div>
          )}
        </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction & Why Choose Us Combined */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Partner in Surgical Health</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Our General Surgery department provides comprehensive care for conditions that may require surgical intervention. 
            We are dedicated to providing the safest and most effective surgical treatments, from diagnosis to post-operative recovery.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <FaUserMd className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert-Led Care</h3>
              <p className="text-gray-600">Our surgeries are performed by board-certified surgeons with years of experience.</p>
            </div>
            <div className="text-center">
              <FaProcedures className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Minimally Invasive Techniques</h3>
              <p className="text-gray-600">We specialize in laparoscopic surgery, leading to less pain, smaller scars, and quicker recovery.</p>
            </div>
            <div className="text-center">
              <FaHandHoldingMedical className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comprehensive Support</h3>
              <p className="text-gray-600">Our team supports you at every step, from pre-op education to post-operative follow-up care.</p>
            </div>
          </div>
        </section>

        {/* Conditions We Treat - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Conditions We Treat</h2>
            <p className="text-gray-600 mb-4">Our team is skilled in diagnosing and surgically managing a wide variety of conditions, including:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Gallbladder Removal </li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Hernia Surgery </li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Appendix Suregry </li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Laser Piles surgery </li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Laser fistula Surgery </li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Thyroid Surgery </li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Pancreatic Surgery </li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Hapatobiliary surgery </li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Anti-Reflux Surgery </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src={img1} 
              alt="Surgeons consulting" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Our Procedures - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Surgical Procedures</h2>
          
          {/* Procedure 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Gallbladder Removal</h3>
              <p className="text-gray-600">
                Gallbladder removal, also called cholecystectomy, is a common surgical procedure done to treat problems such as gallstones or gallbladder inflammation. The gallbladder is a small organ that stores bile to help digest fats, but it is not essential for survival. After removal, bile flows directly from the liver into the intestine, and most people can digest food normally. The surgery is usually performed laparoscopically, allowing for smaller incisions, less pain, and faster recovery.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={img2} alt="Laparoscopic tools" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Procedure 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Hernia Surgery</h3>
              <p className="text-gray-600">
                Hernia surgery is a procedure performed to repair a hernia, which occurs when an internal organ or tissue pushes through a weak spot in the surrounding muscle or tissue wall. The surgery involves returning the protruding tissue to its proper place and strengthening the weakened area, often using a surgical mesh for support. It can be done through open surgery or minimally invasive laparoscopic methods. Hernia surgery is generally safe and helps relieve pain, prevent complications, and restore normal activity.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={img3} alt="Surgical team in operating room" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Procedure 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Appendix Surgery </h3>
              <p className="text-gray-600">
                Appendix surgery, also known as appendectomy, is a common operation performed to remove an inflamed or infected appendix. It is usually done as an emergency procedure to prevent rupture, which can lead to serious infection. The surgery can be performed using open or laparoscopic techniques, with laparoscopy allowing faster recovery and less pain. Most patients recover quickly and return to normal activities within a short time after the procedure.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={img4} alt="Laparoscopic tools" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Procedure 4 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Laser Piles surgery </h3>
              <p className="text-gray-600">
                Laser piles surgery is a modern, minimally invasive procedure used to treat piles (hemorrhoids). It uses laser energy to shrink or remove the swollen hemorrhoidal tissue with high precision. Compared to traditional surgery, laser piles surgery causes less pain, minimal bleeding, and faster healing. Most patients can return to their daily activities within a few days after the procedure.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={img5} alt="Surgical team in operating room" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Procedure 5 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Laser fistula Surgery </h3>
              <p className="text-gray-600">
                Laser fistula surgery is a minimally invasive procedure used to treat an anal fistula, an abnormal tunnel between the anal canal and the skin. In this technique, a laser probe is inserted into the fistula tract to seal and close it from the inside without damaging surrounding muscles. Laser fistula surgery results in less pain, minimal bleeding, and a quicker recovery compared to traditional methods. Most patients can resume normal activities within a short time after the procedure.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={img6} alt="Laparoscopic tools" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Procedure 6 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Thyroid Surgery </h3>
              <p className="text-gray-600">
                Thyroid surgery is a procedure performed to remove part or all of the thyroid gland, usually to treat thyroid nodules, goiter, hyperthyroidism, or thyroid cancer. Depending on the condition, the surgery may involve partial (lobectomy) or total thyroid removal. It is a safe and commonly performed operation that helps restore normal hormone balance or prevent disease spread. Most patients recover well and can return to normal activities within a few weeks.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={img7} alt="Surgical team in operating room" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Procedure 7 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Pancreatic Surgery </h3>
              <p className="text-gray-600">
                Pancreatic surgery is performed to treat diseases of the pancreas such as tumors, chronic pancreatitis, cysts, or pancreatic cancer. The procedure may involve removing part or all of the pancreas, depending on the condition and its location. Pancreatic surgery is complex and requires specialized surgical care, but it can significantly improve symptoms and outcomes in selected patients. Recovery may take time, and careful follow-up is important for healing and long-term health.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={img8} alt="Laparoscopic tools" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Procedure 8 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Hapatobiliary Surgery </h3>
              <p className="text-gray-600">
                Hepatobiliary surgery involves surgical treatment of diseases affecting the liver, gallbladder, bile ducts, and pancreas. It is commonly performed for conditions such as liver tumors, bile duct obstruction, gallbladder cancer, and complex gallstone disease. These procedures may be done using open or minimally invasive techniques, depending on the condition. Hepatobiliary surgery requires specialized expertise and plays a crucial role in improving patient outcomes and quality of life.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={img9} alt="Surgical team in operating room" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Procedure 9 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Anti-Reflux Surgery</h3>
              <p className="text-gray-600">
                Anti-reflux surgery is performed to treat chronic gastroesophageal reflux disease (GERD) when medications and lifestyle changes are not effective. The surgery strengthens the valve between the esophagus and stomach, most commonly through a procedure called fundoplication, which helps prevent acid from flowing back into the esophagus. It is usually done using minimally invasive laparoscopic techniques. Anti-reflux surgery can significantly reduce heartburn, improve quality of life, and prevent long-term complications of acid reflux.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={img10} alt="Laparoscopic tools" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GeneralSurgery;
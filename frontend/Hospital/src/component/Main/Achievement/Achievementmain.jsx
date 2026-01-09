// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   FaTrophy, 
//   FaAward, 
//   FaMedal, 
//   FaCertificate, 
//   FaStar, 
//   FaQuoteLeft, 
//   FaQuoteRight,
//   FaCheckCircle,
//   FaCalendarAlt,
//   FaUsers,
//   FaHospital,
//   FaHeartbeat,
//   FaGraduationCap,
//   FaHandsHelping,
//   FaGlobe,
//   FaClock,
//   FaArrowRight
// } from 'react-icons/fa';

// const Achievementmain = () => {
//   const [activeTab, setActiveTab] = useState('awards');
//   const [counters, setCounters] = useState({
//     patients: 0,
//     surgeries: 0,
//     doctors: 0,
//     years: 0
//   });
//   const [hoveredAchievement, setHoveredAchievement] = useState(null);

//   // Counter animation effect
//   useEffect(() => {
//     const targetValues = {
//       patients: 50000,
//       surgeries: 10000,
//       doctors: 150,
//       years: 25
//     };

//     const duration = 2000; // 2 seconds
//     const steps = 60;
//     const increment = {
//       patients: targetValues.patients / steps,
//       surgeries: targetValues.surgeries / steps,
//       doctors: targetValues.doctors / steps,
//       years: targetValues.years / steps
//     };

//     let currentStep = 0;
//     const timer = setInterval(() => {
//       currentStep++;
//       setCounters({
//         patients: Math.floor(Math.min(currentStep * increment.patients, targetValues.patients)),
//         surgeries: Math.floor(Math.min(currentStep * increment.surgeries, targetValues.surgeries)),
//         doctors: Math.floor(Math.min(currentStep * increment.doctors, targetValues.doctors)),
//         years: Math.floor(Math.min(currentStep * increment.years, targetValues.years))
//       });

//       if (currentStep >= steps) {
//         clearInterval(timer);
//       }
//     }, duration / steps);

//     return () => clearInterval(timer);
//   }, []);

//   // Achievement data
//   const awards = [
//     {
//       id: 1,
//       title: "National Healthcare Excellence Award",
//       year: "2023",
//       organization: "Healthcare Ministry of India",
//       description: "Recognized for outstanding contribution to healthcare in Maharashtra region",
//       icon: <FaTrophy className="text-yellow-500" />
//     },
//     {
//       id: 2,
//       title: "Best Cardiology Department",
//       year: "2022",
//       organization: "Indian Medical Association",
//       description: "Awarded for excellence in cardiac care and innovative treatment methods",
//       icon: <FaAward className="text-blue-500" />
//     },
//     {
//       id: 3,
//       title: "Quality Healthcare Provider",
//       year: "2021",
//       organization: "National Accreditation Board",
//       description: "Certified for maintaining highest standards in patient care and safety",
//       icon: <FaMedal className="text-green-500" />
//     },
//     {
//       id: 4,
//       title: "Digital Healthcare Initiative",
//       year: "2020",
//       organization: "Digital India Foundation",
//       description: "For pioneering digital health records and telemedicine services",
//       icon: <FaCertificate className="text-purple-500" />
//     }
//   ];

//   const milestones = [
//     {
//       id: 1,
//       year: "1998",
//       title: "Hospital Establishment",
//       description: "Mallika Super-Speciality Hospital was established with 50 beds and 10 doctors"
//     },
//     {
//       id: 2,
//       year: "2005",
//       title: "First Major Expansion",
//       description: "Expanded to 150 beds with advanced ICU and surgical facilities"
//     },
//     {
//       id: 3,
//       year: "2012",
//       title: "NABH Accreditation",
//       description: "Achieved NABH accreditation for quality and patient safety standards"
//     },
//     {
//       id: 4,
//       year: "2018",
//       title: "Research Center Launch",
//       description: "Inaugurated dedicated research center for medical innovation"
//     },
//     {
//       id: 5,
//       year: "2023",
//       title: "25 Years of Excellence",
//       description: "Celebrated silver jubilee with over 50,000 successful treatments"
//     }
//   ];

//   const testimonials = [
//     {
//       id: 1,
//       name: "Rajesh Kumar",
//       role: "Patient",
//       content: "The care I received at Mallika Hospital was exceptional. The doctors and staff went above and beyond to ensure my recovery was smooth and comfortable.",
//       rating: 5
//     },
//     {
//       id: 2,
//       name: "Priya Sharma",
//       role: "Patient's Family",
//       content: "During my father's surgery, the transparency and professionalism shown by the medical team gave us confidence. Today he is healthy and active, all thanks to Mallika Hospital.",
//       rating: 5
//     },
//     {
//       id: 3,
//       name: "Dr. Amit Verma",
//       role: "Medical Partner",
//       content: "As a referring physician, I always recommend Mallika Hospital for specialized treatments. Their infrastructure and expertise are unmatched in the region.",
//       rating: 5
//     }
//   ];

//   const certifications = [
//     {
//       id: 1,
//       name: "NABH",
//       description: "National Accreditation Board for Hospitals",
//       validUntil: "2025"
//     },
//     {
//       id: 2,
//       name: "ISO 9001:2015",
//       description: "Quality Management Systems",
//       validUntil: "2024"
//     },
//     {
//       id: 3,
//       name: "NABL",
//       description: "National Accreditation Board for Testing and Calibration Laboratories",
//       validUntil: "2025"
//     },
//     {
//       id: 4,
//       name: "Green OT",
//       description: "Green Operating Theater Certification",
//       validUntil: "2024"
//     }
//   ];

//   const renderStars = (rating) => {
//     return Array.from({ length: 5 }, (_, i) => (
//       <FaStar key={i} className={`${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
//     ));
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 pt-20">
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 px-4 overflow-hidden">
//         <div className="absolute inset-0 bg-black opacity-20"></div>
//         <div className="relative z-10 max-w-7xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Achievements</h1>
//           <p className="text-xl max-w-3xl mx-auto">
//             25 years of excellence in healthcare, recognized nationally for our commitment to patient care and medical innovation
//           </p>
//         </div>
//         <div className="absolute -bottom-1 left-0 right-0">
//           <svg className="w-full h-12" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M0,50 C480,100 960,0 1440,50 L1440,100 L0,100 Z" fill="#F9FAFB"></path>
//           </svg>
//         </div>
//       </div>

//       {/* Statistics Section */}
//       <div className="bg-white py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Impact in Numbers</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <FaUsers className="text-blue-600 text-3xl" />
//               </div>
//               <div className="text-4xl font-bold text-gray-900 mb-2">{counters.patients.toLocaleString()}+</div>
//               <p className="text-gray-600">Patients Treated</p>
//             </div>
//             <div className="text-center">
//               <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <FaHeartbeat className="text-green-600 text-3xl" />
//               </div>
//               <div className="text-4xl font-bold text-gray-900 mb-2">{counters.surgeries.toLocaleString()}+</div>
//               <p className="text-gray-600">Successful Surgeries</p>
//             </div>
//             <div className="text-center">
//               <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <FaGraduationCap className="text-purple-600 text-3xl" />
//               </div>
//               <div className="text-4xl font-bold text-gray-900 mb-2">{counters.doctors}+</div>
//               <p className="text-gray-600">Expert Doctors</p>
//             </div>
//             <div className="text-center">
//               <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <FaCalendarAlt className="text-yellow-600 text-3xl" />
//               </div>
//               <div className="text-4xl font-bold text-gray-900 mb-2">{counters.years}+</div>
//               <p className="text-gray-600">Years of Service</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Tab Navigation */}
//       <div className="bg-gray-100 py-8 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-wrap justify-center gap-2">
//             {[
//               { id: 'awards', label: 'Awards & Recognition' },
//               { id: 'milestones', label: 'Milestones' },
//               { id: 'testimonials', label: 'Testimonials' },
//               { id: 'certifications', label: 'Certifications' }
//             ].map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`px-6 py-3 rounded-full font-medium transition-colors ${
//                   activeTab === tab.id
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-white text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Tab Content */}
//       <div className="bg-gray-100 pb-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           {/* Awards Tab */}
//           {activeTab === 'awards' && (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {awards.map((award) => (
//                 <div
//                   key={award.id}
//                   className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
//                   onMouseEnter={() => setHoveredAchievement(award.id)}
//                   onMouseLeave={() => setHoveredAchievement(null)}
//                 >
//                   <div className="flex items-start space-x-4">
//                     <div className={`p-3 rounded-full ${hoveredAchievement === award.id ? 'bg-gray-100' : 'bg-gray-50'}`}>
//                       <div className="text-2xl">{award.icon}</div>
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-xl font-bold text-gray-900 mb-1">{award.title}</h3>
//                       <div className="flex items-center text-sm text-gray-500 mb-2">
//                         <FaCalendarAlt className="mr-2" />
//                         {award.year}
//                       </div>
//                       <p className="text-gray-600 mb-2">{award.organization}</p>
//                       <p className="text-gray-700">{award.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Milestones Tab */}
//           {activeTab === 'milestones' && (
//             <div className="relative">
//               <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
//               <div className="space-y-12">
//                 {milestones.map((milestone, index) => (
//                   <div
//                     key={milestone.id}
//                     className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
//                   >
//                     <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
//                       <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
//                         <div className="text-blue-600 font-bold mb-2">{milestone.year}</div>
//                         <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
//                         <p className="text-gray-600">{milestone.description}</p>
//                       </div>
//                     </div>
//                     <div className="w-2/12 flex justify-center">
//                       <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10">
//                         {index + 1}
//                       </div>
//                     </div>
//                     <div className="w-5/12"></div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Testimonials Tab */}
//           {activeTab === 'testimonials' && (
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {testimonials.map((testimonial) => (
//                 <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
//                   <div className="flex items-center mb-4">
//                     <div className="flex text-yellow-400">
//                       {renderStars(testimonial.rating)}
//                     </div>
//                   </div>
//                   <div className="relative mb-4">
//                     <FaQuoteLeft className="text-blue-200 text-2xl absolute -top-2 -left-2" />
//                     <p className="text-gray-700 italic relative z-10 pl-4">{testimonial.content}</p>
//                     <FaQuoteRight className="text-blue-200 text-2xl absolute -bottom-2 -right-2" />
//                   </div>
//                   <div className="flex items-center">
//                     <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
//                     <div>
//                       <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
//                       <p className="text-gray-600 text-sm">{testimonial.role}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Certifications Tab */}
//           {activeTab === 'certifications' && (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {certifications.map((cert) => (
//                 <div key={cert.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
//                   <div className="flex items-center mb-4">
//                     <FaCertificate className="text-blue-600 text-2xl mr-3" />
//                     <h3 className="text-xl font-bold text-gray-900">{cert.name}</h3>
//                   </div>
//                   <p className="text-gray-600 mb-2">{cert.description}</p>
//                   <div className="flex items-center text-sm text-gray-500">
//                     <FaClock className="mr-2" />
//                     Valid until: {cert.validUntil}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Call to Action */}
//       <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">Join Our Journey of Excellence</h2>
//           <p className="text-xl mb-8">Be a part of our mission to provide exceptional healthcare to all</p>
//           <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center">
//             Contact Us <FaArrowRight className="ml-2" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Achievementmain;
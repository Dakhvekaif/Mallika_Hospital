import img1 from '../../assets/Govt/govt.png';
import React, { useState } from 'react';
import { FaCheckCircle, FaHospital, FaShieldAlt, FaHandHoldingMedical, FaChevronDown, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const GovtSchemes = () => {
  const [openStates, setOpenStates] = useState({
    'Bajaj Allianz Gen. Ins. Co. Ltd.': false,
    'MJPJAY (Mahatma Jyotiba Phule Scheme)': false,
    'CGHS': false,
    'FCI': false,
    'MTNL': false,
    'MCGM': false,
    'Mumbai Police': false
  });

  const toggleScheme = (schemeName) => {
    setOpenStates(prev => ({
      ...prev,
      [schemeName]: !prev[schemeName]
    }));
  };

  const schemes = [
    { 
      name: 'Bajaj Allianz Gen. Ins. Co. Ltd.', 
      icon: <FaShieldAlt className="text-blue-600" />,
      description: 'Bajaj Allianz General Insurance Company Limited is a joint venture between Bajaj Finserv Limited and Allianz SE. Both enjoy a reputation of expertise, stability and strength. Bajaj Allianz General Insurance received the Insurance Regulatory and Development Authority (IRDA) certificate of registration on 2nd May, 2001 to conduct general insurance business (including health insurance business) in India.'
    },
    { 
      name: 'MJPJAY (Mahatma Jyotiba Phule Scheme)', 
      icon: <FaHandHoldingMedical className="text-green-600" />,
      description: 'Mahatma Jyotirao Phule Jan Arogya Yojana (MJPJAY) is a flagship health insurance scheme by the Government of Maharashtra. It provides cashless hospitalization facilities to the economically weaker sections of society. The scheme covers over 950+ procedures and 1000+ illnesses, with a family floater sum insured of Rs. 1.5 lakh per annum.'
    },
    { 
      name: 'CGHS', 
      icon: <FaHospital className="text-indigo-600" />,
      description: 'Central Government Health Scheme (CGHS) provides comprehensive medical care facilities to Central Government employees and their dependents residing in CGHS covered cities. Started in 1954, CGHS has now grown to become one of the largest health insurance schemes in India, covering over 35 lakh beneficiaries across the country.'
    },
    { 
      name: 'FCI', 
      icon: <FaCheckCircle className="text-purple-600" />,
      description: 'Food Corporation of India (FCI) provides comprehensive health coverage to its employees and their families through its health insurance scheme. The scheme includes cashless hospitalization facilities at empaneled hospitals across India, with coverage for pre and post-hospitalization expenses, day care procedures, and ambulance charges.'
    },
    { 
      name: 'MTNL', 
      icon: <FaShieldAlt className="text-orange-600" />,
      description: 'Mahanagar Telephone Nigam Limited (MTNL) offers health insurance coverage to its employees and their dependents. The scheme provides cashless hospitalization facilities at empaneled hospitals, with coverage for various medical procedures and treatments, ensuring quality healthcare access for all MTNL employees.'
    },
    { 
      name: 'MCGM', 
      icon: <FaHospital className="text-teal-600" />,
      description: 'Municipal Corporation of Greater Mumbai (MCGM) provides health insurance coverage to its employees and their families. The scheme includes comprehensive medical coverage with cashless hospitalization facilities at empaneled hospitals, ensuring timely and quality healthcare access for all MCGM employees across Mumbai.'
    },
    { 
      name: 'Mumbai Police', 
      icon: <FaCheckCircle className="text-red-600" />,
      description: 'Mumbai Police Health Insurance Scheme provides comprehensive medical coverage to police personnel and their families. The scheme includes cashless hospitalization facilities at empaneled hospitals across Mumbai, with special provisions for treatment of injuries sustained in the line of duty, ensuring the well-being of those who protect the city.'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 text-white z-10 opacity-50"></div>
          <img 
            src={img1} 
            alt="Government Scheme" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Government Schemes
              </h1>
              <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl font-semibold mb-2">
                EMPANELMENT
              </p>
              <p className="text-lg opacity-95 max-w-3xl mx-auto">
                We are empaneled with various Government Schemes for the Patient support.
              </p>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Schemes Grid */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Our Empaneled Schemes
          </h2>
          <div className="md:grid-cols-2 lg:grid-cols-3">
            {schemes.map((scheme) => (
              <div key={scheme.name} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 my-7">
                <div 
                  className="flex items-center justify-between p-4 cursor-pointer"
                  onClick={() => toggleScheme(scheme.name)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 text-2xl p-3 bg-gray-50 rounded-full">
                      {scheme.icon}
                    </div>
                    <span className="text-gray-800 font-medium">{scheme.name}</span>
                  </div>
                  <FaChevronDown
                    className={`text-gray-500 transition-transform duration-300 ${
                      openStates[scheme.name] ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                <div className={`overflow-hidden transition-all duration-300 ${
                  openStates[scheme.name] ? 'max-h-96' : 'max-h-0'
                }`}>
                  <div className="px-4 pb-4">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {scheme.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Avail Section */}
        <div className="bg-blue-50 rounded-2xl p-8 md:p-12 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            How to Avail These Schemes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-md">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Our Hospital</h3>
              <p className="text-gray-600 text-sm">
                Bring your valid government scheme ID and necessary documents
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-md">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Document Verification</h3>
              <p className="text-gray-600 text-sm">
                Our staff will verify your documents and guide you
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-md">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Receive Treatment</h3>
              <p className="text-gray-600 text-sm">
                Get medical care as per your scheme coverage
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-md">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Billing</h3>
              <p className="text-gray-600 text-sm">
                We handle billing and claims as per guidelines
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovtSchemes;
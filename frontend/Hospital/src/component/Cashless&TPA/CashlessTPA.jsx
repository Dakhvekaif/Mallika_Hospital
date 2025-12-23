import React from 'react';
import { 
  FaCreditCard, 
  FaHandshake, 
  FaShieldAlt, 
  FaHospitalAlt,
  FaCheckCircle,
  FaFileMedical,
  FaUserMd,
  FaPhoneAlt
} from 'react-icons/fa';

const CashlessTpa = () => {
  const gipsaCompanies = [
    'THE NEW INDIA ASSURANCE',
    'NATIONAL INSURANCE',
    'UNITED INDIA INSURANCE',
    'THE ORIENTAL INSURANCE'
  ];

  const tpaNames = [
    'MEDI ASSIST',
    'HEALTH INSURANCE',
    'HEALTH INDIA',
    'SAFE WAY',
    'PARAMOUNT',
    'HERITAGE',
    'VIDAL HEALTH',
    'ERICSON',
    'MD INDIA',
    'UNITED HEALTHCARE PAREKH',
    'PARK MEDICAIM',
    'FAMILY HEALTH PLAN (FHPL)',
    'GENIUS TPA',
    'MED SAVE'
  ];

  const pvtInsuranceCompanies = [
    'BAJAJ ALLIANZ',
    'NIVA BUPA (MAX BUPA)',
    'HDFC ERGO',
    'RELIANCE GENERAL INSURANCE',
    'ADITYA BIRLA',
    'FUTURE GENERAL INSURANCE',
    'ROYAL SUNDRAM',
    'LIBERTY GENERAL INSURANCE',
    'GO DIGIT GENERAL INSURANCE',
    'TATA AIG GENERAL INSURANCE',
    'SBI GENERAL'
  ];

  const tpaThroughOthers = [
    'ICICI LOMBARD',
    'STAR HEALTH',
    'CARE INSURANCE',
    'UNIVERSAL SOMPO GEN INSURANCE',
    'EAST WEST ASSIST TPA',
    'VIDEOCON LIBERTY GENERAL INSURANCE',
    'GOOD HEALTH TPA'
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">


      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-16 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <FaCreditCard className="text-5xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cashless & TPA Services
          </h1>
          <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl font-semibold mb-2">
            Hassle-Free Insurance Claims
          </p>
          <p className="text-lg opacity-95 max-w-3xl mx-auto">
            We provide seamless cashless hospitalization services through empaneled insurance companies and TPAs
          </p>
        </div>
      </div>

        {/* TPA & CASHLESS Content (After Hero Section) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          TPA & CASHLESS
        </h2>
        <p className="text-gray-700 leading-relaxed text-justify">
          The cashless and TPA facilities for <strong>Mallika Super-Speciality Hospital</strong> offer a convenient and hassle-free experience for accessing healthcare services. With the cashless facility, <strong>Mallika Super-Speciality Hospital</strong> can receive medical treatment without worrying about upfront payment, as the costs are covered directly by her insurance provider or TPA. This means she doesn’t need to carry cash or go through reimbursement processes after treatment. The TPA acts as a liaison between <strong>Mallika Super-Speciality Hospital</strong>, her healthcare provider, and her insurance company. They handle the administrative tasks associated with her health insurance plan, such as verifying coverage, processing claims, and managing communication between all parties involved. This ensures a smooth and efficient healthcare experience for <strong>Mallika Super-Speciality Hospital</strong>, allowing her to focus on her health without the stress of navigating complex insurance processes or financial transactions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* GIPSA Section */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-teal-100 p-3 rounded-full mr-3">
              <FaShieldAlt className="text-teal-600 text-2xl" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              GIPSA
            </h2>
          </div>
          <p className="text-center text-gray-600 mb-6">
            General Insurance (Public Sector Association)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {gipsaCompanies.map((company, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4 border border-gray-100 flex items-center space-x-3"
              >
                <FaCheckCircle className="text-teal-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{company}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TPA Names Section */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-3">
              <FaHandshake className="text-blue-600 text-2xl" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Name of TPA
            </h2>
          </div>
          <p className="text-center text-gray-600 mb-6">
            Third Party Administrators (TPAs) we work with
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {tpaNames.map((tpa, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow hover:shadow-lg transition-all duration-300 p-4 border border-blue-100"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-800 font-medium">{tpa}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Private Insurance Companies Section */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-purple-100 p-3 rounded-full mr-3">
              <FaFileMedical className="text-purple-600 text-2xl" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Private Insurance Companies
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pvtInsuranceCompanies.map((company, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-5 border border-gray-100 hover:border-purple-200"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaShieldAlt className="text-purple-600" />
                  </div>
                  <span className="text-gray-800 font-medium">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TPA Through Other Section */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-green-100 p-3 rounded-full mr-3">
              <FaHospitalAlt className="text-green-600 text-2xl" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              TPA Through Other
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tpaThroughOthers.map((tpa, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg shadow hover:shadow-lg transition-all duration-300 p-5 border border-green-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-800 font-medium">{tpa}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 md:p-12 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Cashless Claim Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <FaFileMedical className="text-2xl" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Pre-Authorization</h3>
              <p className="text-gray-600 text-sm">Submit insurance card and ID proof</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <FaUserMd className="text-2xl" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Treatment</h3>
              <p className="text-gray-600 text-sm">Receive medical care</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <FaHandshake className="text-2xl" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Claim Processing</h3>
              <p className="text-gray-600 text-sm">We coordinate with TPA</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <FaCheckCircle className="text-2xl" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Cashless Discharge</h3>
              <p className="text-gray-600 text-sm">Hassle-free settlement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashlessTpa;
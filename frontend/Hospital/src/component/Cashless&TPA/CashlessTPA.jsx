import img1 from '../../assets/Cashless/cashless.png';
import { useState } from 'react';
import { 
  FaCreditCard, 
  FaHandshake, 
  FaShieldAlt, 
  FaHospitalAlt,
  FaCheckCircle,
  FaFileMedical,
  FaUserMd,
  FaChevronDown 
} from 'react-icons/fa';

const CashlessTpa = () => {
  const gipsaCompanies = [
    {
      name: 'THE NEW INDIA ASSURANCE',
      policies: [
        'The New India Assurance Co. Ltd. is India\'s largest general insurance company, with a legacy of trust and service spanning over a century. Established in 1919, the company operates under the ownership of the Government of India and has built a strong reputation for reliability, financial strength, and customer-centric solutions.',
        'With an extensive network of offices across India and a global presence in several countries, New India Assurance offers a comprehensive range of general insurance products, including health, motor, travel, marine, fire, engineering, and miscellaneous insurance. The company serves individuals, businesses, and large institutions, providing tailored risk protection solutions to meet diverse needs.',
        'Committed to innovation and excellence, New India Assurance continuously enhances its products and services through technology-driven processes and efficient claims management. Guided by strong ethical values and professional integrity, the company remains focused on protecting what matters most to its customers while contributing to the growth and stability of the insurance sector in India and abroad.'
      ],
    },
    {
      name: 'NATIONAL INSURANCE',
      policies: [
        'National Insurance Co. Ltd. is one of India\'s oldest and most trusted general insurance companies, established in 1906. Operating under the ownership of the Government of India, the company has a long-standing reputation for reliability and customer-focused solutions.',
        'With a wide network of offices across India, National Insurance offers a comprehensive range of insurance products, including health, motor, fire, marine, and personal accident insurance. The company serves individuals, families, and businesses, providing tailored solutions to protect against diverse risks.',
        'Committed to service excellence, National Insurance Co. Ltd. emphasizes efficient claims settlement, technological innovation, and ethical practices. Their goal is to ensure policyholders experience smooth insurance processes while securing financial protection for life\'s uncertainties.'
      ],
    },
    {
      name: 'UNITED INDIA INSURANCE',
      policies: [
        'United India Insurance Co. Ltd. is one of India\'s leading public sector general insurance companies, established in 1938. Owned by the Government of India, it has built a strong reputation for reliability, financial stability, and comprehensive insurance solutions.',
        'The company offers a wide range of insurance products, including health, motor, fire, marine, personal accident, and group insurance schemes, catering to individuals, families, and corporate clients across India.',
        'With an extensive network of offices and a focus on customer service, United India Insurance ensures efficient claim settlements, risk management solutions, and technology-driven processes. Their mission is to provide financial protection and peace of mind to their policyholders while contributing to the growth of the insurance sector in India.'
      ],
    },
    {
      name: 'THE ORIENTAL INSURANCE',
      policies: [
        'The Oriental Insurance Company Ltd. (OICL) is a leading public-sector general insurance company in India, fully owned by the Government of India and operating under the Ministry of Finance. Established in 1947 and headquartered in New Delhi, it has grown to become one of the largest non-life insurers in the country, with over 1,500 branches nationwide and a presence in international markets such as Nepal, Kuwait, and Dubai. Over the decades, it has played a key role in providing accessible and reliable insurance services to individuals, businesses, and large industrial projects.',
        'OICL offers a wide range of general insurance products, including motor, health, property, marine, engineering, liability, and rural insurance. Its portfolio spans over 100 products tailored for both personal and corporate needs, from small health policies to large-scale industrial coverage. The company uses advanced IT platforms for policy issuance, renewal, and customer service, ensuring smooth operations and accessibility for its policyholders.',
        'With a mission to provide inclusive and dependable non-life insurance, OICL has maintained steady growth in premiums and market reach since its inception. Its vision is to be the most respected and preferred insurer in India and abroad, focusing on customer service, financial reliability, and innovation in insurance solutions. Over the years, it has remained a critical pillar in India’s insurance sector, supporting both individual policyholders and the nation’s industrial and infrastructural growth.',
      ],
    },  
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

  // Use company name as the identifier instead of index
  const [openCompany, setOpenCompany] = useState(null);
  const toggleCompany = (companyName) => setOpenCompany(openCompany === companyName ? null : companyName);

  return (
    <div className="w-full min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-700 z-10 opacity-40"></div>
        <img 
          src={img1} 
          alt="CashlessTpa" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
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
      </div>

      {/* TPA & CASHLESS Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          TPA & CASHLESS
        </h2>
        <p className="text-gray-700 leading-relaxed text-justify">
          The cashless and TPA facilities for <strong>Mallika Super-Speciality Hospital</strong> offer a convenient and hassle-free experience. The TPA handles administrative tasks such as verifying coverage, processing claims, and managing communication between healthcare providers and insurance companies.
        </p>
      </div>

      {/* GIPSA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-teal-100 p-3 rounded-full mr-3">
            <FaShieldAlt className="text-teal-600 text-2xl" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">GIPSA</h2>
        </div>
        <p className="text-center text-gray-600 mb-6">General Insurance (Public Sector Association)</p>
        <div className="md:grid-col">
          {gipsaCompanies.map((company) => (
            <div
              key={company.name}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer my-5"
              onClick={() => toggleCompany(company.name)}
            >
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="text-teal-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{company.name}</span>
                </div>
                <FaChevronDown
                  className={`text-gray-500 transition-transform duration-300 ${
                    openCompany === company.name ? 'rotate-180' : ''
                  }`}
                />
              </div>

              {openCompany === company.name && (
                <div className="px-4 pb-4">
                  <ul className="space-y-2 text-sm text-gray-600">
                    {company.policies.map((policy, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-teal-500 mr-2">•</span>
                        {policy}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* TPA Names Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-12">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-blue-100 p-3 rounded-full mr-3">
            <FaHandshake className="text-blue-600 text-2xl" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Name of TPA</h2>
        </div>
        <p className="text-center text-gray-600 mb-6">
          Third Party Administrators (TPAs) we work with
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {tpaNames.map((tpa, index) => (
            <div
              key={tpa}
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-12">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-purple-100 p-3 rounded-full mr-3">
            <FaFileMedical className="text-purple-600 text-2xl" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Private Insurance Companies</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pvtInsuranceCompanies.map((company, index) => (
            <div
              key={company}
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-12">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-green-100 p-3 rounded-full mr-3">
            <FaHospitalAlt className="text-green-600 text-2xl" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">TPA Through Other</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tpaThroughOthers.map((tpa, index) => (
            <div
              key={tpa}
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

      {/* Cashless Claim Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-12 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Cashless Claim Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: FaFileMedical, title: 'Pre-Authorization', desc: 'Submit insurance card and ID proof' },
            { icon: FaUserMd, title: 'Treatment', desc: 'Receive medical care' },
            { icon: FaHandshake, title: 'Claim Processing', desc: 'We coordinate with TPA' },
            { icon: FaCheckCircle, title: 'Cashless Discharge', desc: 'Hassle-free settlement' }
          ].map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <step.icon className="text-2xl" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CashlessTpa;
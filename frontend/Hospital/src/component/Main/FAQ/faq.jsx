import React, { useState } from 'react';
import { FaPlus, FaMinus,FaPhone } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What are the OPD timings?", answer: "Our OPD is open from 8:00 AM to 9:00 PM, Monday to Saturday. Sunday OPD is available for emergency cases only." },
    { question: "Do you accept cashless insurance?", answer: "Yes, we are empanelled with all major TPA and Insurance companies including Star Health, ICICI Lombard, and HDFC Ergo." },
    { question: "How can I get my medical reports?", answer: "You can collect reports from the reception counter or view them online through our Patient Portal using your UHID number." },
    { question: "Is emergency service available 24/7?", answer: "Yes, our Casualty and Emergency department works 24x7 with a dedicated team of doctors and ambulances." },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button 
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 bg-gray-50 hover:bg-gray-100 transition"
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                {openIndex === index ? <FaMinus className="text-blue-600" /> : <FaPlus className="text-blue-600" />}
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 p-5' : 'max-h-0 py-0 px-5'} overflow-hidden bg-white text-gray-600`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
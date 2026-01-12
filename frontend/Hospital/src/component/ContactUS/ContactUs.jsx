import React from 'react';
import AppointmentForm from '../AppoinmentFrom/appointmentform';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaAmbulance,
  FaHospital,
  FaUserMd,
  FaCalendarAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaHeadset,
  FaWhatsappSquare,
} from 'react-icons/fa';

const ContactUs = () => {
  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      title: 'Phone',
      details: ['+91 9082097421', '+91 22 8765 4321'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: ['info@mallikahospital.com', 'emergency@mallikahospital.com'],
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      details: [
        'Mallika Super-Speciality Hospital',
        'Jogeshwari West, Mumbai, Maharashtra 400102',
      ],
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      icon: <FaClock />,
      title: 'Working Hours',
      details: ['Monday-Sunday: 12:00 AM - 12:00 PM'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto">
            We're here to help you. Get in touch with us for any medical
            emergencies, appointments, or general inquiries.
          </p>
        </div>
      </div>

      {/* Appointment Form */}
      <AppointmentForm />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div
                className={`${info.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-4`}
              >
                <div className={`${info.color} text-2xl`}>{info.icon}</div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {info.title}
              </h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 text-sm">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-900">Find Us</h2>
            <p className="text-gray-600 mt-2">
              Jogeshwari West, Mumbai, Maharashtra
            </p>
          </div>

          <div className="relative h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.320524644082!2d72.84413697430728!3d19.137441982079817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b630ffffffff%3A0x4b4cd4ae6926881f!2sMallika%20Hospital!5e0!3m2!1sen!2sin!4v1768215718664!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              title="Hospital Location"
            />
          </div>

          <div className="p-4 bg-gray-50 flex items-start">
            <FaMapMarkerAlt className="text-red-600 mt-1 mr-3" />
            <div>
              <p className="font-semibold text-gray-900">
                Mallika Super-Speciality Hospital
              </p>
              <p className="text-gray-600">Jogeshwari West</p>
              <p className="text-gray-600">
                Mumbai, Maharashtra - 400102
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-center mb-6">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/contact" className="bg-white p-6 rounded-lg text-center hover:shadow-lg">
              <FaCalendarAlt className="text-blue-600 text-3xl mx-auto mb-3" />
              <h3 className="font-semibold">Book Appointment</h3>
              <p className="text-gray-600 text-sm mt-2">
                Schedule your visit online
              </p>
            </a>

            <a href="/emergency" className="bg-white p-6 rounded-lg text-center hover:shadow-lg">
              <FaAmbulance className="text-red-600 text-3xl mx-auto mb-3" />
              <h3 className="font-semibold">Emergency Services</h3>
              <p className="text-gray-600 text-sm mt-2">
                24/7 emergency care available
              </p>
            </a>

            <a href="/cashless-&-tpa" className="bg-white p-6 rounded-lg text-center hover:shadow-lg">
              <FaHospital className="text-green-600 text-3xl mx-auto mb-3" />
              <h3 className="font-semibold">Insurance & Billing</h3>
              <p className="text-gray-600 text-sm mt-2">
                Check your coverage options
              </p>
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.facebook.com/people/Mallika-Multi-Specialty-Hospital/"
              className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/mallika_hospital"
              className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/mallika-hospital-27b547115/"
              className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=919082097421"
              className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white"
            >
              <FaWhatsappSquare />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

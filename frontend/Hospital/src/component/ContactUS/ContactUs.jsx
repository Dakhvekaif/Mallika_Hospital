import React, { useState } from 'react';
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
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaHeadset,
  FaPaperPlane,
  FaCheckCircle
} from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      title: 'Phone',
      details: ['+91 22 1234 5678', '+91 22 8765 4321'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: ['info@mallikahospital.com', 'emergency@mallikahospital.com'],
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      details: ['Mallika Super-Speciality Hospital', 'Jogeshwari West, Mumbai, Maharashtra 400102'],
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: <FaClock />,
      title: 'Working Hours',
      details: ['Mon-Sat: 8:00 AM - 8:00 PM', 'Sunday: 9:00 AM - 6:00 PM'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  const departments = [
    { name: 'Emergency', phone: '+91 22 9999 9999', icon: <FaAmbulance /> },
    { name: 'Appointments', phone: '+91 22 1234 5678', icon: <FaCalendarAlt /> },
    { name: 'General Enquiry', phone: '+91 22 8765 4321', icon: <FaHeadset /> },
    { name: 'Doctor Consultation', phone: '+91 22 5555 6666', icon: <FaUserMd /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto">
            We're here to help you. Get in touch with us for any medical emergencies, 
            appointments, or general inquiries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className={`${info.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                <div className={`${info.color} text-2xl`}>
                  {info.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 text-sm">{detail}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Department Contacts */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Department Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="border rounded-lg p-4 hover:border-blue-500 transition-colors">
                <div className="flex items-center mb-2">
                  <div className="text-blue-600 mr-3">
                    {dept.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900">{dept.name}</h3>
                </div>
                <a href={`tel:${dept.phone}`} className="text-blue-600 hover:text-blue-800 font-medium">
                  {dept.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <FaCheckCircle className="text-green-600 text-4xl mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
                <p className="text-green-700">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="appointment">Book Appointment</option>
                    <option value="emergency">Emergency</option>
                    <option value="feedback">Feedback</option>
                    <option value="general">General Inquiry</option>
                    <option value="billing">Billing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <FaPaperPlane className="mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Map */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">Find Us</h2>
              <p className="text-gray-600 mt-2">Jogeshwari West, Mumbai, Maharashtra</p>
            </div>
            <div className="relative h-96">
              <iframe
                src=""
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Hospital Location"
              ></iframe>
            </div>
            <div className="p-4 bg-gray-50">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-red-600 mt-1 mr-3" />
                <div>
                  <p className="font-semibold text-gray-900">Mallika Super-Speciality Hospital</p>
                  <p className="text-gray-600"> Jogeshwari West</p>
                  <p className="text-gray-600">Mumbai, Maharashtra - 400102</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/appointments" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
              <FaCalendarAlt className="text-blue-600 text-3xl mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900">Book Appointment</h3>
              <p className="text-gray-600 text-sm mt-2">Schedule your visit online</p>
            </a>
            <a href="/emergency" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
              <FaAmbulance className="text-red-600 text-3xl mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900">Emergency Services</h3>
              <p className="text-gray-600 text-sm mt-2">24/7 emergency care available</p>
            </a>
            <a href="/insurance" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
              <FaHospital className="text-green-600 text-3xl mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900">Insurance & Billing</h3>
              <p className="text-gray-600 text-sm mt-2">Check your coverage options</p>
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
              <FaFacebook />
            </a>
            <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
              <FaLinkedin />
            </a>
            <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
import img1 from '../../assets/AboutUs/aboutus.png';
import img2 from '../../assets/AboutUs/whoarewe.jpg';
import img3 from '../../assets/AboutUs/Latest-Research.png';
import img4 from '../../assets/AboutUs/Lab.png';
import img5 from '../../assets/AboutUs/Expertise.png';
import img6 from '../../assets/AboutUs/Result.png';
import img7 from '../../assets/AboutUs/Staff.png';

const AboutUs = () => {
  return (
    <div className="w-full min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-blue-700/30 z-10"></div>
        <img 
          src={img1} 
          alt="Mallika Super-Speciality Hospital" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mallika Super-Speciality Hospital</h1>
            <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto">Excellence in Healthcare with Compassion</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Who We Are Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Who We Are</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Welcome to <strong>Mallika Super-Speciality Hospital</strong>, where clinical expertise meets compassionate care. Strategically located in Jogeshwari West, Mumbai, our 100-bed facility has spent the last 25 years delivering premier, budget-friendly medical treatments across multiple specialities. We pride ourselves on maintaining an pristine, hygienic environment and a comforting atmosphere that minimizes the stress of hospital visits, allowing our patients to focus entirely on their recovery.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our reputation is anchored by our team of highly accomplished specialists and surgeons who bring decades of rich knowledge to every treatment plan. Guided by uncompromised ethical standards and a patient-first philosophy, we continuously upgrade our technology from advanced Cath Labs to robust intensive care to deliver predictable, precise medical outcomes. At Mallika Hospital, your health is our legacy, and your well-being remains our singular priority.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={img2} 
                alt="Hospital Interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Latest Research Technology Section */}
        <div className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Latest Research & Technology</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
              <img 
                src={img3} 
                alt="Medical Technology" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At <strong>Mallika Super-Speciality Hospital</strong>, we back up our medical care with upto date diagnostic tools and modern medical equipment right here in Jogeshwari West, Mumbai. We believe that combining affordable healthcare with the right technology is the best way to help our patients heal safely and comfortably.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our specialists use advanced diagnostic tools to catch health issues early and plan highly accurate treatments. This ensures you get clear answers and care from doctors you can trust.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                By constantly upgrading our labs, imaging systems, and operation theatres, we ensure your family always has access to the safest, most advanced treatment available.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Why Choose Us</h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            From our advanced diagnostic labs to our experienced medical team, we ensure your treatment is safe, precise, and completely transparent.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* High Quality Lab */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
                <img 
                  src={img4} 
                  alt="High Quality Lab" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">High Quality Lab</h3>
              <p className="text-gray-600">
                Experience precision in every test. Our state-of-the-art facility ensures accurate results for your peace of mind.
              </p>
            </div>

            {/* Unmatched Expertise */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
                <img 
                  src={img5} 
                  alt="Medical Experts" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Unmatched Expertise</h3>
              <p className="text-gray-600">
                Trust in our seasoned professionals. With years of experience, our team delivers unparalleled care tailored to your needs.
              </p>
            </div>

            {/* Precise Result */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
                <img 
                  src={img6} 
                  alt="Medical Results" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Precise Result</h3>
              <p className="text-gray-600">
                Expect nothing but accuracy. Our rigorous protocols guarantee reliable outcomes, guiding your healthcare journey with confidence.
              </p>
            </div>

            {/* Qualified Staff */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
                <img 
                  src={img7} 
                  alt="Medical Staff" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Qualified Staff</h3>
              <p className="text-gray-600">
                Rely on our skilled professionals. Committed to your well-being, our knowledgeable team ensures top-notch care at every step.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Values Section */}
        <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide exceptional healthcare services that prioritize patient well-being, comfort, and recovery through advanced medical technology and compassionate care.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <ul className="text-lg text-gray-700 space-y-2">
                <li>• Patient-centered care</li>
                <li>• Medical excellence</li>
                <li>• Ethical practices</li>
                <li>• Continuous innovation</li>
                <li>• Community health</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
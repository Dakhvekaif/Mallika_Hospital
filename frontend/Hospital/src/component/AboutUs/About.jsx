const AboutUs = () => {
  return (
    <div className="w-full min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80 z-10"></div>
        <img 
          src="https://picsum.photos/seed/hospital-exterior/1920/600.jpg" 
          alt="Mallika Super-Speciality Hospital" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Mallika Super-Speciality Hospital</h1>
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
                We at <strong>Mallika Super-Speciality Hospital</strong> provide the highest quality and affordable treatments to our patients. Our hospital is located at Jogeshwari West, Mumbai, Maharashtra. All patients are assured of the best service in a very pleasant and non-stressful atmosphere.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Proper attention is paid to the hygiene and sanitation. We have the best and most experienced surgeons and specialists treating our patients with utmost care. With our rich knowledge and experience, be assured of quality healthcare services that we provide. We have an unwavering commitment to medical ethics.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://picsum.photos/seed/hospital-interior/600/400.jpg" 
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
                src="https://picsum.photos/seed/medical-technology/600/400.jpg" 
                alt="Medical Technology" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At <strong>Mallika Super-Speciality Hospital</strong>, we deliver premier and affordable treatments in Jogeshwari West, Mumbai, Maharashtra. Our patients experience top-notch care in a serene environment with utmost attention to hygiene.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With a team of highly skilled surgeons and specialists, we ensure the best possible care for every patient. Count on our rich expertise and unwavering commitment to medical ethics for quality healthcare services.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We continuously invest in the latest medical technology and research to provide our patients with cutting-edge treatments and diagnostics.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Why Choose Us</h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Experience excellence in care tailored to you. Our commitment to compassionate service ensures your well-being every step of the way.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* High Quality Lab */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
                <img 
                  src="https://picsum.photos/seed/medical-lab/400/300.jpg" 
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
                  src="https://picsum.photos/seed/medical-experts/400/300.jpg" 
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
                  src="https://picsum.photos/seed/medical-results/400/300.jpg" 
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
                  src="https://picsum.photos/seed/medical-staff/400/300.jpg" 
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
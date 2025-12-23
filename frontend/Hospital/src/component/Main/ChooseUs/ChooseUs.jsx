export default function Chooseus() {
    return(
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
    );
}
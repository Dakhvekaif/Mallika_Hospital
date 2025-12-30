import AnimatedCounter from './Achievementcounter';

const Achievementmain = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Achievements
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A testament to our commitment to excellence in healthcare.
          </p>
        </div>

        {/* Achievement Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Achievement Item 1 */}
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <div className="text-4xl font-bold text-gray-900">
              <AnimatedCounter targetNumber={15000} suffix="+" />
            </div>
            <p className="mt-2 text-lg leading-6 font-medium text-gray-600">Happy Patients</p>
          </div>

          {/* Achievement Item 2 */}
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <div className="text-4xl font-bold text-gray-900">
              <AnimatedCounter targetNumber={750} suffix="+" />
            </div>
            <p className="mt-2 text-lg leading-6 font-medium text-gray-600">Expert Doctors</p>
          </div>

          {/* Achievement Item 3 */}
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div className="text-4xl font-bold text-gray-900">
              <AnimatedCounter targetNumber={25000} suffix="+" />
            </div>
            <p className="mt-2 text-lg leading-6 font-medium text-gray-600">Successful Surgeries</p>
          </div>

          {/* Achievement Item 4 */}
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div className="text-4xl font-bold text-gray-900">
              <AnimatedCounter targetNumber={25} suffix="+" />
            </div>
            <p className="mt-2 text-lg leading-6 font-medium text-gray-600">Years of Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievementmain;
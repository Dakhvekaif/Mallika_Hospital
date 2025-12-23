const leadershipData = {
  head: {
    id: 1,
    name: "Dr. Sharad sheth",
    title: "Chief Executive Officer & Medical Director",
    description: "With over 25 years of experience in healthcare administration, Dr. Reed leads our institution with a vision for compassionate, patient-centered care.",
    image: "https://i.ibb.co/61X8vC0/img1.jpg" // Placeholder image
  },
  leadership: [
    {
      id: 2,
      name: "Dr. Roshan Jha",
      title: "Chief of Surgery",
      description: "A renowned surgeon specializing in minimally invasive procedures, Dr. Carter oversees all surgical departments.",
      image: "https://i.ibb.co/L8y9QcQ/img2.jpg" // Placeholder image
    },
    {
      id: 3,
      name: "Dr. Keshnath Chauhan",
      title: "Chief of Medicine",
      description: "Dr. Khan is an expert in internal medicine and leads our team of physicians in providing comprehensive medical care.",
      image: "https://i.ibb.co/Ks2f31v/img3.jpg" // Placeholder image
    },
    {
      id: 4,
      name: "Dr. Name",
      title: "Chief Nursing Officer",
      description: "With a passion for nursing excellence, Maria ensures the highest standards of patient care and nursing practices.",
      image: "https://i.ibb.co/3Tj1f5H/img4.jpg" // Placeholder image
    }
  ]
};

const Authorities = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Hospital Authorities
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Guided by experience and driven by compassion, meet the leaders dedicated to our community's health.
          </p>
        </div>

        {/* Leadership Tree Structure */}
        <div className="flex flex-col items-center space-y-16 md:space-y-24">
          {/* Head of Hospital */}
          <div className="text-center">
            <div className="relative group">
              <img
                src={leadershipData.head.image}
                alt={leadershipData.head.name}
                className="w-48 h-48 rounded-full mx-auto object-cover shadow-xl border-4 border-white transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-gray-800">{leadershipData.head.name}</h3>
            <p className="text-md font-medium text-blue-600 mb-2">{leadershipData.head.title}</p>
            <p className="text-sm text-gray-600 max-w-md mx-auto">{leadershipData.head.description}</p>
          </div>

          {/* Direct Reports */}
          <div className="w-full relative">            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {leadershipData.leadership.map((person) => (
                <div key={person.id} className="text-center group">
                  <div className="relative">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-40 h-40 rounded-full mx-auto object-cover shadow-lg border-4 border-white transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-800">{person.name}</h3>
                  <p className="text-sm font-medium text-blue-600">{person.title}</p>
                  <p className="mt-2 text-sm text-gray-600">{person.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authorities;
import authority1 from '../../../assets/Authority/Keshnath Chauhan.png';
import authority2 from '../../../assets/Authority/Roshan Jha.png';
import authority3 from '../../../assets/Authority/Umandra.png';

const leadershipData = {
  head:[ 
  {
    id: 1,
    name: "Dr. Keshnath Chauhan",
    title: "Chief Executive Officer & Medical Director",
    description: "With over 25 years of experience in healthcare administration, Dr. Keshnath Chauhan leads our institution with a vision for compassionate, patient-centered care.",
    image: authority1 
  },
  {
    id: 2,
    name: "Dr. Roshan Jha",
    title: "M.D in Medicine",
    description: "A renowned surgeon specializing in minimally invasive procedures, Dr. Roshan Jha oversees all surgical departments.",
    image: authority2 
    },
  ],
  leadership: [
    {
      id: 3,
      name: "Dr. Umendra",
      title: "Title",
      description: "Description.",
      image: authority3 
    },
    {
      id: 4,
      name: "Dr. Name",
      title: "Title",
      description: "Description.",
      image: "" // Placeholder image
    },
    {
      id: 5,
      name: "Dr. Name",
      title: "Title",
      description: "Description.",
      image: "" // Placeholder image
    }
  ]
}

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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {leadershipData.head.map((person) => (
            <div key={person.id} className="text-center">
              <div className="relative group flex justify-center">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover shadow-xl border-4 border-white transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
          
              <h3 className="mt-6 text-2xl font-semibold text-gray-800">
                {person.name}
              </h3>
              <p className="text-md font-medium text-blue-600 mb-2">
                {person.title}
              </p>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                {person.description}
              </p>
            </div>
          ))}
        </div>
            {/* Direct Reports */}
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {leadershipData.leadership.map((person) => (
                  <div key={person.id} className="text-center group">
                    <div className="flex justify-center">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover shadow-lg border-4 border-white transition-transform duration-300 ease-in-out group-hover:scale-105"
                      />
                    </div>
                
                    <h3 className="mt-4 text-xl font-semibold text-gray-800">
                      {person.name}
                    </h3>
                    <p className="text-sm font-medium text-blue-600">
                      {person.title}
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                      {person.description}
                    </p>
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
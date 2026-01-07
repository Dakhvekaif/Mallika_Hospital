import authority1 from '../../../assets/Authority/Keshnath Chauhan.png';
import authority2 from '../../../assets/Authority/Roshan Jha.png';
import authority3 from '../../../assets/Authority/Umandra.png';

const leadershipData = {
  head:[ 
  {
    id: 1,
    name: "Dr. Keshnath Chauhan",
    title: "Managing Director",
    description: "Description",
    image: authority1
  },
  {
    id: 2,
    name: "Dr. Roshan Jha",
    title: "M.D in Medicine",
    description: "Description",
    image: authority2
    },
  ],
  leadership: [
    {
      id: 3,
      name: "Dr. Umendra R. Varma",
      title: "General Administration Head",
      description: "Business & Hospital Management, B.Com, MBA (Healthcare Management)",
      image: authority3 // Placeholder image
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
        <div className="flex flex-col items-center space-y-16 md:space-y-6">
        {/* Head of Hospital */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 md:gap-100">
          {leadershipData.head.map((person) => (
            <div key={person.id} className="text-center">
              <div className="relative group flex justify-center ">
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
            <div className="w-full ">
              <div className="flex justify-center items-center pl-8">
                {leadershipData.leadership.map((person) => (
                  <div key={person.id} className="text-center group ">
                    <div className="flex justify-center ">
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
            </div>
          </div>
      </div>
    </section>
  );
};

export default Authorities;
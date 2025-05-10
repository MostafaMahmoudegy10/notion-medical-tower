import { featuresData } from '../data';

const Service = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Our Key Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {featuresData.map((service) => (
          <div 
            key={service.id} 
            className="flex flex-col items-center bg-white rounded-xl shadow-lg hover:shadow-xl  p-6 text-center border border-gray-100
            transition-transform duration-300 hover:scale-110"
          >
            <div className={`text-4xl mb-4 ${service.color}`}>
              <service.icon />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
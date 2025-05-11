import React from 'react';
import { spaces } from '../spaces';
import { Link } from 'react-router-dom';
const Carsol = () => {
  return (
    <div className="py-6 px-4 bg-gray-50 rounded-xl shadow-md">
      <h2 className="text-4xl font-bold mb-4 text-gray-800 text-center ">Click and View </h2>
      <div className="flex overflow-x-auto gap-4 scrollbar-hide">
        {spaces.map((clinic, indx) => (
         <Link  key={indx} to={`/clinics/${clinic.id}`} className='className="min-w-[200px] flex-shrink-0 bg-white rounded-lg shadow hover:shadow-lg transition duration-300"'>     
            <img
            loading='lazy'
              src={clinic.image}
              alt={clinic.name}
              className="w-full h-100 object-cover rounded-t-lg" 
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold text-gray-700">{clinic.name}</h3>
            </div>
          </Link> 
        ))}
      </div>
    </div>
  );
};

export default Carsol;

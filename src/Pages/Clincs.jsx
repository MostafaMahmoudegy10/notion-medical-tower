import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaRuler, FaDoorOpen, FaInfoCircle } from 'react-icons/fa';
import { spaces } from '../spaces';

const Clinics = () => {
  const navigate = useNavigate();

  const handleClinicClick = (clinicId) => {
    navigate(`/clinics/${clinicId}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Clinic Spaces</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {spaces.map((clinic) => (
          <div 
            key={clinic.id}
            onClick={() => handleClinicClick(clinic.id)}
            className="group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 text-black"
          >
            <div className="flex flex-col h-full">
              <div className="relative h-full overflow-hidden">
                <img 
                  src={clinic.image} 
                  alt={`Clinic space ${clinic.id}`}
                  className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-4">
                  <h2 className="text-xl font-bold text-white">Clinic Space #{clinic.id}</h2>
                </div>
              </div>
              
              <div className="p-6 flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
                    <FaRuler className="text-blue-500" />
                    <span className="font-medium">{clinic.totalArea} m² Total Area</span>
                  </div>
                  <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
                    <FaDoorOpen className="text-green-500" />
                    <span className="font-medium"> {clinic.rooms.length}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 mb-1 flex items-center gap-2">
                    <FaInfoCircle className="text-blue-400" />
                    Location Details
                  </h3>
                  <p className="text-gray-600">{clinic.locationHint}</p>
                </div>
                
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 mb-1">Notes</h3>
                  <p className="text-gray-600">{clinic.notes}</p>
                </div>
              </div>
              
              <div className="px-6 pb-6">
                <button 
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClinicClick(clinic.id);
                  }}
                >
                  View Clinic Details
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clinics;
import React, { useState } from "react";
import { spaces } from "../spaces";
import { useParams } from "react-router-dom";
import Buttons from "../components/Buttons";

const ClinicDetailsSimple = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { id } = useParams();
  const clinic = spaces.find((clinic) => clinic.id == id);
  const clinicRoom = clinic.rooms[currentIndex];

  const handleIndex = (indx) => {
    setCurrentIndex((prev)=>indx);
    
  };

  return (
    <div className="max-w-6xl mx-auto p-6 text-black">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-blue-600 p-4 text-white">
          <h1 className="text-2xl font-bold">{clinic.name}</h1>
          <p className="text-blue-100">Total Area: {clinic.totalArea} sq.ft</p>
        </div>

        <div className="md:flex">
          <div className="md:w-1/2 p-6 flex items-center justify-center bg-gray-50">
            <img
              src={clinicRoom.image}
              alt={clinicRoom.name}
              className="max-h-96 w-auto rounded-lg shadow-md object-cover"
            />
          </div>

          <div className="md:w-1/2 p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {clinicRoom.name} Details
            </h2>

            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="text-gray-600 text-sm">Width</p>
                  <p className="text-xl font-medium">
                    {clinicRoom.dimensions.width} ft
                  </p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="text-gray-600 text-sm">Height</p>
                  <p className="text-xl font-medium">
                    {clinicRoom.dimensions.height} ft
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-600 text-sm">Description</p>
                <p className="text-gray-800">{clinicRoom.description}</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-600 text-sm">Area</p>
                <p className="text-gray-800">{clinicRoom.area} sq.ft</p>
              </div>

              {clinic.notes && (
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <p className="text-blue-600 text-sm font-medium">Notes</p>
                  <p className="text-blue-800">{clinic.notes}</p>
                </div>
              )}
              
              <div className="flex gap-2">
                {clinic.rooms.map((room, index) => (
                  <Buttons
                    key={index}
                    room={room}
                    index={index}
                    currentIndex={currentIndex}
                    handleIndex={handleIndex}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default ClinicDetailsSimple;
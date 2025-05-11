import React from "react";
import { Link } from "react-router-dom";
const Gallery = () => {
  const images = Array.from({ length: 20 }, (_, i) => `/Pics/${i + 1}.jpg`);

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Overview of Notion
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <a
            key={index}
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          >
            <img
            loading="lazy"
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-48 object-cover"
            />
          </a>
        ))}
       
      </div>
    </div>
  );
};
export default Gallery;

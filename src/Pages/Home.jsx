import React from 'react';
import cover from '../assets/Logo/cover-1.jpg';
import { CiPhone } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col md:flex-row">

      <div className="w-[100%] md:w-[30%] min-h-[30vh] md:min-h-full bg-gradient-to-r from-gray-100 to-blue-200 text-gray-900 flex flex-col justify-center 
        items-center gap-3
         p-10 md:p-6 animate-fade-in">
        
        <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-6 w-[100%] text-center ">
            برج طبى ادارى متكامل
        
        </h1>
        
        <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-lg font-normal">
          الرعاية الصحية المتكاملة بأعلى المعايير العالمية في برج مصمم خصيصًا لك ولمرضاك.
        </p>


        <div className="flex  gap-4 mb-10 w-full justify-center ">
         <Link to={'/clincs'}>
          <button
            aria-label="عرض قائمة العيادات"
            className="
            bg-teal-500 text-white hover:bg-teal-600 px-5 py-3 rounded-lg font-semibold transition-all shadow-md hover:scale-105"
          >
            عرض العيادات
          </button>
        </Link>
          <button
            aria-label="تواصل مع فريقنا"
            className="border border-teal-500 text-teal-500 hover:bg-teal-500/10 px-5 py-3 rounded-lg font-semibold transition-all"
          >
            تواصل معنا
          </button>
        </div>

        <div className="flex flex-col gap-3 text-gray-700 text-base">
          <a
            href="tel:01060327272"
            className="flex items-center gap-2 hover:text-teal-500 relative group transition-colors"
          >
            01060327272 <CiPhone className="w-5 h-5" /> 
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-500 group-hover:w-full transition-all"></span>
          </a>
          <a
            href="tel:01060339922"
            className="flex items-center gap-2 hover:text-teal-500 relative group transition-colors"
          >
           01060339922 <CiPhone className="w-5 h-5" /> 
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-500 group-hover:w-full transition-all"></span>
          </a>
        </div>
      </div>
      
      <div className="relative w-full md:w-[70%] min-h-[50vh] md:min-h-full overflow-hidden">
        <div className="absolute  bg-gradient-to-l from-gray-900/10 to-transparent z-10 backdrop-blur-sm " />
        <img
          src={cover}
          alt="Notion Medical Tower"
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </div>
      
    </div>
  );
};

export default Home;
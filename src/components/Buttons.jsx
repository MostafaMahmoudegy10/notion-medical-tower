import React from 'react'

const Buttons = ({handleIndex,room,index,currentIndex}) => {
  return (
    
     <button
                className={`px-4 py-2 rounded-lg flex-1 transition ${
                  currentIndex === index
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => handleIndex(index)}
              >

               {room.name} 
    </button>
  )
}

export default Buttons

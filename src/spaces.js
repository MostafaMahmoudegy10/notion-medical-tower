import room1 from "./assets/markting/01.jpg";
import room2 from "./assets/markting/02.jpg";
import room3 from "./assets/markting/03.jpg";
import room4 from "./assets/markting/04.jpg";
import room5 from "./assets/markting/05.jpg";
import room6 from "./assets/markting/06.jpg";
import room7 from "./assets/markting/07.jpg";
import room8 from "./assets/markting/08.jpg";
import room9 from "./assets/markting/09.jpg";
import room10 from "./assets/markting/10.jpg";
import room11 from "./assets/markting/11.jpg";
import room12 from "./assets/markting/12.jpg";
import room13 from "./assets/markting/13.jpg";
import room14 from "./assets/markting/14.jpg";
import room15 from "./assets/markting/15.jpg";
import room16 from "./assets/markting/16.jpg";

import clinicRoom from './assets/markting/interior/5 (2).jpg'
import toilet from './assets/markting/interior/3 (2).jpg'
import reception from './assets/markting/interior/4 (2).jpg'


export const spaces = [
  {
    id: 1,
    image: room1,
    totalArea: 60, 
    rooms: [
      {
        name: "Reception",
        dimensions: {
          width: 6.46,
          height: 3.43,
        },
        image:reception,
        area: (6.46 * 3.43).toFixed(2), 
        description: "Spacious reception area with seating",
      },
      {
        name: "Room",
        dimensions: {
          width: 3.52,
          height: 3.43,
        },
        image:clinicRoom,
        area: (3.52 * 3.43).toFixed(2), // 12.07 m²
        description: "Private room for examination or consultation",
      },
      {
        name: "Toilet",
        dimensions: {
          width: 1.3,
          height: 1.68,
        },
        image:toilet,
        area: (1.3 * 1.68).toFixed(2), // 2.18 m²
        description: "In-unit restroom for staff or visitors",
      },
    ],
    notes:
      "Optimized layout for a small medical clinic, includes a private room and restroom.",
    locationHint: "Shown on full floor layout as top-right corner unit",
  },
  {
    id: 2,
    image: room2,
     totalArea: 52, 
    rooms: [
      {
        name: "Reception",
        dimensions: {
          width: 3.30,
          height: 5.01,
        },
        image:reception,
        area: (3.30 * 5.01).toFixed(2), 
        description: "Spacious reception area with seating",
      },
      {
        name: "Room",
        dimensions: {
          width: 3.30,
          height: 3.32,
        },
        image:clinicRoom,
        area: (3.52 * 3.30).toFixed(2), // 12.07 m²
        description: "Private room for examination or consultation",
      },
      {
        name: "Toilet",
        dimensions: {
          width: 1.56,
          height: 1.71,
        },
        image:toilet,
        area: (1.56 * 1.71).toFixed(2), // 2.18 m²
        description: "In-unit restroom for staff or visitors",
      },
    ],
    notes:
      "Optimized layout for a small medical clinic, includes a private room and restroom.",
    locationHint: "Shown on full floor layout as top-right corner unit",
  },
  {
    id: 3,
    image: room3,
      totalArea: 52, 
    rooms: [
      {
        name: "Reception",
        dimensions: {
          width: 3.30,
          height: 5.01,
        },
        image:reception,
        area: (3.30 * 5.01).toFixed(2), 
        description: "Spacious reception area with seating",
      },
      {
        name: "Room1",
        dimensions: {
          width: 3.30,
          height: 3.32,
        },
        image:clinicRoom,
        area: (3.52 * 3.30).toFixed(2), // 12.07 m²
        description: "Private room for examination or consultation",
      },
      {
        name: "Room2",
        dimensions: {
          width: 3.30,
          height: 3.32,
        },
        image:clinicRoom,
        area: (3.52 * 3.30).toFixed(2), // 12.07 m²
        description: "Private room for examination or consultation",
      },
      {
        name: "Room3",
        dimensions: {
          width: 3.30,
          height: 3.32,
        },
        image:clinicRoom,
        area: (3.52 * 3.30).toFixed(2), // 12.07 m²
        description: "Private room for examination or consultation",
      },
      {
        name: "Toilet",
        dimensions: {
          width: 1.56,
          height: 1.71,
        },
        image:toilet,
        area: (1.56 * 1.71).toFixed(2), // 2.18 m²
        description: "In-unit restroom for staff or visitors",
      },
    ],
    notes:
      "Optimized layout for a small medical clinic, includes a private room and restroom.",
    locationHint: "Shown on full floor layout as top-right corner unit",
    
  },
  {
    id: 4,
    image: room4,
  },
  {
    id: 5,
    image: room5,
  },
  {
    id: 6,
    image: room6,
  },
  {
    id: 7,
    image: room7,
  },
  {
    id: 8,
    image: room8,
  },
  {
    id: 9,
    image: room9,
  },
  {
    id: 10,
    image: room10,
  },
  {
    id: 11,
    image: room11,
  },
  {
    id: 12,
    image: room12,
  },
  {
    id: 13,
    image: room13,
  },
  {
    id: 14,
    image: room14,
  },
  {
    id: 15,
    image: room15,
  },
  {
    id: 16,
    image: room16,
  },
];

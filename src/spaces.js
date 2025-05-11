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

import clinicRoom from './assets/markting/interior/5 (2).jpg';
import toilet from './assets/Logo/toilet.jpg';
import reception from './assets/markting/interior/1 (2).jpg';

export const spaces = [
  {
    id: 1,
    image: room1,
    totalArea: 60,
    rooms: [
      {
        name: "Reception",
        dimensions: { width: 6.46, height: 3.43 },
        image: reception,
        area: (6.46 * 3.43).toFixed(2),
        description: "Spacious reception area with seating"
      },
      {
        name: "Room",
        dimensions: { width: 3.52, height: 3.43 },
        image: clinicRoom,
        area: (3.52 * 3.43).toFixed(2),
        description: "Private room for examination or consultation"
      },
      {
        name: "Toilet",
        dimensions: { width: 1.3, height: 1.68 },
        image: toilet,
        area: (1.3 * 1.68).toFixed(2),
        description: "In-unit restroom for staff or visitors"
      }
    ],
    notes: "Optimized layout for a small medical clinic, includes a private room and restroom.",
    locationHint: "Shown on full floor layout as top-right corner unit"
  },
  {
    id: 2,
    image: room2,
    totalArea: 52,
    rooms: [
      {
        name: "Reception",
        dimensions: { width: 3.30, height: 5.01 },
        image: reception,
        area: (3.30 * 5.01).toFixed(2),
        description: "Spacious reception area with seating"
      },
      {
        name: "Room",
        dimensions: { width: 3.30, height: 3.32 },
        image: clinicRoom,
        area: (3.52 * 3.30).toFixed(2),
        description: "Private room for examination or consultation"
      },
      {
        name: "Toilet",
        dimensions: { width: 1.56, height: 1.71 },
        image: toilet,
        area: (1.56 * 1.71).toFixed(2),
        description: "In-unit restroom for staff or visitors"
      }
    ],
    notes: "Optimized layout for a small medical clinic, includes a private room and restroom.",
    locationHint: "Shown on full floor layout as top-right corner unit"
  },
  {
    id: 3,
    image: room3,
    totalArea: 96,
    rooms: [
      {
        name: "Reception",
        dimensions: { width: 3.30, height: 5.01 },
        image: reception,
        area: (3.30 * 5.01).toFixed(2),
        description: "Spacious reception area with seating"
      },
      {
        name: "Room1",
        dimensions: { width: 3.26, height: 3.10 },
        image: clinicRoom,
        area: (3.10 * 3.26).toFixed(2),
        description: "Private room for examination or consultation"
      },
      {
        name: "Room2",
        dimensions: { width: 4.30, height: 3.31 },
        image: clinicRoom,
        area: (4.30 * 3.31).toFixed(2),
        description: "Private room for examination or consultation"
      },
      {
        name: "Room3",
        dimensions: { width: 3.31, height: 2.55 },
        image: clinicRoom,
        area: (3.31 * 3.55).toFixed(2),
        description: "Private room for examination or consultation"
      },
      {
        name: "Toilet",
        dimensions: { width: 1.56, height: 1.58 },
        image: toilet,
        area: (1.56 * 1.58).toFixed(2),
        description: "In-unit restroom for staff or visitors"
      }
    ],
    notes: "Optimized layout for a small medical clinic, includes a private room and restroom.",
    locationHint: "Shown on full floor layout as top-right corner unit"
  },
  {
    id: 4,
    image: room4,
    totalArea: 41.5,
    rooms: [
      {
        name: "Reception",
        dimensions: { width: 3.00, height: 3.56 },
        image: reception,
        area: (3.00 * 3.56).toFixed(2),
        description: "Spacious reception area with seating"
      },
      {
        name: "Room1",
        dimensions: { width: 3.00, height: 3.01 },
        image: clinicRoom,
        area: (3.00 * 3.01).toFixed(2),
        description: "Private room for examination or consultation"
      },
      {
        name: "Toilet",
        dimensions: { width: 1.30, height: 1.70 },
        image: toilet,
        area: (1.30 * 1.70).toFixed(2),
        description: "In-unit restroom for staff or visitors"
      }
    ],
    notes: "Optimized layout for a small medical clinic, includes a private room and restroom.",
    locationHint: "Shown on full floor layout as top-right corner unit"
  },
  {
    id: 5,
    image: room5,
    totalArea: 41.5,
    rooms: [
      {
        name: "Reception",
        dimensions: { width: 3.00, height: 3.56 },
        image: reception,
        area: (3.00 * 3.56).toFixed(2),
        description: "Spacious reception area with seating"
      },
      {
        name: "Room1",
        dimensions: { width: 3.00, height: 3.01 },
        image: clinicRoom,
        area: (3.00 * 3.01).toFixed(2),
        description: "Private room for examination or consultation"
      },
      {
        name: "Toilet",
        dimensions: { width: 1.30, height: 1.70 },
        image: toilet,
        area: (1.30 * 1.70).toFixed(2),
        description: "In-unit restroom for staff or visitors"
      }
    ],
    notes: "Optimized layout for a small medical clinic, includes a private room and restroom.",
    locationHint: "Shown on full floor layout as top-right corner unit"
  },
  {
  id: 6,
  image: room6,
  totalArea: 41.5, 
  rooms: [
    {
      name: "Reception",
      dimensions: {
        width: 2.98,
        height: 3.77,
      },
      image:reception,
      area: (2.98 * 3.77).toFixed(2), 
      description: "Spacious reception area with seating",
    },
    {
      name: "Room1",
      dimensions: {
        width: 3.01,
        height: 2.98,
      },
      image:clinicRoom,
      area: (3.01 * 2.98).toFixed(2),
      description: "Private room for examination or consultation",
    },
    
    
    {
      name: "Toilet",
      dimensions: {
        width: 1.49,
        height: 1.33,
      },
      image:toilet,
      area: (1.49 * 1.33).toFixed(2), 
      description: "In-unit restroom for staff or visitors",
    },
  ],
  notes:
    "Optimized layout for a small medical clinic, includes a private room and restroom.",
  locationHint: "Shown on full floor layout as top-right corner unit",
  
 },
  {
    id: 7,
    image: room7,
    totalArea: 41.5,
    rooms: [
      {
        name: "Reception",
        dimensions: { width: 3.00, height: 3.56 },
        image: reception,
        area: (3.00 * 3.56).toFixed(2),
        description: "Spacious reception area with seating"
      },
      {
        name: "Room1",
        dimensions: { width: 3.00, height: 3.01 },
        image: clinicRoom,
        area: (3.00 * 3.01).toFixed(2),
        description: "Private room for examination or consultation"
      },
      {
        name: "Toilet",
        dimensions: { width: 1.30, height: 1.70 },
        image: toilet,
        area: (1.30 * 1.70).toFixed(2),
        description: "In-unit restroom for staff or visitors"
      }
    ],
    notes: "Optimized layout for a small medical clinic, includes a private room and restroom.",
    locationHint: "Shown on full floor layout as top-right corner unit"
  },
  {
    id: 8,
    image: room8,
    totalArea: 102,
    rooms: [
      {
        name: "Reception",
        dimensions: { width: 3.30, height: 5.65 },
        image: reception,
        area: (3.30 * 5.65).toFixed(2),
        description: "Spacious reception area with seating"
      },
      {
        name: "Room1",
        dimensions: { width: 2.71, height: 3.30 },
        image: clinicRoom,
        area: (2.71 * 3.30).toFixed(2),
        description: "Private room for examination or consultation"
      },
      {
        name: "Room2",
        dimensions: { width: 3.99, height: 3.01 },
        image: clinicRoom,
        area: (3.99 * 3.01).toFixed(2),
        description: "Private room for examination or consultation"
      },
      {
        name: "Room3",
        dimensions: { width: 2.73, height: 2.01 },
        image: clinicRoom,
        area: (2.73 * 2.01).toFixed(2),
        description: "Private room for examination or consultation"
      },
      {
        name: "Toilet",
        dimensions: { width: 1.52, height: 1.55 },
        image: toilet,
        area: (1.52 * 1.55).toFixed(2),
        description: "In-unit restroom for staff or visitors"
      }
    ],
    notes: "Optimized layout for a small medical clinic, includes a private room and restroom.",
    locationHint: "Shown on full floor layout as top-right corner unit"
  },
  {
    id: 9,
    image: room9,
    totalArea: 64.5,
    rooms: [
      {
        name: "Reception",
        dimensions: { width: 3.20, height: 5.82 },
        image: reception,
        area: (3.20 * 5.82).toFixed(2),
        description: "Spacious reception area with seating"
      },
      {
        name: "Room1",
        dimensions: { width: 2.45, height: 3.24 },
        image: clinicRoom,
        area: (2.45 * 3.24).toFixed(2),
        description: "Private room for examination or consultation"
      },
      {
        name: "Room2",
        dimensions: { width: 3.24, height: 4.93 },
        image: clinicRoom,
        area: (3.24 * 4.93).toFixed(2),
        description: "Private room for examination or consultation"
      },
      {
        name: "Room3",
        dimensions: { width: 3.20, height: 3.83 },
        image: clinicRoom,
        area: (3.83 * 3.20).toFixed(2),
        description: "Private room for examination or consultation"
      },
      {
        name: "Toilet",
        dimensions: { width: 1.30, height: 2.13 },
        image: toilet,
        area: (1.30 * 2.13).toFixed(2),
        description: "In-unit restroom for staff or visitors"
      }
    ],
    notes: "Optimized layout for a small medical clinic, includes a private room and restroom.",
    locationHint: "Shown on full floor layout as top-right corner unit"
  },
  {
    id: 10,
    image: room10,
    totalArea: 41.5,
    rooms: [
      {
        name: "Reception",
        dimensions: { width: 3.21, height: 4.05 },
        image: reception,
        area: (3.21 * 4.05).toFixed(2),
        description: "Spacious reception area with seating"
      },
      {
        name: "Room1",
        dimensions: { width: 3.85, height: 4.74 },
        image: clinicRoom,
        area: (3.85 * 4.74).toFixed(2),
        description: "Private room for examination or consultation"
      },
      {
        name: "Toilet",
        dimensions: { width: 1.41, height: 1.94 },
        image: toilet,
        area: (1.41 * 1.94).toFixed(2),
        description: "In-unit restroom for staff or visitors"
      }
    ],
    notes: "Optimized layout for a small medical clinic, includes a private room and restroom.",
    locationHint: "Shown on full floor layout as top-right corner unit"
  },
  {
    id: 11,
    image: room11,
    totalArea: 48.5,
    rooms: [
      {
        name: "Reception",
        dimensions: { width: 2.95, height: 4.12 },
        image: reception,
        area: (4.12 * 2.95).toFixed(2),
        description: "Spacious reception area with seating"
      },
      {
        name: "Room1",
        dimensions: { width: 3.68, height: 4.49 },
        image: clinicRoom,
        area: (3.68 * 4.49).toFixed(2),
        description: "Private room for examination or consultation"
      },
      {
        name: "Toilet",
        dimensions: { width: 1.41, height: 1.94 },
        image: toilet,
        area: (1.94 * 1.41).toFixed(2),
        description: "In-unit restroom for staff or visitors"
      }
    ],
    notes: "Optimized layout for a small medical clinic, includes a private room and restroom.",
    locationHint: "Shown on full floor layout as top-right corner unit"
  },
  {
    id: 12,
    image: room12,
    totalArea: 48.5,
    rooms: [
      {
        name: "Reception",
        dimensions: { width: 2.94, height: 4.12 },
        image: reception,
        area: (4.12 * 2.94).toFixed(2),
        description: "Spacious reception area with seating"
      },
      {
        name: "Room1",
        dimensions: { width: 3.74, height: 4.50 },
        image: clinicRoom,
        area: (3.74 * 4.50).toFixed(2),
        description: "Private room for examination or consultation"
      },
      {
        name: "Toilet",
        dimensions: { width: 1.47, height: 1.94 },
        image: toilet,
        area: (1.94 * 1.47).toFixed(2),
        description: "In-unit restroom for staff or visitors"
      }
    ],
    notes: "Optimized layout for a small medical clinic, includes a private room and restroom.",
    locationHint: "Shown on full floor layout as top-right corner unit"
  },
  {
    id: 13,
    image: room13,
    totalArea: 78.5,
    rooms: [
      {
        name: "Reception",
        dimensions: { width: 3.72, height: 4.91 },
        image: reception,
        area: (4.91 * 3.72).toFixed(2),
        description: "Spacious reception area with seating"
      },
      {
        name: "Room1",
        dimensions: { width: 3.85, height: 4.74 },
        image: clinicRoom,
        area: (4.74 * 3.85).toFixed(2),
        description: "Private room for examination or consultation"
      },
      {
        name: "Toilet",
        dimensions: { width: 1.47, height: 1.94 },
        image: toilet,
        area: (1.94 * 1.47).toFixed(2),
        description: "In-unit restroom for staff or visitors"
      }
    ],
    notes: "Optimized layout for a small medical clinic, includes a private room and restroom.",
    locationHint: "Shown on full floor layout as top-right corner unit"
  },
  {
    id: 14,
    image: room14,
    totalArea: 71,
    rooms: [
      {
        name: "Reception",
        dimensions: { width: 3.26, height: 5.92 },
        image: reception,
        area: (5.92 * 3.26).toFixed(2),
        description: "Spacious reception area with seating"
      },
      {
        name: "Room1",
        dimensions: { width: 3.26, height: 3.74 },
        image: clinicRoom,
        area: (3.74 * 3.26).toFixed(2),
        description: "Private room for examination or consultation"
      },
      {
        name: "Room2",
        dimensions: { width: 3.47, height: 5.21 },
        image: clinicRoom,
        area: (5.21 * 3.47).toFixed(2),
        description: "Private room for examination or consultation"
      },
      {
        name: "Room3",
        dimensions: { width: 2.45, height: 3.47 },
        image: clinicRoom,
        area: (3.47 * 2.45).toFixed(2),
        description: "Private room for examination or consultation"
      },
      {
        name: "Toilet",
        dimensions: { width: 1.20, height: 1.90 },
        image: toilet,
        area: (1.20 * 1.90).toFixed(2),
        description: "In-unit restroom for staff or visitors"
      }
    ],
    notes: "Optimized layout for a small medical clinic, includes a private room and restroom.",
    locationHint: "Shown on full floor layout as top-right corner unit"
  },
  {
    id: 15,
    image: room15,
    totalArea: 54.5,
    rooms: [
      {
        name: "Reception",
        dimensions: { width: 5.25, height: 5.85 },
        image: reception,
        area: (5.85 * 5.25).toFixed(2),
        description: "Spacious reception area with seating"
      },
      {
        name: "Room1",
        dimensions: { width: 2.40, height: 2.86 },
        image: clinicRoom,
        area: (2.40 * 2.86).toFixed(2),
        description: "Private room for examination or consultation"
      },
      {
        name: "Room2",
        dimensions: { width: 2.40, height: 2.78 },
        image: clinicRoom,
        area: (2.78 * 2.40).toFixed(2),
        description: "Private room for examination or consultation"
      },
      {
        name: "Toilet",
        dimensions: { width: 1.06, height: 2.51 },
        image: toilet,
        area: (2.51 * 1.06).toFixed(2),
        description: "In-unit restroom for staff or visitors"
      }
    ],
    notes: "Optimized layout for a small medical clinic, includes a private room and restroom.",
    locationHint: "Shown on full floor layout as top-right corner unit"
  },
  {
    id: 16,
    image: room16,
    totalArea: 62.5,
    rooms: [
      {
        name: "Reception",
        dimensions: { width: 4.48, height: 4.56 },
        image: reception,
        area: (4.56 * 4.48).toFixed(2),
        description: "Spacious reception area with seating"
      },
      {
        name: "Room1",
        dimensions: { width: 2.80, height: 3.29 },
        image: clinicRoom,
        area: (2.80 * 3.29).toFixed(2),
        description: "Private room for examination or consultation"
      },
      {
        name: "Room2",
        dimensions: { width: 2.81, height: 3.29 },
        image: clinicRoom,
        area: (2.81 * 3.29).toFixed(2),
        description: "Private room for examination or consultation"
      },
      {
        name: "Toilet",
        dimensions: { width: 1, height: 2.0 },
        image: toilet,
        area: (2 * 1).toFixed(2),
        description: "In-unit restroom for staff or visitors"
      }
    ],
    notes: "Optimized layout for a small medical clinic, includes a private room and restroom.",
    locationHint: "Shown on full floor layout as top-right corner unit"
  }
];
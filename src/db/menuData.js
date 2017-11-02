// This might seem non-sensical, but it lays the groundwork for dynamic menu trees. 
// NB: The styling is not fully dynamic to match (ie the width percentages),
// so outside of prototyping that would have to be amended.

const menuData = [
  {
    category: 'Camping',
    subcategories: [
      'Tents',
      'Sleeping Bags',
      'Stoves',
      'Harmonica',
      'Beans'      
    ]
  },
  {
    category: 'Clothing',
    subcategories: [
      'Outerwear',
      'Hiking Shoes / Boots',
      'Gloves',
      'Hats'
    ]
  },
  {
    category: 'Fishing',
    subcategories: [
      'Fish',
      'Fish',
      'Fish',
      'Fish',
      'Phish',
      'Fish'
    ]
  },
  {
    category: 'Hiking',
    subcategories: [
      'Metal Detector',
      'Gun',
      'Flares',
      'Space Blanket',
      'Bear Spray',
      'Sombrero'
    ]
  },
]

export default menuData;
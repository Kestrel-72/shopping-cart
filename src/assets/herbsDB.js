import Database from "./Database";

const items = [
   {
      name: 'Peacebloom',
      image: '/src/assets/images/herb_peacebloom.jpg',
      id: 0,
      rarity: 'common',
      price: 15
   },
   {
      name: 'Silverleaf',
      image: '/src/assets/images/herb_silverleaf.jpg',
      id: 1,
      rarity: 'common',
      price: 15
   },
   {
      name: 'Earthroot',
      image: '/src/assets/images/herb_earthroot.jpg',
      id: 2,
      rarity: 'common',
      price: 50
   },
   {
      name: 'Mageroyal',
      image: '/src/assets/images/herb_mageroyal.jpg',
      id: 3,
      rarity: 'common',
      price: 80
   },
   {
      name: 'Swiftthistle',
      image: '/src/assets/images/herb_swiftthistle.jpg',
      id: 4,
      rarity: 'common',
      price: 500
   },
   {
      name: 'Briarthorn',
      image: '/src/assets/images/herb_briarthorn.jpg',
      id: 5,
      rarity: 'common',
      price: 200
   }
]

const herbs = new Database('Herbs', items);

export default herbs;
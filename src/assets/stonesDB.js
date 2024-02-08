import Database from "./Database";

const items = [
   {
      name: 'Rough stone',
      image: '/src/assets/images/stone_rough.jpg',
      id: 0,
      rarity: 'common',
      price: 10
   },
   {
      name: 'Coarse stone',
      image: '/src/assets/images/stone_coarse.jpg',
      id: 1,
      rarity: 'common',
      price: 100
   },
   {
      name: 'Heavy stone',
      image: '/src/assets/images/stone_heavy.jpg',
      id: 2,
      rarity: 'common',
      price: 300
   },
   {
      name: 'Solid stone',
      image: '/src/assets/images/stone_solid.jpg',
      id: 3,
      rarity: 'common',
      price: 600
   },
]

const stones = new Database('Stones', items);

export default stones;
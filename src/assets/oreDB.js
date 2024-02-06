import Database from "./Database";

const items = [
   {
      name: 'Copper ore',
      image: '/src/assets/images/ore_copper.jpg',
      id: 0,
      rarity: 'common'
   },
   {
      name: 'Tin ore',
      image: '/src/assets/images/ore_tin.jpg',
      id: 1,
      rarity: 'common'
   },
   {
      name: 'Silver ore',
      image: '/src/assets/images/ore_silver.jpg',
      id: 2,
      rarity: 'uncommon'
   },
   {
      name: 'Iron ore',
      image: '/src/assets/images/ore_iron.jpg',
      id: 3,
      rarity: 'common'
   }
]

const ore = new Database('Ore', items);

export default ore;
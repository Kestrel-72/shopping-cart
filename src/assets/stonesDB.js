import Database from "./Database";

const items = [
   {
      name: 'Rough stone',
      image: 'src/assets/images/stone_rough.jpg',
      id: 0,
      rarity: 'common'
   },
   {
      name: 'Coarse stone',
      image: 'src/assets/images/stone_coarse.jpg',
      id: 1,
      rarity: 'common'
   },
   {
      name: 'Heavy stone',
      image: 'src/assets/images/stone_heavy.jpg',
      id: 2,
      rarity: 'common'
   },
   {
      name: 'Solid stone',
      image: 'src/assets/images/stone_solid.jpg',
      id: 3,
      rarity: 'common'
   },
]

const stones = new Database('Stones', items);

export default stones;
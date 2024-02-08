import Database from "./Database";

const items = [
   {
      name: 'Linen cloth',
      image: '/src/assets/images/cloth_linen.jpg',
      id: 0,
      rarity: 'common',
      price: 10
   },
   {
      name: 'Wool cloth',
      image: '/src/assets/images/cloth_wool.jpg',
      id: 1,
      rarity: 'common',
      price: 50
   },
   {
      name: 'Silk cloth',
      image: '/src/assets/images/cloth_silk.jpg',
      id: 2,
      rarity: 'common',
      price: 200
   },
   {
      name: 'Mageweave cloth',
      image: '/src/assets/images/cloth_mageweave.jpg',
      id: 3,
      rarity: 'common',
      price: 500
   },
]

const cloth = new Database('Cloth', items);

export default cloth;
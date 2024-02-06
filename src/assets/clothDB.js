import Database from "./Database";

const items = [
   {
      name: 'Linen cloth',
      image: '/src/assets/images/cloth_linen.jpg',
      id: 0,
      rarity: 'common'
   },
   {
      name: 'Wool cloth',
      image: '/src/assets/images/cloth_wool.jpg',
      id: 1,
      rarity: 'common'
   },
   {
      name: 'Silk cloth',
      image: '/src/assets/images/cloth_silk.jpg',
      id: 2,
      rarity: 'common'
   },
   {
      name: 'Mageweave cloth',
      image: '/src/assets/images/cloth_mageweave.jpg',
      id: 3,
      rarity: 'common'
   },
]

const cloth = new Database('Cloth', items);

export default cloth;
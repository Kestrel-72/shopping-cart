class Database {
   constructor(items) {
      this.items = items;
   }

   getByCategory(category) {
      let foundItems = this.items.filter(item => item.category == category);
      return foundItems; 
   }
}

let imageUrl = '/images/';

const items = [
   {
      category: 'cloth',
      name: 'Linen cloth',
      image: imageUrl + 'cloth_linen.jpg',
      id: 0,
      rarity: 'common',
      price: 1430065
   },
   {
      category: 'cloth',
      name: 'Wool cloth',
      image: imageUrl + 'cloth_wool.jpg',
      id: 1,
      rarity: 'common',
      price: 50
   },
   {
      category: 'cloth',
      name: 'Silk cloth',
      image: imageUrl + 'cloth_silk.jpg',
      id: 2,
      rarity: 'common',
      price: 200
   },
   {
      category: 'cloth',
      name: 'Mageweave cloth',
      image: imageUrl + 'cloth_mageweave.jpg',
      id: 3,
      rarity: 'common',
      price: 500
   },
   {
      category: 'herbs',
      name: 'Peacebloom',
      image: imageUrl + 'herb_peacebloom.jpg',
      id: 4,
      rarity: 'common',
      price: 15
   },
   {
      category: 'herbs',
      name: 'Silverleaf',
      image: imageUrl + 'herb_silverleaf.jpg',
      id: 5,
      rarity: 'common',
      price: 15
   },
   {
      category: 'herbs',
      name: 'Earthroot',
      image: imageUrl + 'herb_earthroot.jpg',
      id: 6,
      rarity: 'common',
      price: 50
   },
   {
      category: 'herbs',
      name: 'Mageroyal',
      image: imageUrl + 'herb_mageroyal.jpg',
      id: 7,
      rarity: 'common',
      price: 80
   },
   {
      category: 'herbs',
      name: 'Swiftthistle',
      image: imageUrl + 'herb_swiftthistle.jpg',
      id: 8,
      rarity: 'common',
      price: 500
   },
   {
      category: 'herbs',
      name: 'Briarthorn',
      image: imageUrl + 'herb_briarthorn.jpg',
      id:9,
      rarity: 'common',
      price: 200
   },
   {
      category: 'ore',
      name: 'Copper ore',
      image: imageUrl + 'ore_copper.jpg',
      id: 10,
      rarity: 'common',
      price: 50
   },
   {
      category: 'ore',
      name: 'Tin ore',
      image: imageUrl + 'ore_tin.jpg',
      id: 11,
      rarity: 'common',
      price: 100
   },
   {
      category: 'ore',
      name: 'Silver ore',
      image: imageUrl + 'ore_silver.jpg',
      id: 12,
      rarity: 'uncommon',
      price: 2000,
   },
   {
      category: 'ore',
      name: 'Iron ore',
      image: imageUrl + 'ore_iron.jpg',
      id: 13,
      rarity: 'common',
      price: 1000
   },
   {
      category: 'stones',
      name: 'Rough stone',
      image: imageUrl + 'stone_rough.jpg',
      id: 14,
      rarity: 'common',
      price: 10
   },
   {
      category: 'stones',
      name: 'Coarse stone',
      image: imageUrl + 'stone_coarse.jpg',
      id: 15,
      rarity: 'common',
      price: 100
   },
   {
      category: 'stones',
      name: 'Heavy stone',
      image: imageUrl + 'stone_heavy.jpg',
      id: 16,
      rarity: 'common',
      price: 300
   },
   {
      category: 'stones',
      name: 'Solid stone',
      image: imageUrl + 'stone_solid.jpg',
      id: 17,
      rarity: 'common',
      price: 600
   },
]

let database = new Database(items);

export default database;
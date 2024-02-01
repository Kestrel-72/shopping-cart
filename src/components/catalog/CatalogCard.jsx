function CatalogCard( { name, image, rarity } ) {
   let rarityColor = '';
   if (rarity === 'uncommon') {
      rarityColor = 'text-[#1eff00]';
   }

   return (
      <div className={`catalog-card flex flex-col items-center text-center gap-6 border-2 rounded-md p-8 bg-black hover:underline cursor-pointer ${rarityColor}`}>
         <img src={image} alt="Copper ore" className="rounded-md"/>
         <div className={`font-semibold`}>{name}</div>
      </div>
   )
}

export default CatalogCard;
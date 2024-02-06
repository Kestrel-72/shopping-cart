function CatalogCard( { name, image, rarity } ) {
   let rarityColor = '';
   if (rarity === 'uncommon') {
      rarityColor = 'text-[#1eff00]';
   }

   return (
      <div className={`catalog-card  flex flex-col items-center text-center sm:gap-6 gap-3 border-2 rounded-md sm:p-8 p-4 bg-black hover:underline cursor-pointer ${rarityColor}`}>
         <div className="relative w-14 flex justify-center">
            <img src={image} alt="Copper ore" className="rounded-md relative w-5/6"/>
            <img src="/src/assets/images/item-border.png" alt="Border" className="absolute -top-1 w-full" />
         </div>
         <div className={`font-semibold`}>{name}</div>
      </div>
   )
}

export default CatalogCard;
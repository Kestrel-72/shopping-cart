import Icon from "./Icon";
import { Link } from "react-router-dom";

function CatalogCard( { item } ) {
   let rarityColor = '';
   if (item.rarity === 'uncommon') {
      rarityColor = 'text-[#1eff00]';
   }

   return (
      <Link to={`/catalog/${item.id}`}>
         <div className={`catalog-card  flex flex-col items-center text-center sm:gap-6 gap-3 border-2 rounded-md sm:p-8 p-4 bg-black hover:underline cursor-pointer ${rarityColor}`}>
            <Icon image={item.image} />
            <div className={`font-semibold`}>{item.name}</div>
         </div>
      </Link>
      
   )
}

export default CatalogCard;
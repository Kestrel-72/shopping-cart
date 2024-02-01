import CatalogCard from "./CatalogCard";

function Catalog( { title, database } ) {
   const cards = database.map(item =>
      <CatalogCard key={item.id}
         name={item.name}
         image={item.image}
         rarity={item.rarity}
      />   
   )

   return (
      <div className="width-[1200px] pt-10 grid grid-rows-2">
         <h1 className="text-3xl font-semibold">{title}</h1>
         <div className="catalog-cards flex gap-6">
            {cards}
         </div>
      </div>
   )
}

export default Catalog;
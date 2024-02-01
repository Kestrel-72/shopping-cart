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
      <div className="pt-10 grid grid-rows-catalog-layout">
         <h1 className="text-3xl font-semibold pb-6">{title}</h1>
         <div className="catalog-cards grid gap-6 grid-cols-catalog">
            {cards}
         </div>
      </div>
   )
}

export default Catalog;
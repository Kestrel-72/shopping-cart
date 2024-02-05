import CatalogCard from "./CatalogCard";

function Catalog( { database } ) {
   const cards = database.items.map(item =>
      <CatalogCard key={item.id}
         name={item.name}
         image={item.image}
         rarity={item.rarity}
      />   
   )

   return (
      <div className="pt-10 grid grid-rows-catalog-layout">
         <h1 className="text-3xl font-semibold pb-6">{database.name}</h1>
         <div className="catalog-cards grid gap-6 md:grid-cols-catalog-md grid-cols-catalog-sm">
            {cards}
         </div>
      </div>
   )
}

export default Catalog;
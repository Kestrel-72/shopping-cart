import CatalogCard from "./CatalogCard";

function Catalog( {items} ) {
   const category = items[0].category;
   const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);

   const cards = items.map(item =>
      <CatalogCard key={item.id}
         item={item}
      />   
   )

   return (
      <div className="pt-10 grid grid-rows-catalog-layout">
         <h1 className="text-3xl font-semibold pb-6">{capitalizedCategory}</h1>
         <div className="catalog-cards grid gap-6 md:grid-cols-catalog-md grid-cols-catalog-sm">
            {cards}
         </div>
      </div>
   )
}

export default Catalog;
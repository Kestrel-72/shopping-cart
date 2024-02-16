import categories from "../../assets/categories";
import Category from "./Category";

function Categories() {
   const categoriesList = categories.map(category => 
      <Category category={category} key={category.id}/>
   );
   return (
      <div className="categories col-start-2 flex items-center">
         <ul className="flex md:gap-8 gap-4">{categoriesList}</ul>
      </div>
   )
}

export default Categories;
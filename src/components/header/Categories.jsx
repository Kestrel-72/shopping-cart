import categories from "../../assets/categories";
import Category from "./Category";

function Categories() {
   const categoriesList = categories.map(category => 
      <Category category={category} key={category.id}/>
   );
   console.log(categoriesList)
   return (
      <div className="categories col-start-2 flex items-center">
         <ul className="flex gap-8">{categoriesList}</ul>
      </div>
   )
}

export default Categories;
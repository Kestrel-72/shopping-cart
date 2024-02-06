import { Link } from "react-router-dom";

function Category({ category }) {
   return (
      <li className="category flex items-center">
         <Link to={`catalog/${category.name}`}>{category.name}</Link>
      </li>
   )
}

export default Category;
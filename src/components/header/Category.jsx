function Category({ category }) {
   return (
      <li className="category flex items-center">
         <a href="">{category.name}</a>
      </li>
   )
}

export default Category;
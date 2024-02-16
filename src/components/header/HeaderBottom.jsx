import Categories from "./Categories";
import BottomButtons from "./BottomButtons";

function HeaderBottom( {cartQuantity} ) {
   return (
      <nav className="grid gap-4 grid-cols-header justify-items-center py-4 ">
         <Categories />
         <BottomButtons cartQuantity={cartQuantity}/>
      </nav>
      
   )
}

export default HeaderBottom;
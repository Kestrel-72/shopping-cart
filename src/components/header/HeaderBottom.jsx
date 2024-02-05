import Categories from "./Categories";
import BottomButtons from "./BottomButtons";

function HeaderBottom() {
   return (
      <nav className="grid gap-4 grid-cols-header justify-items-center py-4 ">
         <Categories />
         <BottomButtons />
      </nav>
      
   )
}

export default HeaderBottom;
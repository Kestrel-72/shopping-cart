import HeaderTop from "./HeaderTop"
import HeaderBottom from "./HeaderBottom"
import Item from "../catalog/Item";

function Header( {cartQuantity} ) {
   return (
      <header className="">
         <HeaderTop />
         <HeaderBottom cartQuantity={cartQuantity}/>
      </header>
   )
}

export default Header;
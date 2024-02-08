import HeaderTop from "./HeaderTop"
import HeaderBottom from "./HeaderBottom"
import Item from "../catalog/Item";

function Header() {
   return (
      <header className="">
         <HeaderTop />
         <HeaderBottom />
      </header>
   )
}

export default Header;
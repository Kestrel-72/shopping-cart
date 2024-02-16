import Header from "./components/header/Header";
import { Outlet } from "react-router";

function App( { cartQuantity } ) {
   return (
      <div className="text-text-color p-6 text-base md:text-lg">
         <Header cartQuantity={cartQuantity}/>
         <Outlet />
      </div>
   )
}

export default App;

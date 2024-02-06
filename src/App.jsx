import Header from "./components/header/Header";
import { Outlet } from "react-router";

function App() {
   return (
      <div className="text-text-color p-6 text-base md:text-lg">
         <Header />
         <Outlet />
      </div>
   )
}

export default App;

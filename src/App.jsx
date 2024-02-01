import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Catalog from "./components/catalog/Catalog";
import ore from "./assets/oreDB";
import stones from "./assets/stonesDB";

function App() {
   return (
      <div className="w-[1200px] text-text-color">
         <Header />
         <Catalog title={"Stones"} database={stones} />
      </div>
   )
}

export default App;

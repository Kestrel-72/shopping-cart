import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Catalog from "./components/catalog/Catalog";
import ore from "./assets/oreDB";
import stones from "./assets/stonesDB";

function App() {
   return (
      <div className="max-w-screen-lg text-text-color p-6 text-base md:text-lg">
         <Header />
         <Catalog database={stones} />
      </div>
   )
}

export default App;

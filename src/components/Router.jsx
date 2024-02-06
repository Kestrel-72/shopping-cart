import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Main from "./main/Main.jsx"
import App from "../App.jsx"
import Catalog from "./catalog/Catalog.jsx"

import ore from '/src/assets/oreDB.js'
import cloth from '/src/assets/clothDB.js'
import stones from '/src/assets/stonesDB.js'
import herbs from '/src/assets/herbsDB.js'

function Router() {
   const router = createBrowserRouter([
      {
        path: "/",
        element: <App />,
        children: [
         { index: true, element: <Main /> },
         { path: "catalog/herbs", element: <Catalog database={herbs} /> },
         { path: "catalog/ore", element: <Catalog database={ore} /> },
         { path: "catalog/cloth", element: <Catalog database={cloth} /> },
         { path: "catalog/stones", element: <Catalog database={stones} /> },
        ]
      },
    ]);

    return <RouterProvider router={router} />;
}


 export default Router;
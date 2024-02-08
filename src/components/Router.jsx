import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Main from "./main/Main.jsx"
import App from "../App.jsx"
import Catalog from "./catalog/Catalog.jsx"
import database from '/src/assets/Database.js'

function Router() {
   const router = createBrowserRouter([
      {
        path: "/",
        element: <App />,
        children: [
         { index: true, element: <Main /> },
         { path: "catalog/herbs", element: <Catalog items={database.getByCategory('herbs')} /> },
         { path: "catalog/ore", element: <Catalog items={database.getByCategory('ore')} /> },
         { path: "catalog/cloth", element: <Catalog items={database.getByCategory('cloth')} /> },
         { path: "catalog/stones", element: <Catalog items={database.getByCategory('stones')} /> },
        ]
      },
    ]);

    return <RouterProvider router={router} />;
}


 export default Router;
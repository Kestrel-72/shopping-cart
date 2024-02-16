import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Main from "../main/Main.jsx"
import App from "../../App.jsx"
import Catalog from "../catalog/Catalog.jsx"
import database from '/src/assets/Database.js'
import Item from "../catalog/Item.jsx"
import ErrorPage from "./ErrorPage.jsx"
import Cart from "../cart/Cart.js"
import { useState } from "react"

function Router() {
   let [cart, setCart] = useState(new Cart());
   let [itemsQnt, setItemsQnt] = useState(cart.items.length);

   const router = createBrowserRouter([
      {
        path: "/",
        element: <App cartQuantity={cart.items.length}/>,
        errorElement: <ErrorPage />,
        children: [
         { index: true, element: <Main /> },
         { path: "catalog/herbs", element: <Catalog items={database.getByCategory('herbs')} /> },
         { path: "catalog/ore", element: <Catalog items={database.getByCategory('ore')} /> },
         { path: "catalog/cloth", element: <Catalog items={database.getByCategory('cloth')} /> },
         { path: "catalog/stones", element: <Catalog items={database.getByCategory('stones')} /> },
         { path: "catalog/:id", element: <Item cart={cart} setCart={setCart} setItemsQnt={setItemsQnt}/> },
        ]
      },
    ]);

    return <RouterProvider router={router} />;
}


 export default Router;
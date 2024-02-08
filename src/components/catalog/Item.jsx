import { useState } from "react";
import Icon from "./Icon";
import { useParams } from "react-router-dom";
import database from "../../assets/Database";

function Item() {
   const { id } = useParams();
   const item = database.items.find((item) => item.id == id);
   const [quantity, setQuantity] = useState(0);
   
   function calculateTotal() {
      let total = 0;
      if (quantity < 0) {
         total = 0;
      } else {
         total = quantity * item.price;
      }
      return total;
   }

   function handleQuantityChange(e) {
      if (e.target.value < 0) {
         setQuantity(0);
      } else if (e.target.value > 20000) {
         setQuantity(20000);
      } else {
         setQuantity(e.target.value);
      }
      
   }

   return (
      <div>
         <h1 className="text-3xl font-semibold pb-6 text-white">{item.name}</h1>
         <div className="rounded-md grid grid-cols-[100px_1fr] grid-rows-item-layout justify-items-start gap-2 text-white font-semibold">
            <div className="row-span-3">
               <Icon image={item.image}/>
            </div>
            <div className="col-start-2">Price: {item.price}</div>
            <div className="col-start-2">
               <label htmlFor="quantity">Quantity: </label>
               <input type="number" name="quantity" id="quantity" pattern="[0-9]" value={quantity} onChange={handleQuantityChange} className="text-black w-20"/>
            </div>
            <div className="col-start-2">Total: {calculateTotal()}</div>
            <button className="col-start-2 font-semibold border-2 rounded-md p-2 text-black bg-white hover:shadow-button">Add to cart</button>
         </div>
      </div>
   )
}


export default Item;
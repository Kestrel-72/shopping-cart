import { render } from "react-dom";
import database from "../../assets/Database";
import CartItem from "./CartItem";
import Price from "../catalog/Price";

function CartComponent( {cart} ) {
   let items = [];
   cart.items.forEach(item => items.push(findItemInDB(item.id, item.qnt)));
   let total = calculateTotal(items);

   let listItems = items.map(item => 
      <CartItem item={item} key={item.id}/>
   )

   function findItemInDB(id, qnt) {
      let item =  database.items.find(item => item.id == id);
      return {...item, qnt: qnt};
   }

   function calculateTotal(items) {
      let total = 0;
      for (let i = 0; i < items.length; i++) {
         console.log(items[i])
         total += items[i].price * items[i].qnt;
      }
      return total;
   }

   return (
      <>
      <ul>
         {listItems}
      </ul>
      <span>Total: <Price price={total}/></span>
      </>
      
   )
}

export default CartComponent;
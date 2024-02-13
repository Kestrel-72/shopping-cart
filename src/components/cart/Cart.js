class Cart {
   constructor() {
      this.items = [];
   }

   addItem(itemId, quantity) {
      if (quantity == 0) return;
      if (this.items.find(item => item.id == itemId)) {
         return;
      } else {
         this.items.push({id: itemId, qnt: quantity});
      }
   }

}

export default Cart;
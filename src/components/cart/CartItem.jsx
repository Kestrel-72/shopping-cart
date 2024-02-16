function CartItem( {item} ) {
   return (
      <li key={item.id}>{item.name} x{item.qnt}</li>
   )
}

export default CartItem;
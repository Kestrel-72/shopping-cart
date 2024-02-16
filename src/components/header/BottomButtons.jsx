import CartButton from "./CartButton";

function BottomButtons( {cartQuantity} ) {
   return (
      <div className="bottom-buttons flex items-center">
         <CartButton cartQuantity={cartQuantity} key={cartQuantity}/>
      </div>
   )
}

export default BottomButtons;
function Icon( { image } ) {
   return (
      <div className="relative w-14 flex justify-center">
         <img src={image} alt="Copper ore" className="rounded-md relative w-5/6"/>
         <img src="/src/assets/images/item-border.png" alt="Border" className="absolute -top-1 w-full" />
      </div>
   )
}

export default Icon;
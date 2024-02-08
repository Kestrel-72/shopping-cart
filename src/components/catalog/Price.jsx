function Price( { price } ) {
   let priceGold = 0;
   let priceSilver = 0;
   let priceCopper = 0;
   setCoins();

   function setCoins() {
      let remainder = price;
      let gold = 0;
      let silver = 0;
      if (remainder >= 10000)  {
         gold = Math.floor(remainder / 10000);
         remainder = remainder - gold * 10000;
      } 
      if (remainder >= 100) {
         silver = Math.floor(remainder / 100);
         remainder = remainder - silver * 100;
      }
      priceGold = gold;
      priceSilver = silver;
      priceCopper = remainder;
   }

   return (
      <span>
         <span>{priceGold}g </span>
         <span>{priceSilver}s </span>
         <span>{priceCopper}c </span>
      </span>
   )
}

export default Price;
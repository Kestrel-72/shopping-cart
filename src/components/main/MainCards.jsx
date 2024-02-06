import MainCard from "./MainCard";

function MainCards() {
   return (
      <div className="main-cards grid gap-6 md:grid-cols-catalog-md grid-cols-catalog-sm">
         <MainCard 
            title={"Time is money, friend"}
            text={"Receive your purchase in less than 200ms"}
            bgColor={"bg-blue-200"}
         />
         <MainCard
            title={"We got what you need!"}
            text={"Goods and wares from all around Azeroth"}
            bgColor={"bg-lime-200"} 
         />
      </div>
   )
}

export default MainCards;
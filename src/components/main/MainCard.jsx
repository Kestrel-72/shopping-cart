function MainCard({ title, text, bgColor }) {
   return (
      <div className={`main-card ${bgColor} rounded-md px-4 py-6 text-black`}>
         <div className="font-semibold text-xl mb-2">{title}</div>
         <p>{text}</p>
      </div>
   )
}

export default MainCard;
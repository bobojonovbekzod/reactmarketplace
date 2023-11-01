
function Cards(props) {
  return (
    <div key={props.id} className="flex flex-col text-white gap-2 w-[220px] h-[350px] border border-red-500 overflow-hidden p-3 relative" >
      <img className="w-[200px] h-[200px]" src={props.img} alt="this is img" />
      <p className="absolute top-2 right-2 bg-amber-500 text-white p-1 rounded-full">{props.id}</p>
      <h3>{props.title}</h3>
      <div className="flex justify-between">
      <p className="text-red-700">{props.category}</p>
      <p>{props.price}</p>
      </div>
    </div>
  )
}

export default Cards
interface PersonProps {
  name: string,
  date: string
}
export default function PersonDetails(props:PersonProps) {
  return (
    <div className='w-1/5 border ml-10 mt-96 text-slate-50'>
      <h2 className="text-center">
      <i className="text-xl">{props.name}</i>
      </h2>
      <h2 className="text-center mt-20">{props.date}</h2>
    </div>
  )
}

import Person from "../Persons/PersonDetails"
export default function OurTeam() {
    const persons = [
        {name: 'Altynay Guney', date: "From 2013"},
        {name: 'Graham Peak', date: "From 2022"},
        {name: 'Jelena Pazaksina', date: 'April 2019- December 2022'}
      ]
  return (
    <div className="flex justify-between w-3/4 m-auto">
        {persons.map(el => <Person name={el.name} date={el.date}/>)}    
    </div>
  )
}

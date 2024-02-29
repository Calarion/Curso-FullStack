const Persons = ({persons, filter}) => {
  return (
    persons.filter(person => 
      person.name.toUpperCase().includes(filter.toUpperCase())).map(person =>
        <li key={person.name}>{person.name} {person.number}</li>)
  )
}
  export default Persons
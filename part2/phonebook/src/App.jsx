import { useState } from 'react'
import FilterForm from "./components/Filter.jsx"
import PersonForm from "./components/PersonForm.jsx"
import Persons from "./components/Persons.jsx"

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value) 
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value) 
  }
  
  const handleFilterChange = (event) => {
    setFilter(event.target.value) 
  }

  const addPerson = (event) => {
    event.preventDefault()
  
    const personObject={
      name: newName,
      number: newNumber
    }
  
    if (persons.map(person => person.name).indexOf(personObject.name)!=-1) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
    
    <h2>Phonebook</h2>

    <FilterForm filter={filter} handleFilterChange={handleFilterChange}/>

    <h2>Add a new</h2>

    <PersonForm newName={newName}
                newNumber={newNumber}
                handleNameChange={handleNameChange}
                handleNumberChange={handleNumberChange}
                addPerson={addPerson}/>

    <h2>Numbers</h2>
    <Persons persons={persons} filter={filter}/>

    </div>
  )
}

export default App
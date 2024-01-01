import { useState } from 'react'
import Persons from '../components/Persons'
import PersonForm from '../components/PersonForm'
import Filter from '../components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const personObject = {
      name: newName,
      number: newPhone,
      id: persons.length + 1
    }
    if (persons.map(person=>person.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    if (persons.map(person=>person.phone).includes(newPhone)) {
      alert(`${newPhone} is already added to phonebook`)
      return
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewPhone('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const phoneToFilter = filter === '' 
    ? persons 
    : persons.filter(person=>person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} persons={persons} handleFilterChange={handleFilterChange}/>
      <h2>Add new Phone</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newPhone={newPhone} handlePhoneChange={handlePhoneChange}/>
      <h2>Numbers</h2>
      <Persons persons={phoneToFilter}/>
    </div>
  )
}

export default App

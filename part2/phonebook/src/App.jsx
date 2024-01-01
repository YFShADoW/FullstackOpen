import { useEffect, useState } from 'react'
import axios from 'axios'
import Persons from '../components/Persons'
import PersonForm from '../components/PersonForm'
import Filter from '../components/Filter'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(()=>{
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response=>{
        console.log('promise fulfilled')
        setPersons(response.data)
    })
  },[])
  console.log('render', persons.length, 'persons')


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

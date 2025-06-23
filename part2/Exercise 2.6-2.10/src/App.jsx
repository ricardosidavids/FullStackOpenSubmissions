import { useState } from 'react'
import Names from './components/Names'



const App = () => {
  const [persons, setPersons] = useState([
    { id:1 ,
      name: 'Arto Hellas',
    number: '0154' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
   const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  const addName = (event) => {
    event.preventDefault()
    const nameObject= {
      id: persons.length+1 ,
      name: newName,
      number : newNumber
    }
    if (persons.some(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
    }
    else {
    setPersons(persons.concat(nameObject))
    setNewName('')
  setNewNumber('')}
  }


 const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) =>
  {setNewNumber(event.target.value)}

  const handleSearch = (event) => {
    setSearch(event.target.value)
    console.log(search)
    console.log(persons)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <input onChange= {handleSearch}/>

        <form onSubmit={addName}>
        <div>name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>number : <input value={newNumber} onChange ={handleNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Names persons={filteredPersons} />
      
    </div>
  )
}

export default App
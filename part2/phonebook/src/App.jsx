import { useEffect, useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'



const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('');
  const [newSearch,setNewSearch] = useState('');


  useEffect(()=>{
    console.log("effect")
    personService
    .getAll()
    .then(response=>{
      setPersons(response)
    })
  },[])


  const addName = (e)=>{
    e.preventDefault()
    let checkName = persons.filter((p)=>p.name===newName)
    console.log(checkName.length)
    if(checkName.length!==0){
      alert(`${newName} is already added to phonebook`)
    }
    else{
      const newPerson = {
        name:newName,
        number: newNumber
      }

      personService.
      create(newPerson)
      .then(response=>{
        setPersons(persons.concat(response))
      })
    }
    setNewName("")
    setNewNumber("")
  }

  const personToDisplay = newSearch
  ? persons.filter(p => p.name.toLowerCase().search(newSearch.toLowerCase())!=-1)
  : persons;


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={newSearch} setNewSearch={setNewSearch}/>
        
      <h2>add a new</h2>
      <PersonForm addName={addName} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber}/>

      <h2>Numbers</h2>
      <Persons personToDisplay={personToDisplay}/>

    </div>
  )
}

export default App
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

  const getPhonebook = ()=>{
    console.log("GET DATA")
    personService
    .getAll()
    .then(response=>{
      setPersons(response)
    })
  }

  useEffect(getPhonebook,[])

  const addName = (e)=>{
    e.preventDefault()
    let checkName = persons.filter((p)=>p.name===newName)
    console.log(checkName[0]?.id)
    const newPerson = {
      name:newName,
      number: newNumber
    }
    if(checkName.length!==0){
      if(window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)){
        personService.
        update(newPerson,checkName[0].id)
        .then((response)=>{
          setPersons(persons.map(p => p.name !== newName? p:response))
          console.log(persons)
        })
      }
    }
    else{
  
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

  const handleDelete = (id)=>{
    if(window.confirm(`Delete ${persons.filter(p => p.id === id)[0].name}?`)){
      personService.
        deletePerson(id)
        .then(()=>{
          setPersons(persons.filter(p => p.id !== id))
        })
      }
    }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={newSearch} setNewSearch={setNewSearch}/>
        
      <h2>add a new</h2>
      <PersonForm addName={addName} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber}/>

      <h2>Numbers</h2>
      <Persons personToDisplay={personToDisplay} handleDelete={handleDelete}/>
    </div>
  )
}

export default App
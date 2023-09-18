import { useEffect, useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import axios from 'axios';



const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('');
  const [newSearch,setNewSearch] = useState('');


  useEffect(()=>{
    console.log("effect")
    axios
    .get('http://localhost:3001/persons')
    .then(response =>{
      console.log('promise fulfiled')
      setPersons(response.data)
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

      axios.post('http://localhost:3001/persons',newPerson)
      .then(response=>{
        setPersons(persons.concat(response.data))
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
import { useState } from 'react'


const Person = ({name,number})=>{
  return(
    <div>
      {name} {number}
    </div>
  )
}



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('');
  const [newSearch,setNewSearch] = useState('');

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
      setPersons(persons.concat(newPerson))
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
        <div>
          filter shown with<input value={newSearch} onChange={(e)=>setNewSearch(e.target.value)} />
        </div>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={(e)=> setNewName(e.target.value)}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={(e)=> setNewNumber(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {personToDisplay.map(p => <Person key={p.name} name={p.name} number={p.number}/>)}

    </div>
  )
}

export default App
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (e)=>{
    e.preventDefault()
    let checkName = persons.filter((p)=>p===newName)
    console.log(checkName)
    if(!checkName.length){
      alert(`${newName} is already added to phonebook`)
    }
    else{
      setPersons(persons.concat({
        name:newName
      }))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={(e)=> setNewName(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )
}

export default App
import PersonDisplay from "./PersonDisplay"


const Persons = ({personToDisplay,handleDelete})=>{ 
  return(
    <>
        {personToDisplay.map((p) => <PersonDisplay key={p.name} name={p.name} number={p.number} handleDelete={()=>handleDelete(p.id)}/>)} 
    </>
  )
}

export default Persons
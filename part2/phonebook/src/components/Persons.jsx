import PersonDisplay from "./PersonDisplay"


const Persons = ({personToDisplay})=>{ 
  return(
    <>
        {personToDisplay.map((p) => <PersonDisplay key={p.name} name={p.name} number={p.number}/>)} 
    </>
  )
}

export default Persons
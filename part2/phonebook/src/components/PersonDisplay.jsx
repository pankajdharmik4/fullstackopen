const PersonDisplay = ({name,number,handleDelete})=>{

  return(
    <div>
      {name} {number} <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default PersonDisplay
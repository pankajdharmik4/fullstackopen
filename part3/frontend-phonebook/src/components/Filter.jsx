const Filter = ({search,setNewSearch})=>{
    return(
      <div>
        filter shown with<input value={search} onChange={(e)=>setNewSearch(e.target.value)} />
    </div>
    )
  }

export default Filter 
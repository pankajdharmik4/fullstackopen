import { useEffect,useState } from "react"
import getCountries from './services/countries'
import CountryInfo from "./components/CountryInfo"



function App() {
  const [search, setSearch] = useState('')
  const [countries,setCountries] = useState([])

  useEffect(()=>{
    if(search){
      getCountries(search)
      .then(res => {
        const data = res;
        const dataFiltered = data.filter((d)=> d.name.common.toLowerCase().search(search.toLowerCase())!=-1)
        setCountries(dataFiltered)
        console.log(dataFiltered,countries.length)
      })
      
    }
  },[search])

  const handleShow=(c)=>{
    const dataFiltered = countries.filter((d)=> d.name.common.toLowerCase().search(c.name.common.toLowerCase())!=-1)
    setCountries(dataFiltered)
    setSearch('')
  }

  return (
    <>
      <div>find countries<input value={search} onChange={(e)=>setSearch(e.target.value)}/></div>
      <div>
          {countries.length>10?<div>Too many matches, specify another filter</div>:(
          <div>
              {countries.length==1?(
                <CountryInfo country={countries}/>
              ):(
                <div>
                  {countries.map(c=> {
                    return <div key={c.name.common}>
                      {c.name.common} <button key={c.name.common} onClick={()=>handleShow(c)}>show</button>
                      </div>
                  })}
                </div>
              )}
          </div>
          )}
      </div>
    </>
  )
}

export default App

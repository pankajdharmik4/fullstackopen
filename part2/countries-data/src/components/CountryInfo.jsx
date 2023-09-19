import React from 'react'

const CountryInfo = ({country}) => {
    console.log(country)
  return (
    <div>
        <h2>{country[0].name.common}</h2>
        <p>
            capital {country[0].capital[0]}<br/>
            area {country[0].area}
        </p>
        <h3>languages:</h3>
        <ul>
        {
            Object.values(country[0].languages).map((lan)=>{
                return <li key={lan}>{lan}</li>
            })
        }
        </ul>
        <img src={country[0].flags.png} alt={country[0].flags.alt} style={{width:240,height:160}}/>
    </div>
  )
}

export default CountryInfo
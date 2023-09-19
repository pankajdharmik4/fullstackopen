import React from 'react'
import { useState,useEffect } from 'react'
import Weather from './Weather'
import axios from 'axios'

const apiKey = import.meta.env.VITE_API
const CountryInfo = ({country}) => {

    const [weather, setWeather] = useState(null)

    useEffect(() => {
        const apiCall = `https://api.openweathermap.org/data/2.5/weather?lat=${country[0].capitalInfo.latlng[0]}&lon=${country[0].capitalInfo.latlng[1]}&appid=${apiKey}&units=metric`
        axios.get(apiCall)
          .then(response => setWeather(response.data))
      }, [country[0].capital[0]])

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
        <Weather w={weather} />

    </div>
  )
}

export default CountryInfo
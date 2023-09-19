
import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getCountries = (search)=>{
    if(search){
        const request = axios.get(baseUrl)
        return request.then(response => response.data)
    }
}

export default getCountries
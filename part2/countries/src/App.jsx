import { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')  

  useEffect(()=>{
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }
  ,[])
  
  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
  }

  const displayCountry = (country) => {
    return(
      <div>
        <h1>{country.name.common}</h1>
        <div>capital {country.capital[0]}</div>
        <div>area {country.area}</div>
        <br />
        <div>
          <b>Language</b>
        </div>
        <ul>
          {Object.values(country.languages).map(language => 
            <li key={language}>{language}</li>
          )}
        </ul>

        <img src={country.flags.png} alt="flag" width="200" height="200"/>
      </div>
    )
  }

  const showCountry = () =>{
    const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
    if(countriesToShow.length>=10){
      return(
        <div>Too many matches, specify another filter</div>
      )
    }
    else if(countriesToShow.length===1){
      return displayCountry(countriesToShow[0])
    }
    else{
      return(
        countriesToShow.map(country => 
          <div key={country.name.common}>
            {country.name.common}
          </div>
        )
      )
    }
  }



  return(
    <div>
      <form>
        <div>
          find countries <input value={search} onChange={handleSearchChange}/>
        </div>
      </form>
      <div>
        {showCountry()}
      </div>
    </div>
  )
}

export default App

import axios from "axios"
import { useState, useEffect } from "react";
import CountriesList from "./components/CountriesList";

function App() {

  const [countries, setCountries] = useState(null);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(({ data }) => {
        setCountries(data);
      });
    
  }, [])

  const countriesToShow = filter
    ? countries.filter(country => country.name.common.toLowerCase().includes(filter))
    : countries;
  
  const handleSearch = ({target}) => {

    setFilter(target.value.trim().toLowerCase());
  }

  return (
    <>
      Find countries: {" "}
      <input onChange={handleSearch} type="text" />

      <CountriesList countries={countriesToShow}/>
    </>
  )
}

export default App

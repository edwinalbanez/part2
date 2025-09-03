import { useState, useEffect } from "react";
import CountriesList from "./components/CountriesList";
import countriesService from "./services/countries";

function App() {

  const [countries, setCountries] = useState(null);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    countriesService
      .getAll()
      .then(data => setCountries(data));
    
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
      <input 
        onChange={handleSearch} 
        type="search"
        disabled={!countries}
      />

      <CountriesList countries={countriesToShow}/>
    </>
  )
}

export default App

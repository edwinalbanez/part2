import CountryItem from "./CountryItem";
import CountryInfo from "./CountryInfo";

const CountriesList = ({countries}) => {

  if (!countries || countries.length === 0) {
    return (
      <div>
        <p>No information available.</p>
      </div>
    );
  }

  if (countries.length === 1) {
    return(
      <CountryInfo country={countries[0]}/>
    )
  }

  if (countries.length > 1 && countries.length <= 10) {
    return (
      <div>
        {countries.map(country => 
          <CountryItem key={country.cca3} country={country} />
        )}
      </div>
    )
  }

  if (countries.length > 10) {
    return(
      <div>
        <p>Too many matches, specify another filter.</p>
      </div>
    )
  }
}

export default CountriesList
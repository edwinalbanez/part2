import CountryItem from "./CountryItem";

const CountriesList = ({countries}) => {

  if (!countries || countries.length === 0) {
    return (
      <div>
        <p>No information available.</p>
      </div>
    );
  }

  if (countries.length === 1) {

    const {name, capital, area, flags} = countries[0];
    const languages = Object.values(countries[0].languages);

    const flagStyles = {
      width: 300,
      border: "solid",
      borderColor: "rgba(194, 194, 194, 1)"
    }

    return(
      <div>
        <h1> {name.common} </h1>
        <p> Capital: {capital[0]} </p>
        <p> Area: {area} km2 </p>
        
        <h2> Languages </h2>
        <ul>
          {languages.map(lang => 
            <li key={lang}> {lang} </li>
          )}
        </ul>
        <img 
          style={flagStyles}
          src={flags.svg} 
          alt={flags.alt} 
        />
      </div>
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
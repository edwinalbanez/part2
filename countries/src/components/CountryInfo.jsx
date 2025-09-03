const CountryInfo = ({country}) => {

  const { name, capital, area, flags } = country;
  const languages = Object.values(country.languages);

  const flagStyles = {
    width: 300,
    border: "solid",
    borderColor: "rgba(194, 194, 194, 1)",
  };

  return (
    <div>
      <h1> {name.common} </h1>
      <p> Capital: {capital[0]} </p>
      <p> Area: {area} km2 </p>

      <h2> Languages </h2>
      <ul>
        {languages.map((lang) => (
          <li key={lang}> {lang} </li>
        ))}
      </ul>
      <img style={flagStyles} src={flags.svg} alt={flags.alt} />
    </div>
  );
}

export default CountryInfo
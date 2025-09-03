import { useState } from "react"
import CountryInfo from "./CountryInfo";

const CountryItem = ({country}) => {

  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
      <p> 
        {country.name.common} {" "}
        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? "Hide" : "Show"}
        </button>
      </p>

      {showInfo && 
        <CountryInfo country={country}/>
      }

    </div>
  )
}

export default CountryItem
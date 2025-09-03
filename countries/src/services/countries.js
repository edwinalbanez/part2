import axios from "axios";

const api = "https://studies.cs.helsinki.fi/restcountries/api/all"

const getAll = () => 
  axios
    .get(api)
    .then(response => response.data)

export default { getAll }
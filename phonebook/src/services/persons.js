import axios from "axios";

const url = "http://localhost:3001/persons";

const getAll = () => 
  axios
    .get(url)
    .then(response => response.data);


const create = (newPerson) => 
  axios
    .post(url, newPerson)
    .then(response => response.data)


export default { getAll, create}
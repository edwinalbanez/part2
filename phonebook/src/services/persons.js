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

const deleteById = (id) => 
  axios
    .delete(`${url}/${id}`)
    .then(response => response.data)

const update = (id, newPerson) => 
  axios
    .put(`${url}/${id}`, newPerson)
    .then(response => response.data)

export default { getAll, create, deleteById, update}
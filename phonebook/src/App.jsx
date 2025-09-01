import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons"

const App = () => {
  
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => setPersons(response.data))
  }, [])
  
  const personsToShow = filter === ""
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter));
  
  const handleChangeFilter = ({target}) => setFilter(target.value.toLowerCase());

  const handlerSubmit = (event) => {
    event.preventDefault();

    if (newName.trim() === "" || newNumber.trim() === "") {
      window.alert("Complete all fields");
      return
    }

    const repeatedPerson = persons.some(person => person.name.toLowerCase() === newName.toLowerCase())

    if (repeatedPerson) {
      window.alert(`${newName} is already in your contacts`);
      return;
    }

    setPersons(persons.concat({name: newName, number: newNumber, id: persons.length + 1}));
    setNewName("");
    setNewNumber("");
  }

  return (
    <div>
      <h1>Phonebook</h1>

      <Filter 
        filter={filter}
        onChange={handleChangeFilter}
      />

      <PersonForm
        onSubmit={handlerSubmit} 
        name={newName}
        number={newNumber}
        onChangeName={({target}) => setNewName(target.value)}
        onChangeNumber={({target}) => setNewNumber(target.value)}
      />

      <Persons persons={personsToShow}/>
    </div>
  );
};

export default App;

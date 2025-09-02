import { useState, useEffect } from "react";
import personService from "./services/persons"
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons"

const App = () => {
  
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])
  
  const personsToShow = filter === ""
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter));
  
  const handleFilterChange = ({target}) => setFilter(target.value.toLowerCase());

  const handleDeletePerson = (id) => {
    setPersons(persons.filter(person => person.id !== id))
  }

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

    personService
      .create({name: newName, number: newNumber})
      .then(newPerson => {
        setPersons(persons.concat(newPerson))
        setNewName("");
        setNewNumber("");
      })
  }

  return (
    <div>
      <h1>Phonebook</h1>

      <Filter 
        filter={filter}
        onChange={handleFilterChange}
      />

      <PersonForm
        onSubmit={handlerSubmit} 
        name={newName}
        number={newNumber}
        onChangeName={({target}) => setNewName(target.value)}
        onChangeNumber={({target}) => setNewNumber(target.value)}
      />

      <Persons 
        persons={personsToShow} 
        onDelete={handleDeletePerson} />
    </div>
  );
};

export default App;

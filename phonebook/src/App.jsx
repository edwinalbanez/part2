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

    const someEmptyField = newName.trim() === "" || newNumber.trim() === "";

    if (someEmptyField) {
      window.alert("Complete all fields");
      return
    }

    const repeatedPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())

    if (repeatedPerson) {
      const confirmUpdate = window.confirm(
        `${newName} is already in your contacts, update the number?`
      );
      
      if (!confirmUpdate) {
        return;
      }
      
      personService
        .update(repeatedPerson.id, {...repeatedPerson, number: newNumber})
        .then(updatedPerson => {
          setPersons(
            persons.map(person => person.id === updatedPerson.id ? updatedPerson : person)
          )
          window.alert(`${updatedPerson.name} has a new number`);
        })

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

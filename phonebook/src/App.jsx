import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons"

const App = () => {
  
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

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

import { useState } from "react";

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
  
  const handlerOnSubmit = (event) => {
    event.preventDefault();

    if (newName.trim() === "" || newNumber.trim() === "") {
      window.alert("Complete all fields");
      return
    }

    const repitedPerson = persons.some(person => person.name.toLowerCase() === newName.toLowerCase())

    if (repitedPerson) {
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

      <div>
        Filter shown with: {" "}
        <input type="text" value={filter} onChange={({target}) => setFilter(target.value.toLowerCase())} />
      </div>

      <h2>Add a new</h2>
      <form onSubmit={handlerOnSubmit}>
        <div>
          Name: {" "}
          <input 
            value={newName} 
            onChange={({target}) => setNewName(target.value)}  
          />
        </div>
        <div>
          Number: {" "}
          <input 
            value={newNumber} 
            onChange={({target}) => setNewNumber(target.value)}  
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <Contacts persons={personsToShow}/>
    </div>
  );
};


const Contacts = ({persons}) => {

  return(
    <>
      <h2>Numbers</h2>

      {persons.map(person => 
        <p key={person.id}> 
          {person.name} {person.number}
        </p>
      )}
    </>
  )
}

export default App;

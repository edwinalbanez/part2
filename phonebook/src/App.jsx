import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: "040-1234567" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

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
    setPersons(persons.concat({name: newName, number: newNumber}));
  }

  return (
    <div>
      <h2>Phonebook</h2>
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

      <Contacts persons={persons}/>
    </div>
  );
};

const Contacts = ({persons}) => {
  return(
    <>
      <h2>Numbers</h2>

      {persons.map(person => 
        <p key={person.name}> 
          {person.name} {person.number}
        </p>
      )}
    </>
  )
}

export default App;

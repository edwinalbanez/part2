import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handlerOnSubmit = (event) => {
    event.preventDefault();

    if (newName.trim() === "") {
      window.alert("The name is empty");
      return
    }
    setPersons(persons.concat({name: newName}));
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handlerOnSubmit}>
        <div>
          name: <input value={newName} onChange={({target}) => setNewName(target.value)}  />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <Contacts numbers={persons}/>
    </div>
  );
};

const Contacts = ({numbers}) => {
  return(
    <>
      <h2>Numbers</h2>
      {numbers.map(number => 
        <p key={number.name}> {number.name} </p>
      )}
    </>
  )
}

export default App;

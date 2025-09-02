import personService from "../services/persons";

const Persons = ({ persons, onDelete }) => {
  return (
    <>
      <h2>Numbers</h2>

      {persons.map((person) => 
        <Contact 
          key={person.id} 
          person={person}
          onDelete={() => onDelete(person.id)}
        />
      )}
    </>
  );
};

const Contact = ({person, onDelete}) => {

  const handleClick = (id) => {
    const confirmDelete = window.confirm(`Delete ${person.name}?`);

    if (!confirmDelete) {
      return;
    }

    personService
      .deleteById(id)
      .then(deletedPerson => {
        onDelete();
        window.alert(`${deletedPerson.name} was deleted`);
      })
  }

  return(
    <p>
      {person.name} {person.number}
      <button onClick={() => handleClick(person.id)}>Delete</button>
    </p>
  )
}

export default Persons

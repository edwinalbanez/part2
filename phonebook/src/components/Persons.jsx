const Persons = ({ persons }) => {
  return (
    <>
      <h2>Numbers</h2>

      {persons.map((person) => 
        <Contact key={person.id} person={person}/>
      )}
    </>
  );
};

const Contact = ({person}) => {
  return(
    <p>
      {person.name} {person.number}
    </p>
  )
}

export default Persons

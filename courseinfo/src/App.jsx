const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4
      }
    ],
  };

  return (
    <Course course={course}/>
  );
};

export default App;

const Course = ({course}) => {
  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

const Header = ({ title }) => <h1>{title}</h1>;

const Content = ({ parts }) => (
  <>
    {parts.map(part =>   
      <Part key={part.id} part={part} />
    )}
  </>
);

const Part = ({part}) => <p>{part.name} {part.exercises} </p>;

const Total = ({ parts }) => (
  <h4>
    Total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises
  </h4>
);
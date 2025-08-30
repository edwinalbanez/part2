const Course = ({course}) => {
  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <hr />
    </div>
  );
}

export default Course

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

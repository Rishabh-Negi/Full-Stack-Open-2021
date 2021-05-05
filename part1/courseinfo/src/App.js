import React from 'react'

const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  );
}
const Parts = (props) => {
  return (
    <p>
      {props.title} {props.exercises}
    </p>
  );
}
const Content = (props) => {
  return (
    <p>
      <Parts title={props.parts[0].title} exercises={props.parts[0].exercises} />
      <Parts title={props.parts[1].title} exercises={props.parts[1].exercises} />
      <Parts title={props.parts[2].title} exercises={props.parts[2].exercises} />
    </p>
  );
}
const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {
        props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises
      }
    </p>
  );
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      title: 'Fundamentals of React',
      exercises: 10,
    },
    {
      title: 'Using props to pass data',
      exercises: 7,
    },
    {
      title: 'State of a component',
      exercises: 14,
    }
  ];

  return (
    <div>
      <Header course = {course} />
      <Content parts = {parts} />
      <Total parts = {parts} />
    </div>
  )
}

export default App
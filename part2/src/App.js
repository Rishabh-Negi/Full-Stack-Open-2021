import React from 'react'

const Content = ({ parts }) => {
  let count = 0;
  parts.forEach(element => {
    count += element.exercises;
  });
  return (
    <div>
      {
        parts.map((e) => <p key={e['id']} > {e['name']} {e['exercises']}</p>)
      }
      <h4>total of {count} exercises</h4>
    </div >
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <h1>{course['name']}</h1>
      <Content parts={course['parts']} />
    </div >
  );
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App;
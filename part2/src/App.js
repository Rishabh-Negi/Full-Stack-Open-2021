import React from 'react'

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((e) => <p key={e['id']} > {e['name']} {e['exercises']}</p>)
      }
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
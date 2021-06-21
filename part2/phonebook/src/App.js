import React, { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleChange = (event) => {
    console.log(event.target);
    setNewName(event.target.value)
  }

  const addNumber = (event) => {
    event.preventDefault();
    console.log(event.target);

    const newContact = {
      name: newName,
    }
    setPersons(persons.concat(newContact))
    setNewName('')
  }

  return (
    <div>
      {/* <div>debug: {newName}</div>
      <div>debug: {persons.map((e) => <li>{e.name}</li>)}</div> */}
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((e, i) => <div key={e.name + i}>{e.name}</div>)}
    </div>
  )
}

export default App

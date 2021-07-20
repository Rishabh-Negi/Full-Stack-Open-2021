import React, { useState, useEffect } from 'react'
import Filter from './components/filter'
import PersonForm from './components/form'
import Persons from './components/person'
import service from './service/persons'
import Message from './components/message'


const App = () => {
  const [persons, setPersons] = useState([])
  const [message, setMessage] = useState('')

  const hooks = () => {
    service.getAll()
      .then((response) => {
        console.log(response)
        setPersons(response)
      })
      .catch(error => console.log(error))
  }
  useEffect(hooks, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Message message={message} />
      <Filter persons={persons} />

      <h3>Add a new</h3>

      <PersonForm persons={persons} setPersons={setPersons} setMessage={setMessage} />

      <h3>Numbers</h3>

      <Persons persons={persons} setPersons={setPersons} />
    </div>
  )
}

export default App

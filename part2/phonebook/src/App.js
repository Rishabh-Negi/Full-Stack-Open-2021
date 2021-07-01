import React, { useState, useEffect } from 'react'
import Filter from './components/filter'
import PersonForm from './components/form'
import Persons from './components/person'
import axios from 'axios'



const App = () => {
  const [persons, setPersons] = useState([])

  const hooks = () => {
    console.log('api call')
    axios.get('http://localhost:3001/persons').then((response) => {
      console.log(response.data)
      setPersons(response.data)
    })
  }
  useEffect(hooks, [])

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter persons={persons} />

      <h3>Add a new</h3>

      <PersonForm persons={persons} setPersons={setPersons} />

      <h3>Numbers</h3>

      <Persons persons={persons} />
    </div>
  )
}

export default App

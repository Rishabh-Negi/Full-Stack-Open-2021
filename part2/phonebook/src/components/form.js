import React, { useState } from 'react'
import axios from 'axios'

const PersonForm = ({ persons, setPersons }) => {

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        console.log(event.target.value);
        setNewNumber(event.target.value)
    }

    const addNumber = (event) => {
        event.preventDefault()
        var exists = false;
        persons.forEach(function (e) {
            if (e['name'].toLowerCase() === newName.toLowerCase()) {
                exists = true
            }
        })

        if (!exists) {
            const newContact = {
                name: newName,
                number: newNumber
            }
            axios.post('http://localhost:3001/persons', newContact).then(
                response =>
                    setPersons(persons.concat(response.data))
            )
            console.log(persons[persons.length - 1])
        } else {
            alert(newName + ' is already added to phonebook')
        }
        setNewName('')
        setNewNumber('')
    }

    return (
        <div>
            <form onSubmit={addNumber}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleNumberChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm
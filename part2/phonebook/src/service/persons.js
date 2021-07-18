import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const req = axios.get(baseUrl)
    return req.then(response => response.data)
}

const addContact = newContact => {
    const req = axios.post(baseUrl, newContact)
    return req.then(response => response.data)
}

const service = {
    getAll,
    addContact
}

export default service
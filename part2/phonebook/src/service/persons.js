import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const req = axios.get(baseUrl)
    return req.then(response => response.data)
}

const addContact = newContact => {
    const req = axios.post(baseUrl, newContact)
    return req
}

const removeContact = id => {
    // console.log(`${baseUrl}/1`)
    const req = axios.delete(`${baseUrl}/${id}`)
    return req.then(response => response)

}

const service = {
    getAll,
    addContact,
    removeContact
}

export default service
import React, { useEffect } from "react"
import axios from 'axios'

function App() {


  useEffect(() => {
    console.log('api call')
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      console.log(response.data)
    })
  })

  return (
    <div>

    </div>
  );
}

export default App;

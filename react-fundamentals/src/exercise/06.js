// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import { useState } from 'react'

function UsernameForm({ onSubmitUsername }) {
  const [username, setUsername] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmitUsername(username)
  }

  const handleChange = (event) => {
    event.preventDefault()
    setUsername(event.target.value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input onChange={handleChange} value={username} id="usernameInput" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App

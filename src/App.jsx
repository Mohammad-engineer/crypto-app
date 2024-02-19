import { useState } from 'react'
import HomePage from './components/templates/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HomePage />
     <h1>crypto app</h1>
    </>
  )
}

export default App

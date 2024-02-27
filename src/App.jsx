import { useState } from 'react'
import HomePage from './components/templates/HomePage'
import Layout from './layout/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <HomePage />
    </Layout>
  )
}

export default App

import { useState } from 'react'
import Jobfeed from './components/Jobfeed'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Jobfeed/>
    </>
  )
}

export default App

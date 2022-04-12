import { useState } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Navbar from "./Navbar"
import CartContainer from "./CartContainer"
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <CartContainer />
    </div>
  )
}

export default App

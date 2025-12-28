import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Github tutorial</h1>
      <h2>changes by vishal</h2>
      


      <h4>changes by aryan</h4>

      <p> top 3 actors : </p>
      <ul>
        <li> john cena </li>
        <li> sunny deol </li>
        <li> iliana </li>
      </ul>


      <h4>changes by vishal</h4>
      <p> top 3 singers : </p>
      <ul>
        <li> john sachdeva </li>
        <li> sunny singh </li>
        <li> honny kakkar </li>
      </ul>


    </>
  )
}

export default App

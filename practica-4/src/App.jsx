import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  
  const [edad,setEdad]=useState(0)

  function incrementar(){
    setEdad(edad + 1)
  }

  function disminuir(){
    setEdad(edad - 1)
  }

  return (
    <div className="App">
     <h1>Ejercicio 4</h1>
     <h2>Edad de la persona</h2>
     <h5>Edad de la persona: {edad}</h5>
     <button onClick={incrementar}>Incrementar</button>
     <button onClick={disminuir}>Disminuir</button>
     {edad>=18 ? <h3 className='mayor'>Es mayor de edad</h3> : <h3 className='menor'>Es menor de edad</h3>}
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  

  const btn1=()=>{
    alert('El boton 1')
  }

  const btn2=()=>{
    alert('El boton 2')
  }

  const btn3=()=>{
    alert('El boton 3')
  }


  return (
    <div className="App">
     <h1>Ejercicio 3</h1>
     <button onClick={btn1}>Boton 1</button>
     <button onClick={btn2}>Boton 2</button>
     <button onClick={btn3}>Boton 3</button>
    </div>
  )
}

export default App

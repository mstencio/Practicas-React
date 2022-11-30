import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
 
function saludar(){
  alert('Un Saludo Desde React')
}
  return (
    <div className="App">
     <h1>Ejercicio 2</h1>
     <button onClick={saludar}>Saludar</button>
    </div>
  )
}

export default App

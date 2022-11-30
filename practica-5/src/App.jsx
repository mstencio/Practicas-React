import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
 
  let dias=["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

  return (
    <div className="App">
     <h1>Ejercicio 5</h1>
     <h2>Dias de la semana</h2>
     {dias.map((nombre)=>(<h4>Dia: {nombre}</h4>))}
    </div>
  )
}

export default App

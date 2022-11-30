import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const[mascota,setMascota]=useState("");
  const[dueño,setDueño]=useState("");
 
    function cambiarMascota(e){
        setMascota(e.target.value)
    }

    function cambiarDueño(e){
        setDueño(e.target.value)
    }
    
    function agregarCita(e){
      e.preventDefault()
      setMascota("")
      setDueño("")
      alert("email: "+ mascota + " /  Name: "+ dueño)    
     
     
    }

  return (
    <div>
         <div className="container-fluid">
        <div className="row"id='contenedor'>
            <div className='col bg-'>
              <h1 className='text-center' id='rc'>Ejercicio 6</h1>
              <div className="col-lg-6 m-5 ">
                  <form id='form' className='bg- ' onSubmit={agregarCita} >
                      <div className="mb-3 mt-3">
                        <label className="form-label">Email:</label>
                        <input value={mascota} onChange={cambiarMascota} type="email" className="form-control" id="mascota"/>
                      </div>
                      <div className="mb-3">
                        <label  className="form-label">Name:</label>
                        <input value={dueño} onChange={cambiarDueño} type="text" className="form-control" id="dueño"/>
                      </div>
                     
                        <input id='btn' className='mb-3 btn' type="submit" value={"Enviar"} />
                    </form>
                    
                    <hr/>
              </div>
            </div>
            
        </div>  
      </div> 
    </div>
  )
}



export default App

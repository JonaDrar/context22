import { useState } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export const RegisterForm = () => {

  const navegar = useNavigate()

  const initalRegisterData = {
    nombreCompleto: '',
    correo: '',
    contrasena: '',
    rut: ''
  }

  const [registerData, setRegisterData] = useState(initalRegisterData)

  const onChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    })
  } 

  const onSubmit = async (e) => {
    e.preventDefault()
    const urlBackend = import.meta.env.VITE_URL_BACKEND
   try {
    
    const respuesta = await axios.post(`${urlBackend}/users/register`, registerData)
    console.log(respuesta)
    //TODO: Manejar los datos respondidos desde el backend (token)
    alert('Registro exitoso')
    setRegisterData(initalRegisterData) 
    navegar('/')

   } catch (error) {
    alert('Registro fallido')
    console.log(error)
   }
  }
 
  return (
    <form onSubmit={onSubmit}> 

      <input 
        type="text" 
        placeholder="Nombre Completo" 
        value={registerData.nombreCompleto}
        name="nombreCompleto"
        onChange={onChange}
      /> {/**nombreCompleto */}

      <input 
        type="email" 
        placeholder="Email" 
        value={registerData.correo}
        name="correo"
        onChange={onChange}
      /> {/**correo */}

      <input 
        type="password" 
        placeholder="Password" 
        value={registerData.contrasena}
        name="contrasena"
        onChange={onChange}
      />{/**contraseña */}

      <input 
        type="text" 
        placeholder="Rut" 
        value={registerData.rut}
        name="rut"
        onChange={onChange}
      /> {/**rut */}


      <button type="submit">Registro</button>

    </form>
  )
}

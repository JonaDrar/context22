/* eslint-disable react/prop-types */

// import { useState } from "react";
import { useReducer } from "react";
import { UserContext } from "./UserContext";
import { UserReducer } from "./UserReducer";

export const UserProvider = ({children}) => {
  //useState
  // const [saludo, setSaludo] = useState('hola')

  const initialStateReducer = {
    isAuthenticated: true,
    user: {
      nombre: 'initial',
      correo: 'initial@state.com',
      rol: ['admin']
    }
  }

  //useReducer
  const [state, dispatch] = useReducer(UserReducer, initialStateReducer)

  return(
    <UserContext.Provider value={{
        nombreUsuario: state?.nombre,
        correoUsuario: state?.correo,
        state,
        dispatch
      }}>
      {children}
    </UserContext.Provider>
  )
}

import { useContext } from "react"
import { UserContext } from "../context/user/UserContext"
import { CartContext } from "../context/cart/CartContext"


const nuevoUsuario = {
  nombre: 'nuevoUsuario',
  correo: 'nuevo@usuario.com'
}

export const HomePage = () => {

  const {nombreUsuario, correoUsuario, state, dispatch} = useContext(UserContext)

  const {vaciarCarrito, state: stateCarrito} = useContext(CartContext)

  const establecerNuevoUsuario = () => {
    dispatch({
      type: 'LOGIN',
      payload: nuevoUsuario
    })
  }

  const cerrarSesion = () => {
    dispatch({
      type: 'LOGOUT'
    })
  }
 
  return (
    <>
      <h1>HomePage</h1>
      <h2>Productos en el carrito: {stateCarrito.cantidad}</h2>
      { 
        (!state) 
        ? <h3>No hay usuario</h3> 
        : <h3>Hola de nuevo!</h3>
      }
      <p>{JSON.stringify(nombreUsuario)}</p>
      <p>{JSON.stringify(correoUsuario)}</p>
      <p>{JSON.stringify(state)}</p>

      <button onClick={establecerNuevoUsuario}>Cambiar usuario</button>
      <button onClick={cerrarSesion}>Cerrar sesión</button>
      <button onClick={vaciarCarrito}>Vaciar carrito</button>
    </>
  )
}

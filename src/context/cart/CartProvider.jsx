/* eslint-disable react/prop-types */
import { useReducer } from "react"
import { CartContext } from "./CartContext"
import { CartReducer } from "./CartReducer"

export const CartProvider = ({children}) => {

  const initialState = {
    cantidad: 0
  }

  // const [carrito, setCarrito] = useState(initialState)
  const [state, dispatch] = useReducer(CartReducer, initialState)

  const agregarProducto = () => {
    // setCarrito({...carrito, cantidad: carrito.cantidad + 1 })
    dispatch({
      type: 'AGREGAR'
    })
  }

  const restarProducto = () => {
    // setCarrito({...carrito, cantidad: carrito.cantidad - 1 })
    dispatch({
      type: 'RESTAR'
    })
  }

  const vaciarCarrito = () => {
    dispatch({
      type: 'VACIAR'
    })
  }

  return (
    <CartContext.Provider
      value={{
        state,
        agregarProducto,
        restarProducto,
        vaciarCarrito
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

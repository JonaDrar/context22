import { useContext } from "react"
import { CartContext } from "../context/cart/CartContext"

export const CartPage = () => {

  const {state, agregarProducto, restarProducto} = useContext(CartContext)

  return (
    <>
      <h2>Carrito de compras</h2>
      <h4>Cantidad de productos en el carrito:  {state.cantidad}</h4>
      <button onClick={agregarProducto}>Agregar producto</button>
      <button onClick={restarProducto}>Quitar producto</button>
    </>
  )
}

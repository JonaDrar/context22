import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
   <header>
    <nav>
      <h2>
       <NavLink to='/'>
       LOGO
       </NavLink>
      </h2>
      <ul>
        <li>
          <NavLink to="/auth">
            registro/inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            perfil
          </NavLink>
        </li>
        <li>
          <NavLink to="/saludo">
            cambiar saludo
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            Carrito
          </NavLink>
        </li>
      </ul>
    </nav>
   </header>
  )
}

/* eslint-disable react/prop-types */
const respuestaDesdeElBackendSimulada = {
  nombre: 'Diego',
  correo: 'diego@pizarro.com'
}

export const LoginForm = ({setUserState}) => {

  const onSubmit = (e) => {
    e.preventDefault()
    // const respuesta = axios.post('/login', loginState)
    // const {data} = repuesta
    setUserState(respuestaDesdeElBackendSimulada)
  }

  return (
    <form onSubmit={onSubmit}> 
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  )
}

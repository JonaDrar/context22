import { useContext, useState } from "react"
import { UserContext } from "../context/user/UserContext"

export const CambioSaludoPage = () => {

  const {setSaludo} = useContext(UserContext)

  const [saludoStateInput, setSaludoStateInput] = useState('') 

  const handleSubmit = (e) => {
    e.preventDefault()
    setSaludo(saludoStateInput)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cambiar saludo</h2>
      <input type="text" value={saludoStateInput} onChange={(e) => setSaludoStateInput(e.target.value)}/>
      <button type="submit">Cambio</button>
    </form>
  )
}

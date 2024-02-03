/* eslint-disable react/prop-types */

import { useContext } from "react"
import { UserContext } from "../context/user/UserContext"

export const ProfilePage = ({userState}) => {

  const {saludo} = useContext(UserContext)

  return (
    <div>
      <h1>Profile Page</h1>
      <p>{saludo}</p>
    </div>
  )
}

/* eslint-disable react/prop-types */
import { LoginForm } from "../components/LoginForm"


export const AuthPage = ({setUserState}) => {
  return (
    <div>
      <h1>Auth Page</h1>

      <LoginForm setUserState={setUserState}/>
    </div>
  )
}

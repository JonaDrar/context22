/* eslint-disable react/prop-types */
import { LoginForm } from "../components/LoginForm"
import { RegisterForm } from "../components/RegisterForm"


export const AuthPage = ({setUserState}) => {
  return (
    <div>
      <h1>Auth Page</h1>

      <LoginForm setUserState={setUserState}/>
      <RegisterForm />
    </div>
  )
}

/* eslint-disable react/prop-types */
import { Route, Routes } from "react-router-dom";
import { AuthPage } from "../pages/AuthPage";
import { ProfilePage } from "../pages/ProfilePage";
import { HomePage } from "../pages/HomePage";
import { CambioSaludoPage } from "../pages/CambioSaludoPage";
import { CartPage } from "../pages/CartPage";

export const MainRouter = ({setUserState, userState}) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage setUserState={setUserState}/>} />
      <Route path="/profile" element={<ProfilePage userState={userState} />} />
      <Route path="/saludo" element={<CambioSaludoPage />} />
      <Route path="/cart" element={<CartPage />} />

    </Routes>
  )
}
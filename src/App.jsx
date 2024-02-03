import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { MainRouter } from './router/MainRouter'

function App() {

  const [userState, setUserState] = useState(null)

  return (
    <>
     <Navbar />
     <MainRouter setUserState={setUserState} userState={userState}/>
    </>
  )
}

export default App

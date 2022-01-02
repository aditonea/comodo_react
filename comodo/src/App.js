import React, { useState } from "react";
import Dashboard from "./pages/dashboard";
import LoginPage from "./pages/loginPage";

export default function App() {
  const [isLogged, setIsLogged] = useState(true)

  function log(e) {
    if (e.target.dataset.log == "signOut") {
      setIsLogged(false)
    } else {
      setIsLogged(true)
    }
  }


  return (
    <>
      {
        isLogged ? <Dashboard signOut={log} /> : <LoginPage />
      }
    </>

  )
}
import React from "react"
import { LoginContext } from "context/LoginContext"

import LandingPage from "components/LandingPage"
import NotePage from "components/NotePage"
import SEO from "components/SEO"

const Notes = () => {
  const { token } = React.useContext(LoginContext)

  return <>
  <SEO
    title='Mis Notas'
    description='Lista de todas tus notas en donde las puedes crear, editar, borrar y ver!'
  />
    {
      token === null
        ? <LandingPage />
        : <NotePage />
    }
    
  </>
}

export default Notes

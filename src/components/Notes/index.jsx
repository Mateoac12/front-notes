import React from "react"
import { LoginContext } from "context/LoginContext"

import LandingPage from "components/LandingPage"
import NotePage from "components/NotePage"

const Notes = () => {
  const { token } = React.useContext(LoginContext)

  return <>
    {
      token === null
        ? <LandingPage />
        : <NotePage />
    }
    
  </>
}

export default Notes

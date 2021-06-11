import React, { useState } from 'react'

export const LoginContext = React.createContext({ error: 'Not permission' })

const LoginContextProvider = ({ children }) => {
  const tokenStorage = window.localStorage.getItem('token')
  const [token, setToken] = useState(tokenStorage)

  return (
    <LoginContext.Provider value={{token, setToken}}>
      { children }
    </LoginContext.Provider>
  )
}

export default LoginContextProvider

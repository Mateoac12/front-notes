import { useRef, useState } from 'react'

import Toggable from 'components/Toggable'
import handleConnectService from './handleConnectServer'

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLogged, setIsLogged] = useState(JSON.parse(window.localStorage.getItem('username')))
  const forwardRef = useRef()

  const handleChangeUsername = e => setUsername(e.target.value)
  const handleChangePassword = e => setPassword(e.target.value)

  console.log({ isLogged })

  const handleResetInputs = () => {
    setUsername('')
    setPassword('')
  }

  const handleLogin = e => {
    e.preventDefault()
    handleConnectService({ username, password, forwardRef, setIsLogged })
    handleResetInputs()
  }

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('name')
    window.localStorage.removeItem('username')
    forwardRef.current.handleShowModal()
    setIsLogged(null)
  }

  return <>
    {
      !isLogged
        ? <Toggable buttonLabel={'Login'} ref={forwardRef}>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="username..."
              value={username}
              onChange={handleChangeUsername}
            />
            <input
              type="password"
              placeholder="password..."
              value={password}
              onChange={handleChangePassword}
            />
            <button>Login</button>
          </form>
        </Toggable>
        : <Toggable buttonLabel={isLogged} ref={forwardRef}>
          <h1>Hola {isLogged}</h1>
          <button onClick={handleLogout}>Cerrar sesion</button>
        </Toggable>
    }
  </>
}

export default Login
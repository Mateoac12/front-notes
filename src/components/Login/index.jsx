import Toggable from 'components/Toggable'
import React, { useRef, useState } from 'react'
import { LoginService } from 'services/login'

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const forwardRef = useRef()

  const handleChangeUsername = e => setUsername(e.target.value)
  const handleChangePassword = e => setPassword(e.target.value)

  const handleResetInputs = () => {
    setUsername('')
    setPassword('')
  }

  const handleConnectService = () => {
    const credentials = {
      username,
      password
    }

    LoginService({ credentials })
      .then(data => {
        console.log({ data })
        window.localStorage.setItem('token', JSON.stringify(data.token))
        window.localStorage.setItem('name', JSON.stringify(data.name))
        window.localStorage.setItem('username', JSON.stringify(data.username))
      })
      .catch(err => {
        console.log(err.message)
        console.log(err.description)
        console.log(err.name)
      })
  }

  const handleLogin = e => {
    e.preventDefault()
    handleConnectService()
    handleResetInputs()
    forwardRef.current.handleShowModal()
  }

  return <Toggable buttonLabel={'Login'} ref={forwardRef}>
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
}

export default Login
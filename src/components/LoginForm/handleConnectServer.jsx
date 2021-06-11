import { LoginService } from 'services/login'

const handleConnectServer = ({ username, password, forwardRef, setLoggedNickname, setLoginError, setToken }) => {
  const credentials = {
    username,
    password
  }

  LoginService({ credentials })
    .then(data => {
      forwardRef.current.handleShowModal()

      window.localStorage.setItem('token', JSON.stringify(data.token))
      setToken(data.token)

      window.localStorage.setItem('name', JSON.stringify(data.name))

      window.localStorage.setItem('username', JSON.stringify(data.username))
      setLoggedNickname(data.username)
    })
    .catch(() => {
      setLoginError('Usuario o contrasena incorrecta!')
    })
}

export default handleConnectServer

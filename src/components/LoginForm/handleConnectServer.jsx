import { LoginService } from 'services/login'

const handleConnectServer = ({ username, password, forwardRef, setLoggedNickname, setLoginError }) => {
  const credentials = {
    username,
    password
  }

  LoginService({ credentials })
    .then(data => {
      window.localStorage.setItem('token', JSON.stringify(data.token))
      window.localStorage.setItem('name', JSON.stringify(data.name))
      window.localStorage.setItem('username', JSON.stringify(data.username))
      forwardRef.current.handleShowModal()
      setLoggedNickname(data.username)
    })
    .catch(() => {
      setLoginError('Usuario o contrasena incorrecta!')
    })
}

export default handleConnectServer

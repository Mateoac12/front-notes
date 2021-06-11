import { useContext, useRef, useState } from 'react'

import LoginForm from 'components/LoginForm'
import UserInformation from 'components/UserInformation'
import { LoginContext } from 'context/LoginContext'

export const Login = () => {
  const { setToken } = useContext(LoginContext)

  const initialUsername = JSON.parse(window.localStorage.getItem('username'))
  const [loggedNickname, setLoggedNickname] = useState(initialUsername)

  const forwardRef = useRef()

  return <>
    {
      !loggedNickname
        ? <LoginForm
          forwardRef={forwardRef}
          setLoggedNickname={setLoggedNickname}
          setToken={setToken}
        />
        : <UserInformation
          forwardRef={forwardRef}
          setLoggedNickname={setLoggedNickname}
          loggedNickname={loggedNickname}
          setToken={setToken}
        />
    }
  </>
}

export default Login

import { useRef, useState } from 'react'

import LoginForm from 'components/LoginForm'
import UserInformation from 'components/UserInformation'

export const Login = () => {
  const initialUsername = JSON.parse(window.localStorage.getItem('username'))

  const [loggedNickname, setLoggedNickname] = useState(initialUsername)
  const forwardRef = useRef()

  return <>
    {
      !loggedNickname
        ? <LoginForm
          forwardRef={forwardRef}
          setLoggedNickname={setLoggedNickname}
        />
        : <UserInformation
          forwardRef={forwardRef}
          setLoggedNickname={setLoggedNickname}
          loggedNickname={loggedNickname}
        />
    }
  </>
}

export default Login

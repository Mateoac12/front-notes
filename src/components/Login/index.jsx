import { useRef, useState } from 'react'

import LoginForm from 'components/LoginForm'
import UserInformation from 'components/UserInformation'

export const Login = () => {
  const initialUsername = JSON.parse(window.localStorage.getItem('username'))

  const [isLogged, setIsLogged] = useState(initialUsername)
  const forwardRef = useRef()

  return <>
    {
      !isLogged
        ? <LoginForm
          forwardRef={forwardRef}
          setIsLogged={setIsLogged}
        />
        : <UserInformation
          forwardRef={forwardRef}
          setIsLogged={setIsLogged}
          isLogged={isLogged}
        />
    }
  </>
}

export default Login

const { LoginService } = require("services/login")

const useLogin = ({ username, password }) => {
  const credentials = {
    username,
    password
  }
  
  return LoginService({ credentials })
    .then(({ data }) => data)
}

export default useLogin

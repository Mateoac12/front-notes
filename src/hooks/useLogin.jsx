const { LoginService } = require("services/login")

const useLogin = ({ username, password }) => {
  const credentials = {
    username,
    password
  }
  console.log({ credentials })
  return LoginService({ credentials })
    .then(({ data }) => data)
}

export default useLogin

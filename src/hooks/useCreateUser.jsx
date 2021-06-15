import { register } from 'services/register'

const useCreateUser = ({ name, username, password }) => {
  return register({ name, username, password })
    .then((data) => {
      const response = data.response.data || data
      return response
    })
    .catch(err => err)
}

export default useCreateUser

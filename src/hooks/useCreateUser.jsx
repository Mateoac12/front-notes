import { register } from 'services/register'

const useCreateUser = ({ name, username, password }) => {
  return register({ name, username, password })
    .then(({ data }) => data)
    .catch(err => console.error(err))
}

export default useCreateUser

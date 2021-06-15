import axios from "axios"
import { API_URI } from "config/server"

export const register = ({ name, username, password }) => {
  const credentials = {
    username,
    name,
    passwordHash: password
  }

  return axios.post(`${API_URI}/api/users`, credentials)
    .then(user => user)
    .catch(err => err)
}
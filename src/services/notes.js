import axios from "axios"
import { API_URI } from 'config/server'

const getAll = async () => {
  return await axios.get(`${API_URI}/api/notes`)
    .then(({data}) => data)
    .catch(err => console.error(err))
}

const getSingle = async (id) => {
  return await axios.get(`${API_URI}/api/notes/${id}`)
    .then(res => res)
    .catch(err => console.error(err))
}

const create = async (note) => {
  return await axios.post(`${API_URI}/api/notes`, note)
    .then(({ data }) => data)
    .catch(err => console.error(err))
}

const deleteNote = async (id) => {
  return await axios.delete(`${API_URI}/api/notes/${id}`)
    .then(res => res)
    .catch(err => console.error(err))
}

export { getAll, getSingle, create, deleteNote }
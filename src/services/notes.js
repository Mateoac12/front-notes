import axios from "axios"
import { API_URI } from 'config/server'

const config = {
  headers: {
    Authorization: `Bearer ${JSON.parse(window.localStorage.getItem('token'))}`
  }
}

const getAll = async () => {
  return await axios.get(`${API_URI}/api/notes`, config)
    .then(({data}) => data)
    .catch(err => console.error(err))
}

const getSingle = async (id) => {
  return await axios.get(`${API_URI}/api/notes/${id}`, config)
    .then(res => res)
    .catch(err => console.error(err))
}

const create = async (note) => {
  return await axios.post(`${API_URI}/api/notes`, note, config)
    .then(({ data }) => data)
    .catch(err => console.error(err))
}

const deleteNote = async (id) => {
  return await axios.delete(`${API_URI}/api/notes/${id}`, config)
    .then(res => res)
    .catch(err => console.error(err))
}

const editNote = async (id, note) => {
  return await axios.put(`${API_URI}/api/notes/${id}`, note, config)
    .then(res => res)
    .catch(err => console.error(err))
}

export { getAll, getSingle, create, deleteNote, editNote }
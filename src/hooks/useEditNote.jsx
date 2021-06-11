import { editNote } from 'services/notes'

const useEditNote = ({ title, content, important, id } = {}) => {
  const updatedNote = {
    title,
    content,
    important
  }

  return editNote(id, updatedNote)
    .then(({data}) => data)
    .catch(err => console.error(err))
}

export default useEditNote

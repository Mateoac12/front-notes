import { deleteNote } from "services/notes"

const useDeleteNote = ({ id }) => {
  return deleteNote(id)
  .then(data => data)
  .catch(err => console.error(err))
}

export default useDeleteNote

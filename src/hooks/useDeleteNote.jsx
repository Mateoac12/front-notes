import { deleteNote } from "services/notes"

const useDeleteNote = ({ id }) => {
  deleteNote(id)
  .then(console.log)
  .catch(err => console.error(err))
}

export default useDeleteNote

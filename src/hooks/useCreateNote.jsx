import { create } from 'services/notes'

const useCreateNote = ({ title, content, modalRef }) => {
  return create({ title, content })
    .then((data) => {
      modalRef.current.handleOpenModal()
      return data
    })
    .catch(err => console.error(err))
}

export default useCreateNote

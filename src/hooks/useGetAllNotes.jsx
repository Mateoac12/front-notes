import { ContextNotes } from "context/contextNotes"
import { useContext, useEffect } from "react"
import { getAll } from "services/notes"

const useGetAllNotes = () => {
  const {allNotes, setAllNotes} = useContext(ContextNotes)
  console.log({allNotes})
  useEffect(() => {
    getAll()
      .then(setAllNotes)
      .catch(err => console.error(err))
  }, [setAllNotes])
  
  return {
    allNotes,
    setAllNotes
  }
}

export default useGetAllNotes

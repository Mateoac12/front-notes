import CreateNote from 'components/CreateNote'
import React, { useEffect, useState } from 'react'
import { getAll } from 'services/notes'

const ListOfNotes = () => {
  const [listNotes, setListNotes] = useState([])

  // para la primera vez que renderizo mi lista
  useEffect(() => {
    getAll().then(setListNotes)
  }, [])

  // cuando creo nuevas notas desde mi formulario
  const handleUpdateList = (newNotes) =>
    setListNotes(notes => notes.concat(newNotes))

  return <>
    <CreateNote onCreate={handleUpdateList} />
    {
      listNotes.map(({ title, content, name, important }) => (
        <article>
          <p>{title}</p>
          <p>{name}</p>
          <p>{content}</p>
          <p>{important}</p>
        </article>
      ))
    }
  </>
}

export default ListOfNotes
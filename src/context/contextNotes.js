import React, { useState } from 'react'

export const ContextNotes = React.createContext({ error: 'Not permission '})

const ContextNotesProvider = ({ children }) => {
  const [allNotes, setAllNotes] = useState([])

  return (
    <ContextNotes.Provider value={{ allNotes, setAllNotes }}>
      {children}
    </ContextNotes.Provider>
  )
}

export default ContextNotesProvider

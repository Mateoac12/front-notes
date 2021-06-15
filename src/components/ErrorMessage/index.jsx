import React from 'react'
import { Message } from './styles'

export const ErrorMessage = ({ children }) => {
  return <Message>
    {children}
  </Message>
}

export default ErrorMessage

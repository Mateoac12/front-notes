import Login from 'components/Login'
import Logo from 'components/Logo'
import React from 'react'

import { HeaderStyle } from './styles'

const Header = () => {
  return <HeaderStyle>
    <Logo />
    <Login />
  </HeaderStyle>
}

export default Header
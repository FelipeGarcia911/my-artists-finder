import React from 'react'

import { Container } from './styles'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props
  return <Container>{children}</Container>
}

export default Layout

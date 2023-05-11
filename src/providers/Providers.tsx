import React from 'react'
import AppProvider from './AppProvider'

const Providers: React.FC<{}> = ({ children }) => {
  return <AppProvider>{children}</AppProvider>
}

export default Providers

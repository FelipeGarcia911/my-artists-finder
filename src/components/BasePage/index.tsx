import React from 'react'

import Layout from '@/components/Layout'
import Navbar from '@/components/Navbar'
import SEO from '@/components/Common/SEO'

import Providers from '@/providers/Providers'

interface BasePageProps {
  children: React.ReactNode
  title: string
}

const BasePage: React.FC<BasePageProps> = ({ children, title }) => {
  return (
    <Providers>
      <SEO title={title} />
      <Navbar />
      <Layout>{children}</Layout>
    </Providers>
  )
}

export default BasePage

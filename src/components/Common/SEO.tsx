import React from 'react'
import { Helmet } from 'react-helmet'

interface SEOProps {
  title: any
}

const SEO: React.FC<SEOProps> = ({ title = '' }) => {
  const fullTitle = title ? `${title} - Terminal Labs` : `Terminal Labs`
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{fullTitle}</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
  )
}

export default SEO

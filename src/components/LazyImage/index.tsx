import React from 'react'
import { ReactLazyImage } from './styles'

interface LazyImageProps {
  alt?: string
  className?: string
  height?: string
  src: string
  width?: string
}

const LazyImage: React.FC<LazyImageProps> = (props) => (
  <ReactLazyImage {...props} />
)

export default LazyImage

import { LazyLoadImage } from 'react-lazy-load-image-component'

import { styled } from '@/styles/theme'

export const ReactLazyImage = styled(LazyLoadImage)`
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
  width: 100%;
`

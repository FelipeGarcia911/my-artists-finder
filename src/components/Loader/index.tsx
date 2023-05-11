import React from 'react'

import LoaderIcon from '@/images/loader.gif'

import * as S from './styles'

interface LoaderProps {
  children?: React.ReactNode
  className?: string
  loading: boolean
}

const Loader: React.FC<LoaderProps> = (props) => {
  const { children, loading = false, className } = props

  return (
    <S.Container className={className}>
      {loading ? <S.LoaderImg src={LoaderIcon} /> : children}
    </S.Container>
  )
}

export default Loader

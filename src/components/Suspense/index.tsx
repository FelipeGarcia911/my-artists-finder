import React, { Suspense } from 'react'
import Loader from '@/components/Loader'

interface SuspenseComponentProps {
  children: React.ReactNode
}

const SuspenseComponent: React.FC<SuspenseComponentProps> = (props) => {
  const { children } = props

  return <Suspense fallback={<Loader loading={true} />}>{children}</Suspense>
}

export default SuspenseComponent

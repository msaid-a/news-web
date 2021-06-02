import React from 'react'
import ErrorBoundary from '../ErrorBoundary'
import LoadingIndicator from '../Loading'

interface AsyncPageProps {
  page: string
  fallback?: JSX.Element
}

const AsyncPage: React.FC<AsyncPageProps> = props => {
  const Component = React.lazy(() => import(`../../view/${props.page}`))

  const fallback = (
    <LoadingIndicator />
  )

  return (
    <ErrorBoundary>
      <React.Suspense fallback={fallback}>
        <Component />
      </React.Suspense>
    </ErrorBoundary>
  )
}

export default AsyncPage
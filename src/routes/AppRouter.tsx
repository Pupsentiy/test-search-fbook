import { PageLoader } from 'components/ui/PageLoader'
import { Suspense, useCallback } from 'react'
import { Route, Routes, type RouteProps } from 'react-router-dom'
import { routeConfig } from './routeConfig.tsx'

export const AppRouter = () => {
  const renderWithWrapper = useCallback((route: RouteProps) => {
    const element = (
            <Suspense fallback={<PageLoader/>}>
                <div className={'page-wrapper'}>
                    {route.element}
                </div>
            </Suspense>
    )
    return (
            <Route
                key={route.path}
                path={route.path}
                element={element}
            />
    )
  }, [])

  return (
    <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
    </Routes>
  )
}

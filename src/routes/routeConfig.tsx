import { BookDetailsPage } from 'pages/BookDetailsPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { type RouteProps } from 'react-router-dom'

export enum AppRoutes {
  MAIN = 'main',
  BOOK_DETAILS = 'book_details',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.BOOK_DETAILS]: '/book/', // + :id
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },

  [AppRoutes.BOOK_DETAILS]: {
    path: RoutePath.book_details + ':id',
    element: <BookDetailsPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
}

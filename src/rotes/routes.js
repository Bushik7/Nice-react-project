import About from '../pages/About'
import NotFound from '../pages/NotFound'
import PostIdPage from '../pages/PostIdPage'
import Posts from '../pages/Posts'
import Welcome from '../pages/Welcome'

export const privateRoutes = [
  { path: '/about', element: About, exact: true },
  { path: '/*', element: NotFound, exact: true },
  { path: '/posts/:id', element: PostIdPage, exact: true },
  { path: '/posts', element: Posts, exact: true },
  { path: '/', element: Posts, exact: true },
]

export const publicRoutes = [
  { path: '/*', element: NotFound, exact: true },
  { path: '/', element: Welcome, exact: true },
]

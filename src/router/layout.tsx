import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { lazyload } from "./tool"

const Layout = lazy(() => import('../layout/Layout'))
const Main = lazy(() => import('../view/main/main'))
const Home = lazy(() => import('../view/home/home'))
const Article = lazy(() => import('../view/home/article'))

const layout = {
  path: '/',
  element: lazyload(<Layout/>),
  children: [
    {
      path: '/',
      element: <Navigate to='/home'></Navigate>
    },
    {
      path: '',
      title: 'HOME',
      children: [
        {
          path: 'article',
          title: 'ARTICLE',
          element: lazyload(<Article/>),
        },
        {
          path: 'home',
          title: 'HOME',
          element: lazyload(<Home/>),
        }
      ],
    },
    {
      path: 'main',
      title: 'MAIN',
      element: lazyload(<Main/>),
      children: [],
    }
  ]
}

export default layout
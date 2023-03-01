import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { lazyload } from "./tool"

const Layout = lazy(() => import('../layout/Layout'))
const Main = lazy(() => import('../view/main/main'))
const Home = lazy(() => import('../view/home/home'))

const layout = {
  path: '/',
  element: lazyload(<Layout/>),
  children: [
    {
      path: '/',
      element: <Navigate to='/home'></Navigate>
    },
    {
      path: 'home',
      element: lazyload(<Home/>)
    },
    {
      path: 'main',
      element: lazyload(<Main/>)
    }
  ]
}

export default layout
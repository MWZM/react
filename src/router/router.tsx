import { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import Loading from '../components/loading'
import NotFount from '../view/notFount'
import Layout from '../layout/Layout'

const Home = lazy(() => import('../view/home'))
const Login = lazy(() => import('../view/login'))

const route = [
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: 'home',
        element: <Home/>
      }
    ]
  },
  {
    path: '*',
    element: <NotFount/>
  }
]

function Router() {
  return(
    <Suspense fallback={<Loading></Loading>}>
      <RouteList/>
    </Suspense>
  )
}

function RouteList() {
  const element = useRoutes(route)
  return element
}

export default Router
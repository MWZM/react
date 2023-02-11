import { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

const Home = lazy(() => import('../view/home'))
const Login = lazy(() => import('../view/login'))


const route = [
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  }
]

function Router() {
  return(
    <Suspense fallback={<div>loading</div>}>
      <RouteList/>
    </Suspense>
  )
}

function RouteList() {
  const element = useRoutes(route)
  return element
}

export default Router
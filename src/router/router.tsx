/**
 * @lazy 路由懒加载
 * @Suspense 路由看加载进入页面会有延迟，使用组件可优化交互，fallback 属性接受任何在组件加载过程中你想展示的 React 元素
 * @notFound 放在最后用于兜底，当路由不匹配时进入该页面
 * @useRoutes 具体查看 readme
 */

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
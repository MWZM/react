/**
 * @lazy 路由懒加载
 * @Suspense 路由看加载进入页面会有延迟，使用组件可优化交互，fallback 属性接受任何在组件加载过程中你想展示的 React 元素
 * @notFound 放在最后用于兜底，当路由不匹配时进入该页面
 * @useRoutes 具体查看 readme
 * @Navigate 路由重定向
 */

import { lazy } from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import { layout } from './layout'

import { lazyload } from './tool'

const Login = lazy(() => import('../view/login/login'))
const NotFount = lazy(() => import('../view/notFount'))

const route = [
  {
    path: '/login',
    hidden: true,
    title: 'LOGIN',
    element: lazyload(<Login/>)
  },
  {
    path: '/',
    element: <Navigate to='/home'></Navigate>
  },
  layout,
  {
    path: '*',
    title: '404',
    hidden: true,
    element: lazyload(<NotFount/>)
  }
]

function RouteList() {
  const element = useRoutes(route)
  return element
}

export default RouteList

export {
  route
}
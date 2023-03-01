/**
 * @Outlet 路由占位符号 类似 Vue router-view 组件
 */

import { useEffect } from "react"
import { matchRoutes, Outlet, useLocation } from "react-router-dom"
import {route} from '../router/router'

import Sidebar from './Sidebar/Sidebar'
import Nav from './Nav/Nav'

import './style/layout.scss'


function Layout() {
  const location = useLocation()

  useEffect(() => {
    const path = matchRoutes(route, location.pathname)
    console.log(path, 'path')
  }, [location.pathname])

  return(
    <div className="layout">
      <Sidebar></Sidebar>
      <div className="container">
        <Nav />
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
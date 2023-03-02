/**
 * @Outlet 路由占位符号 类似 Vue router-view 组件
 */
import { Outlet } from "react-router-dom"

import Sidebar from './Sidebar/Sidebar'
import Nav from './Nav/Nav'

import './style/layout.scss'


function Layout() {
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
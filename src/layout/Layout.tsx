/**
 * @Outlet 路由占位符号 类似 Vue router-view 组件
 */
import { Outlet } from "react-router-dom"
import Sidebar from './sidebar'

import './style/layout.scss'

function Layout() {
  return(
    <div className="layout">
      <div className="sidebar">
        <Sidebar></Sidebar>
      </div>
      <div className="container">
        <nav>nav</nav>
        <div><Outlet/></div>
      </div>
    </div>
  )
}

export default Layout
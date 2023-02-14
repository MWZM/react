/**
 * @Outlet 路由占位符号 类似 Vue router-view 组件
 */
import { Outlet } from "react-router-dom"

function Layout() {
  return(
    <div>
      layout
      <Outlet/>
    </div>
  )
}

export default Layout
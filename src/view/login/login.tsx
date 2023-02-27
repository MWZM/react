/**
 * @navigate 用于路由跳转，编程式导航
 * BrowserRouter 模式下 
 * 跳转时不想留下路由历史路径可以传递第二个参数 navigate('login', { replace: true })
 * @useSearchParams 用于接收页面跳转携带的参数
 *  用于这种跳转携参方式  navigate('/login?id=1')
 *  接收参数 
 *      const [params] = useSearchParams()
 *      let id = params.get('id')
 * @useParams 用于接收页面跳转携带的参数
 *  用于这种跳转携参方式  navigate('/login/id=1')  需要在路由上进行定义
 *  接收参数 
 *      const params = useParams()
 *      let id = params.id
 */

import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/home', { replace: true })
  }
  return(
    <div>
      login
      <button onClick={goHome}>lllll</button>
    </div>
  )
}

export default Login
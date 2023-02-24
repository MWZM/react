/**
 * @useEffect 可接收两个参数 第一个参数为函数，第二个参数则为依赖项
 * @return 若第一个函数有返回值则 返回值在组件销毁时执行
 */

import { useEffect } from "react"

function Header():JSX.Element {

  let timer:any = null
  let count:number = 0
  
  useEffect(() => {
    timer = setInterval(() => {
      console.log(count++)
    }, 1000)
  }, [])

  // 用于在组件销毁时执行
  useEffect(() => {
    return () => {
      console.log('销毁组件')
      clearInterval(timer)
    }
  }, [])

  return(
    <div>header</div>
  )
}

export { Header }
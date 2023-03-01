import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Header } from "./components/Header"

function Main():JSX.Element {

  const [isShow, setIsShow] = useState<boolean>(true)
  const navigate = useNavigate()

  useEffect(() => {

  }, [])

  const goHome = () => {
    navigate('/home')
  }

  return (
    <div>
      main
      <button onClick={() => { setIsShow(!isShow) }}>llll</button>
      { isShow && <Header /> }
      <button onClick={goHome}>go home</button>
    </div>
  )
}

export default Main
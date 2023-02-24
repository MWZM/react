import { useEffect, useState } from "react"
import { Header } from "./components/Header"

function Main():JSX.Element {

  const [isShow, setIsShow] = useState<boolean>(true)

  useEffect(() => {

  }, [])

  return (
    <div>
      main
      <button onClick={() => { setIsShow(!isShow) }}>llll</button>
      { isShow && <Header /> }
    </div>
  )
}

export default Main
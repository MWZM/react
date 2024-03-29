import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"


function Home():JSX.Element {
  const [params] = useSearchParams()
  const [ date, setDate ] = useState<string>(new Date().toLocaleString())
  
  const navigate = useNavigate()

  useEffect(() => {
    let id:string | null = params.get('id')
    let from:string | null = params.get('from')
    console.log(id, from)
  }, [])

  useEffect(() => {
    setInterval(() => {
      setDate(new Date().toLocaleString())
    }, 1000)
  }, [date])

  const gomain = () => {
    navigate('/main')
  }

  return (
    <div>
      { date }
      <button onClick={gomain}>go main</button>
    </div>
  )
}

export default Home
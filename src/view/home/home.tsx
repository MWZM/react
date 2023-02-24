import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"


function Home():JSX.Element {
  const [params] = useSearchParams()
  const [ date, setDate ] = useState<string>(new Date().toLocaleString())

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

  return (
    <div>
      { date }
    </div>
  )
}

export default Home
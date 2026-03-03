import { useEffect, useState } from "react"
import { makeRequest } from "../api"

const Logo = () => {

  const [logoURL, setLogoURL] = useState(null)

  useEffect(()=> {
    makeRequest("api/system-data")
    .then(data => {
      setLogoURL(data.photos[3].path)
    })
  }, [])
  
  return (
    <a>
      <img className="h-12 m-1 aspect-square" src={`${logoURL}`}/>
    </a>
  )
}

export default Logo
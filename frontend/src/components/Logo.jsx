import { useEffect, useState } from "react"
import { makeRequest } from "../api"
import { Link } from "react-router-dom"

const Logo = () => {

  const [logoURL, setLogoURL] = useState(null)

  useEffect(()=> {
    makeRequest("api/system-data")
    .then(data => {
      setLogoURL(data.photos[3].path)
    })
  }, [])
  
  return (
    <Link to={'/'}> 
      <img className="h-12 m-1 aspect-square" src={`${logoURL}`}/>
    </Link>
  )
}

export default Logo
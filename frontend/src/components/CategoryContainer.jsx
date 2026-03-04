import { useState, useEffect } from "react"
import { makeRequest } from "../api"
import PhotoAlbum from "./PhotoAlbum"

const CategoryContainer = ({categoryName}) => {
  const [albums, addAlbums] = useState([])
  useEffect(()=> {
    makeRequest(`api/groups?category=${categoryName}`)
    .then(data=> {
      addAlbums(data)
    })
    .catch(err=> {
      console.error("Error:", err)
    })
  }, [])

  return (
    <div className="flex flex-wrap justify-center w-full h-fit">
      <div className="w-full text-3xl px-20 py-3">{categoryName.toUpperCase()}</div>
      {albums.map((album, i)=> <PhotoAlbum key = {i} albumData = {album}/>)}
    </div>
  );
};

export default CategoryContainer
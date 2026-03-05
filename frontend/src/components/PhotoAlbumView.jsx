import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { makeRequest } from "../api";
import PhotoDisplay from "./PhotoDisplay";

const PhotoAlbumView = () => {

  const [searchParams] = useSearchParams()
  const albumName = searchParams.get("name")
  const [groupDisplay, addGroupDisplay] = useState(null)
  const [photoDisplay, togglePhotoDisplay] = useState(false)
  const [photoId, updatePhotoId] = useState(null)

  useEffect(()=> {
    makeRequest(`api/singlegroup?group=${albumName}`)
    .then(data=> {
      addGroupDisplay(data)
    })
    .catch(err=> {
      console.error("Error: ", err)
    })
  }, [albumName])

  const switchPhotoDisplay = (id = null) => {
    togglePhotoDisplay(!photoDisplay)
    id && updatePhotoId(id)
  }

  return (
    <>
      <div className="flex flex-wrap justify-center w-full h-fit">
        {groupDisplay && <div className="w-full text-3xl px-20 py-3">{groupDisplay.name}</div>}
        {groupDisplay && groupDisplay.photos.map((photo, i)=> <img className="h-50 m-4 cursor-pointer brightness-95 hover:brightness-105 duration-120" src={`${photo.path}`} key={i} alt={`photo.alt`} onClick={()=>switchPhotoDisplay(photo.id)}/>)}
      </div>
      {photoDisplay && <PhotoDisplay switchPhoto = {switchPhotoDisplay} currentId = {photoId} photoArray = {groupDisplay.photos} updatePhoto={updatePhotoId} idPhoto={photoId}/>}
    </>
  );
};

export default PhotoAlbumView;
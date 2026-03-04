import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { makeRequest } from "../api";

const PhotoAlbumView = () => {

  const [searchParams] = useSearchParams()
  const albumName = searchParams.get("name")
  const [groupDisplay, addGroupDisplay] = useState(null)
  const [photoDisplay, togglePhotoDisplay] = useState(false)

  useEffect(()=> {
    makeRequest(`api/singlegroup?group=${albumName}`)
    .then(data=> {
      addGroupDisplay(data)
    })
    .catch(err=> {
      console.error("Error: ", err)
    })
  }, [albumName])

  const switchPhotoDisplay = () => {
    togglePhotoDisplay(!photoDisplay)
  }

  return (
    <>
      <div className="flex flex-wrap justify-center w-full h-fit">
        {groupDisplay && <div className="w-full text-3xl px-20 py-3">{groupDisplay.name}</div>}
        {groupDisplay && groupDisplay.photos.map((photo, i)=> <img className="h-50 m-4 cursor-pointer" src={`${photo.path}`} key={i} alt={`photo.alt`} onClick={switchPhotoDisplay}/>)}
      </div>
      {photoDisplay && <div className="w-full h-full absolute top-0 left-0 z-5 bg-gray-900/20 backdrop-blur-md" onClick={switchPhotoDisplay}>
        <div className="w-1/12 h-23 bg-orange"></div>
        <div className="w-10/12 h-23 bg-red"></div>
        <div className="w-1/12 h-23 bg-green"></div>
      </div>}
    </>
  );
};

export default PhotoAlbumView;
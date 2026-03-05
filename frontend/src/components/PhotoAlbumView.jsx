import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { makeRequest } from "../api";
import PhotoDisplay from "./PhotoDisplay";
import { Link } from "react-router-dom";
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

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

  const albumPhoto = useRef()

  useGSAP(()=> {
    if(groupDisplay)
    gsap.from("img", {
      opacity: 0,
      y:30,
      duration: 1,
      stagger:.5,
      ease: "power1.out"
    })
  }, { scope: albumPhoto, dependencies: [groupDisplay] })

  return (
    <>
      <div ref={albumPhoto} className="flex flex-wrap justify-center w-full h-fit">
        {groupDisplay && 
        <div className="w-full h-fit flex px-20">
          <Link to={`/categories`} ><svg className="fill-gray-500 w-14 h-14 cursor-pointer mr-3 duration-85 hover:scale-109 hover:fill-gray-800 active:scale-98" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m452.93 504.32c-1.9688 1.9648-5.1562 1.9648-7.125.0l-99.75-99.75c-1.9688-1.9688-1.9688-5.1562.0-7.125s5.1562-1.9688 7.125.0l99.75 99.75c1.9688 1.9648 1.9688 5.1562.0 7.125z"/><path d="m452.93 296.69c1.9688 1.9688 1.9688 5.1562.0 7.125l-99.75 99.75c-1.9688 1.9648-5.1562 1.9648-7.125.0-1.9688-1.9688-1.9688-5.1602.0-7.125l99.75-99.75c1.9688-1.9688 5.1562-1.9688 7.125.0z"/></g></svg></Link>
          <div className="w-full text-3xl py-3">{groupDisplay.name}</div>
        </div>}
        {groupDisplay && groupDisplay.photos.map((photo, i)=> <img className="h-50 m-4 cursor-pointer brightness-95 hover:brightness-105 duration-120" src={`${photo.path}`} key={i} alt={`photo.alt`} onClick={()=>switchPhotoDisplay(photo.id)}/>)}
      </div>
      {photoDisplay && <PhotoDisplay switchPhoto = {switchPhotoDisplay} currentId = {photoId} photoArray = {groupDisplay.photos} updatePhoto={updatePhotoId} idPhoto={photoId}/>}
    </>
  );
};

export default PhotoAlbumView;
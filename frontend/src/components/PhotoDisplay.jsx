import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useEffect, useRef, useState } from "react"


const PhotoDisplay = ({switchPhoto, photoArray, currentId, idPhoto, updatePhoto}) => {

  let photoIndex = photoArray.findIndex(e=> e.id === currentId)
  let displayPhoto = photoArray[photoIndex]

  const [thumbnails, showThumbnails] = useState(true)
  const [direction, setDirection] = useState(0)

  const nextPhoto = (e=null) => {
    e && e.stopPropagation()
    setDirection(1)
    if(photoArray[(photoArray.length -1)].id !== idPhoto) {
      let nextIndex = (photoArray.findIndex(e=> e.id === idPhoto) +1)
      updatePhoto(idPhoto = photoArray[nextIndex].id)
    } else{
      updatePhoto(photoArray[0].id)
    }
  }

  const mainImage = useRef()

  useGSAP(()=> {
    const startX = direction * 400
    gsap.set(mainImage.current, {opacity: 0, x:startX})
    gsap.to(mainImage.current, {
      opacity: 1,
      x: 0,
      ease:"circ",
      duration: .4,

    })
  }, {dependencies: [idPhoto], scope: mainImage})

  const prevPhoto = (e=null) => {
    e && e.stopPropagation()
    setDirection(-1)
    if(photoArray[0].id !== idPhoto) {
      let prevIndex = (photoArray.findIndex(e=> e.id === idPhoto) -1)
      updatePhoto(idPhoto = photoArray[prevIndex].id)
    } else{
      updatePhoto(idPhoto = photoArray[(photoArray.length -1)].id)
    }
  }

  const handlePhotoClick = (id) => {
    updatePhoto(id)
  }

  const toggleThumbnailDisplay = (e) => {
    e.stopPropagation()
    showThumbnails(!thumbnails)
  }

  useEffect(()=> {
    document.body.style.overflow= "hidden"
    return ()=> {
      document.body.style.overflow= "auto"
    }
  }, [])

  useEffect(()=> {
    const handleKeyDown = (e) => {
      if(e.key === "ArrowRight") {
        nextPhoto()
      } else if(e.key==="ArrowLeft") {
        prevPhoto()
      } else if(e.key==="Escape") {
        switchPhoto()
      } else if(e.key==="ArrowUp") {
        showThumbnails(true)
      } else if(e.key==="ArrowDown") {
        showThumbnails(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [nextPhoto, prevPhoto, switchPhoto, showThumbnails])

  return (
    <div className="w-full h-screen fixed grid grid-cols-16 grid-rows-[1fr_auto] top-0 left-0 z-5 bg-gray-900/65 backdrop-blur-md" onClick={switchPhoto}>
      <div className="col-span-2 flex items-center justify-center">
        <svg className="fill-gray-400 w-15 h-15 cursor-pointer duration-85 hover:scale-120 hover:fill-gray-200 active:scale-98" onClick={(e)=>prevPhoto(e)}  viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m452.93 504.32c-1.9688 1.9648-5.1562 1.9648-7.125.0l-99.75-99.75c-1.9688-1.9688-1.9688-5.1562.0-7.125s5.1562-1.9688 7.125.0l99.75 99.75c1.9688 1.9648 1.9688 5.1562.0 7.125z"/><path d="m452.93 296.69c1.9688 1.9688 1.9688 5.1562.0 7.125l-99.75 99.75c-1.9688 1.9648-5.1562 1.9648-7.125.0-1.9688-1.9688-1.9688-5.1602.0-7.125l99.75-99.75c1.9688-1.9688 5.1562-1.9688 7.125.0z"/></g></svg>
      </div>
      <div className="col-span-12 min-h-0 flex justify-center py-8">
        <img ref={mainImage} key={idPhoto} className="max-w-full max-h-full object-contain cursor-pointer" src={displayPhoto.path} onClick={(e)=>toggleThumbnailDisplay(e)}/>
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <svg className="fill-gray-400 w-15 h-15 cursor-pointer duration-85 hover:scale-120 hover:fill-gray-200 active:scale-98" onClick={(e)=>nextPhoto(e)} viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m346.06 296.69c1.9688-1.9688 5.1602-1.9688 7.125.0l99.75 99.75c1.9688 1.9648 1.9688 5.1562.0 7.125-1.9648 1.9648-5.1562 1.9648-7.125.0l-99.75-99.75c-1.9648-1.9688-1.9648-5.1562.0-7.125z"/><path d="m346.06 504.32c-1.9648-1.9688-1.9648-5.1602.0-7.125l99.75-99.75c1.9688-1.9688 5.1602-1.9688 7.125.0 1.9688 1.9688 1.9688 5.1562.0 7.125l-99.75 99.75c-1.9648 1.9648-5.1562 1.9648-7.125.0z"/></g></svg>
      </div>
      {thumbnails && <div className="col-span-16 h-28 pb-3 flex justify-center items-center mb-4 px-24">
        <div className="bg-gray-300/65 shadow-[0_0_10px_2px_black] max-w-full w-fit h-full flex items-center px-1 rounded overflow-scroll" onClick={(e)=>e.stopPropagation()}>
          {photoArray.map((photo, i)=> i!== photoIndex ? <img className="h-11/12 m-1 cursor-pointer brightness-72 duration-100" key={i} src={photo.path} onClick={(e)=>handlePhotoClick(photo.id)}/>
          : <img className="h-11/12 m-1 cursor-pointer brightness-100 duration-100" key={i} src={photo.path} onClick={(e)=>handlePhotoClick(photo.id)}/>)}
        </div>
      </div>
      }
  </div>
  )
}


export default PhotoDisplay
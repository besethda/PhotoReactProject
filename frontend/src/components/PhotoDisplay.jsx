const PhotoDisplay = ({switchPhoto, photoArray, currentId, idPhoto, updatePhoto}) => {

  let photoIndex = photoArray.findIndex(e=> e.id === currentId)
  let displayPhoto = photoArray[photoIndex]

  const nextPhoto = (e) => {
    e.stopPropagation()
    if(photoArray[(photoArray.length -1)].id !== idPhoto) {
      updatePhoto(idPhoto = idPhoto+1)
    } else{
      updatePhoto(photoArray[0].id)
    }
  }

  const prevPhoto = (e) => {
    e.stopPropagation()
    if(photoArray[0].id !== idPhoto) {
      updatePhoto(idPhoto = idPhoto-1)
    } else{
      updatePhoto(idPhoto = photoArray[(photoArray.length -1)].id)
    }
  }

  const handlePhotoClick = (id) => {
    updatePhoto(id)
  }


  return (
    <div className="w-full h-screen fixed grid grid-cols-14 grid-rows-10 top-0 left-0 z-5 bg-gray-900/65 backdrop-blur-md pb-5" onClick={switchPhoto}>
      <div className="col-span-2 row-span-6 flex items-center justify-center">
        <svg className="fill-gray-400 w-15 h-15 cursor-pointer duration-85 hover:scale-120 hover:fill-gray-200 active:scale-98" onClick={(e)=>prevPhoto(e)}  viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m452.93 504.32c-1.9688 1.9648-5.1562 1.9648-7.125.0l-99.75-99.75c-1.9688-1.9688-1.9688-5.1562.0-7.125s5.1562-1.9688 7.125.0l99.75 99.75c1.9688 1.9648 1.9688 5.1562.0 7.125z"/><path d="m452.93 296.69c1.9688 1.9688 1.9688 5.1562.0 7.125l-99.75 99.75c-1.9688 1.9648-5.1562 1.9648-7.125.0-1.9688-1.9688-1.9688-5.1602.0-7.125l99.75-99.75c1.9688-1.9688 5.1562-1.9688 7.125.0z"/></g></svg>
      </div>
      <div className="col-span-10 row-span-8 max-h-full flex justify-center py-8">
        <img className="max-w-full max-h-full object-contain" src={displayPhoto.path} onClick={(e)=>e.stopPropagation()}/>
      </div>
      <div className="col-span-2 row-span-6 flex items-center justify-center">
        <svg className="fill-gray-400 w-15 h-15 cursor-pointer duration-85 hover:scale-120 hover:fill-gray-200 active:scale-98" onClick={(e)=>nextPhoto(e)} viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m346.06 296.69c1.9688-1.9688 5.1602-1.9688 7.125.0l99.75 99.75c1.9688 1.9648 1.9688 5.1562.0 7.125-1.9648 1.9648-5.1562 1.9648-7.125.0l-99.75-99.75c-1.9648-1.9688-1.9648-5.1562.0-7.125z"/><path d="m346.06 504.32c-1.9648-1.9688-1.9648-5.1602.0-7.125l99.75-99.75c1.9688-1.9688 5.1602-1.9688 7.125.0 1.9688 1.9688 1.9688 5.1562.0 7.125l-99.75 99.75c-1.9648 1.9648-5.1562 1.9648-7.125.0z"/></g></svg>
      </div>
      <div className="col-span-14 row-span-2 pb-10 flex justify-center px-15">
        <div className="bg-gray-300/65 shadow-[0_0_10px_2px_black] max-w-full w-fit h-full flex items-center px-1 rounded overflow-scroll" onClick={(e)=>e.stopPropagation()}>
          {photoArray.map((photo, i)=> i!== photoIndex ? <img className="h-11/12 m-1 cursor-pointer brightness-72 duration-100" key={i} src={photo.path} onClick={(e)=>handlePhotoClick(photo.id)}/>
          : <img className="h-11/12 m-1 cursor-pointer brightness-100 duration-100" key={i} src={photo.path} onClick={(e)=>handlePhotoClick(photo.id)}/>)}
        </div>
      </div>
  </div>
  )
}


export default PhotoDisplay
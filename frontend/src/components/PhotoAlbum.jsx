import { Link } from "react-router-dom"

const PhotoAlbum = ({albumData}) => {
  return (
    <Link to={`/album?name=${albumData.id}`} className="group flex items-center justify-center duration-100 w-56 relative aspect-square cursor-pointer m-4 hover:-translate-y-2">
      <img className="z-3 w-full absolute aspect-square object-cover object-top duration-100 group-hover:scale-105 group-hover:-rotate-3 group-hover:-translate-y-1 group-hover:-translate-x-2 group-hover:blur-[1px] group-hover:brightness-72" src={`${albumData.photos[0].path}`}/>
      <img className="z-2 w-full absolute aspect-square object-cover duration-100 group-hover:scale-105 group-hover:rotate-1 group-hover:blur-[1px] group-hover:brightness-80" src={`${albumData.photos[1].path}`}/>
      <img className="z-1 w-full absolute aspect-square object-cover duration-100 group-hover:scale-105 group-hover:rotate-4 group-hover:translate-y-1 group-hover:translate-x-1 group-hover:blur-[1px] group-hover:brightness-80" src={`${albumData.photos[2].path}`}/>
      <div className="z-4 w-fit h-fit text-white text-xl opacity-0 group-hover:opacity-100">{albumData.name}</div>
    </Link>
  )
}

export default PhotoAlbum
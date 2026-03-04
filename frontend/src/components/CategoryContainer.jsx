import { useState, useEffect } from "react";
import { makeRequest } from "../api";
import PhotoAlbum from "./PhotoAlbum"

const CategoryContainer = ({categoryName}) => {
  
  useEffect(()=> {
    makeRequest(`api/groups?category=${categoryName}`)
    .then(data=> {
      console.log(data)
    })
    .catch(err=> {
      console.error("Error:", err)
    })
  }, [])

  return (
    <div className="flex flex-wrap w-full h-fit">
      <PhotoAlbum />
    </div>
  );
};

export default CategoryContainer;
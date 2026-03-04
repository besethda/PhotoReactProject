import { useState, useEffect } from "react";
import { makeRequest } from "../api";
import CategoryContainer from "./CategoryContainer";

const Container = ({allCategories = true, singleCategoryName = ""}) => {

  const [categories, setCategories] = useState([])

    useEffect(()=> {
      if(allCategories) {
        makeRequest(`api/categories`)
        .then(data => {
          setCategories(data)
        })
        .catch(err => console.error("fetch failed", err))
      } else {
        setCategories([{name: singleCategoryName}])
      }
      }, [])

  return (
    <div className="flex justify-between w-full h-fit">
      {categories.map((name, i)=> <CategoryContainer key = {i} categoryName = {name}/>)}
    </div>
  );
};

export default Container
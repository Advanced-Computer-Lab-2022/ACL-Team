import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import axios from 'axios'
import "../css/search.css"
import CourseCard from '../Cards/courseCard';
export default function Search() {
  const [searchResults,setSearchResult] = useState([])
  const [returnedResults,setReturnedResults] = useState([])
  const [searchedword , setSearchedword] = useState('')  
  const searchMethod = async () => {
    const res = await axios
      .post("http://localhost:3000/course/search", {
        searchedword:searchedword
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    for (let i = 0; i < data.length; i++) {
        searchResults.push(res.data[i].item)
       
    }
    setReturnedResults(searchResults)
    for (let i = 0; i < searchResults.length; i++) {
        searchResults.pop()
       
    }
    console.log(searchResults)
    console.log(returnedResults)

      
    return returnedResults;
  };
  useEffect(() =>{ 
    searchMethod().then((returnedResults) => setSearchResult(returnedResults))
  },[searchedword]);
  return (
    <div>
        <div className="search-wrapper">
            <form>
            <button className="search-btn"><BsSearch/></button>
            <div className="form-group">
                <input 
                type="text" 
                className="form-control" 
                placeholder="searching ...."
                
                onChange={(e) => setSearchedword(e.target.value)}
                value={searchedword}
                />

            </div>
            </form>
        </div>
        {searchResults && searchResults.map((searchResult,i ) =>(
        i<=3 &&
        <CourseCard course={searchResult}/>
        
    ))} 
    </div>
     
  )
}

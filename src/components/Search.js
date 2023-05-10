import React, { useEffect, useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi';
 const Search = ( {setMovies,getAllMovies}) => {
  const [search , setSearch] = useState("");
const onSearch = async(word)=>{
const api = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&query=${word}`)
const res = await api.json();
setMovies(res.results)
}
const handlesearch  = (e)=>{
 setSearch(e.target.value);
 if(e.target.value===""){
  getAllMovies()
 }
}
 return (
    <div className='search'>

    <div className="input-group mb-3"  >
     <input value={search} onChange={handlesearch}  type="text" placeholder='Search For Movies' className="form-control"  />
    <span className="input-group-text"><BiSearchAlt2 onClick={()=>onSearch(search)}/></span>
  </div>
    </div>
  )
}

export default Search
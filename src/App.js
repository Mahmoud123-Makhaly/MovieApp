import React, { useEffect, useState } from 'react'
import Search from './components/Search'
import MovieList from './components/MovieList'
 
const App = () => {
  const [Movies , setMovies] = useState([]);
  
  const API_URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=52ef927bbeb21980cd91386a29403c78&language=en-US "
  const getAllMovies=  async()=>{
      const api = await fetch(API_URL);
      const res = await api.json();
     setMovies(res.results);
   }
  useEffect(()=>{
    getAllMovies()
  } , [])
  return (
    <div className='app'>
  <h2  className='text-center'>MovieLand</h2> 
<div className='container'>
<Search getAllMovies={getAllMovies}   setMovies={setMovies}/>
 
 <MovieList Movies={Movies} setMovies={setMovies} /> 
 
</div>
    </div>
  )
}

export default App
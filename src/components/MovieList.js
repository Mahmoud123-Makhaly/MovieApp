import React, { useEffect, useState } from 'react'
import CardItem from './CardItem';

const MovieList = ({setMovies , Movies}) => {


  return (
    <div className='MovieList'>
<div className='row'>
{
    Movies.length?(
        Movies.map((item)=>{
return(
<div className='col-md-6 col-lg-3' key={item.id}>
<CardItem item = {item}  />
</div>
)
        })
    ):(<h3>No Data Found</h3>)
}
</div>
    </div>
  )
}

export default MovieList
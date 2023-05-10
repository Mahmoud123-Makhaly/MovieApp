import React from 'react'

const CardItem = ({item }) => {
  return (
    <div className='card-item'>
    <div className="card my-2" >

<img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className="card-img-top" alt="..."/>
<div className='overlay'></div>
    <div className="card-body">
<h5 className="card-title">MOVIE</h5>
<p className="card-text">{item.title}</p>
 </div>
</div>
    </div>
  )
}

export default CardItem
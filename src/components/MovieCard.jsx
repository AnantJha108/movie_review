import React from 'react'

const MovieCard = ({item}) => {
    return (
        <div className="mt-3 col-3">
        <div className="card h-100 border-0 shadow-5" >
          <img src={`https://www.themoviedb.org/t/p/w500/${item.poster_path}`} className='w-100 rounded' style={{height:'320px',objectFit:"contained"}} alt="movie" />
          <div className="card-body">
            <h5 className='h6 py-0'>
              {item.poster_path}  {item.original_title}
            </h5>
          </div>
        </div>
      </div>
    )
}

export default MovieCard
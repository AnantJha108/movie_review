import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({movieList}) => {
  return (
    <div className="row">
        {
            movieList.map((item,index)=>(

                <MovieCard key={index} item={item}/>
            ))
        }
    </div>
  )
};

export default MovieList;

import { useEffect, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';

function App() {
  const [isLoading,setIsLoading] = useState(false)
  const API_Key = "16c66b0f7fd3c3447e7067ff07db3197"
  const [movieList,setMovieList] = useState([])
  const [searchData,setSearchData] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log('this is search data',searchData);
  }
  useEffect(()=>{
    if (searchData) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_Key}&query=${searchData}`).then((response) => response.json())
      .then((data) => setMovieList(data.results))
    } else {
      fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_Key}`).then((response) => response.json())
      .then((data) => setMovieList(data.results))
    }
  
  },[searchData])

    console.log('this is movie list',movieList);
  return (
    <div className="contaier-fluid py-5">
      <div className="text-center">
        <h2 className="display-6 text-white">
         Movie <span className='text-danger'>Finder</span>
        </h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-5 mx-auto">
            <form onSubmit={(e)=>handleSubmit(e)}>
              <input type="text" value={searchData} onChange={(e)=>setSearchData(e.target.value)} className='form-control border-0 shadow-0' placeholder='Type movie name'/>
            </form>
          </div>
        </div>
        <MovieList movieList={movieList}/>
      </div>
    </div>
  );
}

export default App;
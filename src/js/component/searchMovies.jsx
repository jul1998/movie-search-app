import React, {useState} from "react";
import MovieCard from "./movieCard.jsx"


export default function SearchMovies(){

    const [queryData, setQueryData] = useState({
        query:"",
    })

    const [movies, setMovies] = useState([])

    const handleChange = (e)=>{
        setQueryData(prevData=> {
            return{
                ...prevData,
                query: e.target.value
            }
        })
    }

 

    const searchMovies = async (e)=>{
        e.preventDefault()


        try{
            const url = `https://api.themoviedb.org/3/search/movie?api_key=b2c0e8f0139bf1650f3dcd321bb96238&language=en-US&query=${queryData.query}&page=1&include_adult=false`;
            let response = await fetch(url)
            let moviesJson = await response.json()
            setMovies(moviesJson.results)
        }catch(err){
            console.log(err)
        }
        console.log(movies)
    }

    const displayMovies = movies.filter(movie =>movie.poster_path !== null).map((filteredMovie,index) =>{
        return (
            <MovieCard filteredMovie={filteredMovie} key={filteredMovie.id}/>
        )
    })

    
    return (
        <div>
            <form className="form" onSubmit={searchMovies} action="">
            <label className="label" htmlFor="query">Movie Name</label>
            <input onChange={handleChange} className="input" name="query" type="text" placeholder="Enter a movie a name i.e Batman" />
            <button className="button" type="submit">Search</button>
            </form>
            
            {displayMovies}
        
        </div>

    )
}
import React from "react";

export default function SearchMovies(){


    const searchMovies = async (e)=>{
        e.preventDefault()
        console.log("submi")

        const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;

        
    }
    
    return (
        <form className="form" onSubmit={searchMovies} action="">
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" name="query" type="text" placeholder="Enter a movie a name i.e Batman" />
            <button className="button" type="submit">Search</button>
        </form>
    )
}
import React, {useState} from "react";

export default function MovieCard({filteredMovie}){

    return(
        <div>
            <div key={filteredMovie.id} className="card">
                <img className="card--image" 
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${filteredMovie.poster_path}`}>
                </img>
                <div className="card--content">
                    <h2 className="card--title">Title: {filteredMovie.title}</h2>
                    <p><small>Release date:{filteredMovie.release_date}</small></p>
                    <p><small>Rating:{filteredMovie.vote_average}</small></p>
                    <p className="card--description">Description: {filteredMovie.overview?filteredMovie.overview:"No description available"}</p>
                </div>
                </div>
        </div>
    )

}
import React from "react";

import SearchMovies from "./searchMovies.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
        <h1 className="title">React Movies Search</h1>
		<SearchMovies/>

      </div>
	);
};

export default Home;

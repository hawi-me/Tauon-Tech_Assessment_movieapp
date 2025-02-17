import React from "react";
import { Route, Routes } from "react-router-dom"; 
import Home from "../pages/Home";
import Movie from "../Movie";
import TVShows from "../components/TvShow";
import TVShowDetails from "../pages/detail/TvshowDetails";
import MovieDetails from "../pages/detail/MovieDetails";
import ListMovies from "../pages/ListMovies";
import ListTVShows from "../pages/ListTvShows";



function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/shows" element={<TVShows/>}/>
        <Route path="/tvshow/:id" element={<TVShowDetails/>} />
        <Route path="/Movies/:id" element={<MovieDetails/>} />

        <Route path="/listmovies" element={<ListMovies/>}/>
        <Route path="/listtvshows" element={<ListTVShows/>}/>


    


    </Routes>
  );
}

export default AppRoutes;

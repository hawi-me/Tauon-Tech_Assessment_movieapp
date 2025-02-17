import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import HeroSlide from '../components/HeroSlide/HeroSlide'
import Movie from '../Movie'
import TVShows from '../components/TvShow'
import SearchBar from '../components/Search/SearchBar'

function Home() {
  const [movies, setMovies] = useState([]);

  return (
    <div>
      <HeroSlide/>      
      <Movie/>
      <TVShows/>
    </div>
  )
}

export default Home

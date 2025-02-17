import React, { useEffect, useState } from "react";

function Movie() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getMovie = async () => {
    try {
      const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=1`;
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  // 🔍 Filter movies dynamically based on search input
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Trending Movies</h1>

      {/* 🔍 Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search movies..."
          className="p-2 rounded-lg w-96 text-black"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* 🎥 Display Filtered Movies */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-80 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold">{movie.title}</h2>
              <p className="text-yellow-400">⭐ {movie.vote_average}/10</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">No movies found...</p>
        )}
      </div>
    </div>
  );
}

export default Movie;

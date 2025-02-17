import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ListTVShows() {
  const [shows, setShows] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  const getTVShows = async (page) => {
    try {
      const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
      const url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&page=${page}`;
      const res = await fetch(url);
      const data = await res.json();

      setShows(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error("Error fetching TV shows:", error);
    }
  };

  useEffect(() => {
    getTVShows(page);
  }, [page]);

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Trending TV Shows</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shows.map((show) => (
          <div 
            key={show.id} 
            className="bg-gray-800 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate(`/tvshow/${show.id}`)}
          >
            <img 
              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} 
              alt={show.name} 
              className="w-full h-80 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{show.name}</h2>
            <p className="text-yellow-400">⭐ {show.vote_average}/10</p>
            <p className="text-sm text-gray-300 mt-2">{show.overview ? show.overview.slice(0, 100) + '...' : 'No overview available.'}</p>
            <p className="text-sm text-gray-400">📅 First Aired: {show.first_air_date || 'Unknown'}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8 gap-4">
        <button 
          className={`px-4 py-2 text-lg rounded-md ${page > 1 ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-500 cursor-not-allowed'}`}
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>

        <span className="text-lg">Page {page} of {totalPages}</span>

        <button 
          className={`px-4 py-2 text-lg rounded-md ${page < totalPages ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-500 cursor-not-allowed'}`}
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ListTVShows;

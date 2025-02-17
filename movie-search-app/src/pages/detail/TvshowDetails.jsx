import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
function TVShowDetails() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const API_KEY  = import.meta.env.VITE_TMDB_API_KEY

        const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`);
        const data = await res.json();
        setShow(data);
      } catch (error) {
        console.error("Error fetching show details:", error);
      }
    };
    fetchShowDetails();
  }, [id]);

  if (!show) {
    return <p className="text-center text-lg text-white">Loading...</p>;
  }

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <button onClick={() => navigate(-1)} className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        ← Back
      </button>
      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <img 
          src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} 
          alt={show.name} 
          className="w-full h-96 object-cover rounded-md mb-4"
        />
        <h1 className="text-3xl font-bold">{show.name}</h1>
        <p className="text-yellow-400 text-lg mt-2">⭐ {show.vote_average}/10</p>
        <p className="text-sm text-gray-400">📅 First Aired: {show.first_air_date}</p>
        <p className="mt-4 text-gray-300">{show.overview}</p>
      </div>
    </div>
  );
}

export default TVShowDetails;

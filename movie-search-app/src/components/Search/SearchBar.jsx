import React, { useState, useEffect } from "react";
import { Search } from "lucide-react"; // Search icon
import { Link } from "react-router-dom";

const API_KEY = "26543c89593ac517e77a46e263437607";
const API_URL = "https://api.themoviedb.org/3/search/movie";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.length > 2) {
      fetchMovies();
    } else {
      setResults([]);
    }
  }, [query, page]);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_URL}?api_key=${API_KEY}&query=${query}&page=${page}`
      );
      const data = await response.json();
      setResults(data.results); // Update search results
      setTotalPages(data.total_pages); // Store total pages for pagination
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
    setLoading(false);
  };

  return (
    <div className="relative w-full max-w-md">
      {/* Search Input */}
      <div className="flex items-center bg-gray-800 rounded-full px-4 py-2">
        <Search className="text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search movies..."
          className="bg-transparent text-white px-3 outline-none w-full"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1); // Reset to first page on new search
          }}
        />
      </div>

      {/* Search Results Dropdown */}
      {results.length > 0 && (
        <div className="absolute left-0 w-full bg-gray-900 mt-2 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {results.map((movie) => (
            <Link
              to={`/movie/${movie.id}`}
              key={movie.id}
              className="block px-4 py-2 text-white hover:bg-gray-700"
              onClick={() => setQuery("")}
            >
              {movie.title}
            </Link>
          ))}

          {/* Pagination Controls */}
          <div className="flex justify-between items-center px-4 py-2 bg-gray-800">
            <button
              disabled={page <= 1}
              className="text-yellow-400 hover:underline disabled:text-gray-600"
              onClick={() => setPage((prev) => prev - 1)}
            >
              Previous
            </button>
            <span className="text-white">Page {page} of {totalPages}</span>
            <button
              disabled={page >= totalPages}
              className="text-yellow-400 hover:underline disabled:text-gray-600"
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Loading Indicator */}
      {loading && <p className="text-yellow-400 mt-2">Loading...</p>}
    </div>
  );
}

export default SearchBar;

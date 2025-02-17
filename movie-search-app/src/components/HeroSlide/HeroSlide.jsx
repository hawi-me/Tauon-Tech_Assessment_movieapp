import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const HeroSlide = () => {
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const API_KEY  = import.meta.env.VITE_TMDB_API_KEY 

      const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=1`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovieItems(data.results.slice(0, 4));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="relative w-full h-[80vh]">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        className="h-full"
      >
        {movieItems.map((item, index) => (
          <SwiperSlide key={index}>
            <HeroSlideItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const HeroSlideItem = ({ item }) => {
  const navigate = useNavigate();
  const background = `https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path}`;

  return (
    <div
      className="relative flex items-center h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Box - Aligned Left */}
      <div className="relative max-w-3xl bg-black/40 p-8 rounded-lg shadow-lg ml-16 text-white">
        <h2 className="text-4xl font-bold">{item.title}</h2>
        <p className="mt-4 text-lg text-gray-300">{item.overview}</p>
        <div className="mt-6 flex gap-4">
          <button
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg transition"
            onClick={() => navigate(`/movie/${item.id}`)}
          >
            Watch Now
          </button>
          <button
            className="px-6 py-3 border border-white text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-white hover:text-black transition"
            onClick={() => navigate(`/movie/${item.id}`)}
          >
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;

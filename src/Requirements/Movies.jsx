import { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import "./Movies.css";
import hey_jawani from '../assets/yeh jwani hai deewani.jpg';
import three from '../assets/Three.jpeg';
import pushpa from '../assets/Pushpa 2.jpg';
import oh from '../assets/oh my kadavulae.jpg';
import mahaan from '../assets/mahaan.jpeg';
import leo from '../assets/leo.webp';

const Movies = () => {
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const movies = [
    { id: 1, title: "Yeh Javaani Hai Dewaani", imgSrc: hey_jawani },
    { id: 2, title: "3", imgSrc: three },
    { id: 3, title: "Pushpa 2", imgSrc: pushpa },
    { id: 4, title: "Oh My Kadavulae", imgSrc: oh },
    { id: 5, title: "Mahaan", imgSrc: mahaan },
    { id: 6, title: "Leo", imgSrc: leo }
  ];
  
  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem('selectedMovies')) || [];
    setSelectedMovies(storedMovies);
  }, []);

  const addToWishList = (movie) => {
    if (!selectedMovies.find((m) => m.id === movie.id)) {
      const updatedMovies = [...selectedMovies, movie];
      setSelectedMovies(updatedMovies);
      localStorage.setItem('selectedMovies', JSON.stringify(updatedMovies));

      setSuccessMessage(`"${movie.title}" successfully added to the wishlist!`);
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="logo">Movie Night Planner</div>

      <section className="movies-list">
        <h1>Available Movies</h1>
        {successMessage && (
          <div className="success-message">
            {successMessage}
          </div>
        )}
        <div className="movie-grid">
          {movies.map((movie) => (
            <div className="movie-item" key={movie.id}>
              <img src={movie.imgSrc} alt={movie.title} />
              <p>{movie.title}</p>
              <button onClick={() => addToWishList(movie)}>Add to WishList</button>
            </div>
          ))}
        </div>
        <button onClick={() => window.location.href = './SelectedMovies'}>Get Started</button>
      </section>
    </div>
  );
};

export default Movies;

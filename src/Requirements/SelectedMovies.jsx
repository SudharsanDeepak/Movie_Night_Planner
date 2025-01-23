import { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import "./SelectedMovies.css";

function SelectedMovies() {
  const [selectedMovies, setSelectedMovies] = useState([]);

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('selectedMovies')) || [];
    setSelectedMovies(movies);
  }, []);

  const removeFromWishList = (movieId) => {
    const updatedMovies = selectedMovies.filter((movie) => movie.id !== movieId);
    setSelectedMovies(updatedMovies); 
    localStorage.setItem('selectedMovies', JSON.stringify(updatedMovies));
  };

  return (
    <div>
      <Navbar />
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Movie Night Planner - Selected Movies</title>
        <link rel="stylesheet" href="SelectedMovies.css" />
      </head>
      <body>
        <header className="navbar">
          <div className="logo">Movie Night Planner</div>
        </header>
        <section className="selection">
          <h1>Your Selected Movies</h1>
          {selectedMovies.length > 0 ? (
            <div className="selection-grid">
              {selectedMovies.map((movie) => (
                <div className="selected-item" key={movie.id}>
                  <img src={movie.imgSrc} alt={movie.title} />
                  <p>{movie.title}</p>
                  <div className="button-group">
                    <button>Vote</button>
                    <button
                      className="remove-button"
                      onClick={() => removeFromWishList(movie.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No movies added to your wishlist yet.</p>
          )}
        </section>
      </body>
    </div>
  );
}

export default SelectedMovies;

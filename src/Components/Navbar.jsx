import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navi = () => {
  return (
    <div>
      <nav id='navbar'>
        <h1>Movie Time!...</h1>
        <ul>
           <Link id="a" to="/SelectedMovies">WishList</Link>
           <Link id="a" to="/Movies">Movies</Link>
           <Link id="a" to="/">Home</Link>

        </ul>
      </nav>
    </div>
  )
}

export default Navi
import React from 'react'
import Navbar from '../Components/Navbar';
import "./Home.css";


const Home = () => {
  return (
    <>
      <Navbar />
      <div lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Movie Night Planner - Home</title>
          <link rel="stylesheet" href="Home.css" />
        </head>
        <body>
          <header className="navbar">
            <div className="logo">Movie Night Planner</div>
          </header>
          <section className="hero">
            <h1>Plan Your Perfect Movie Night</h1>
            <p>Create, vote, and enjoy movie nights with your friends and family.</p>
            <button onClick={() => location.href='./Movies'}>Get Started</button>
          </section>
        </body>
      </div>
    </>
  );
}

export default Home;

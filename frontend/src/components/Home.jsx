import React from 'react';
import '../styles/Home.css';
import '../assets/react.svg'

function Home() {
  return (
    <div className="home">
      <div className="home-left">
        <header className="home-header">
          <h1>Welcome to My Homepage</h1>
        </header>
        <section className="home-content">
          <p>This is a simple home page created with React. Here you can add more information about your website.</p>
        </section>
      </div>
      <div className="home-right">
        <img src='../assets/react.svg' alt="Description of image" className="home-image" />
        {/* Alternatively, if you have an animation, you can include it here */}
      </div>
    </div>
  );
};

export default Home;

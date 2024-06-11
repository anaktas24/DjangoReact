import React from 'react';
import '../styles/Home.css';
import mango from '../assets/mango.png'



const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-left">
          <button className="cta-button">Click Here</button>
          <header className="home-header">
            <h1>The World Is Open To You</h1>
          </header>
          <section className="home-description">
            <h3>Subtitle And Others</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </section>
        </div>
        <div className="home-right">
          <img src={mango} alt="Description of image" className="home-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;

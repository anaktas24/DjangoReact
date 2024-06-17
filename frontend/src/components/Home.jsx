import React from 'react';
import '../styles/Home.css';
import mango from '../assets/mango.png'



const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-left">
          <h1>Welcome to Migrating Mango</h1>
          <header className="home-header">
            <h2>Your fruity companion to migration</h2>
          </header>
          <section className="home-description">
            <h3>Subtitle And Others</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <p>`Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`</p>
νπμ ρθν δεω

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

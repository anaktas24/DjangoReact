import React from 'react';
import '../styles/Home.css';
import mango from '../assets/mango.png'
import background from '../assets/background.jpg'
import { Link } from 'react-router-dom';
import About from './About';






const Home = () => {
  return (
    <div className="home">
  <div className="bg-image" style={{backgroundImage: `url(${background})`}}></div>
  <div className="home-content">
    <div className="home-left">

      <Link to="/register" className='Register'><button>  Register </button></Link>
      <Link to="/login" className='Login'><button>  Login </button></Link> {/* Make the login register form go to the left side of the page*/}
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
      </section>
    </div>
    <div className="home-right">
      <img src={mango} alt="Description of image" className="home-image" />
    </div>
    <section className="category-section">
          <h3>Category 1</h3>
          <p>Details and information about Category 1.</p>
        </section>
        <section className="category-section">
          <About/>
        </section>
        <section className="category-section">
        <h3>Category 3</h3>
          <p>Learn about Category 3 and its benefits.</p>
        </section>


  </div>
</div>

  );
};

export default Home;

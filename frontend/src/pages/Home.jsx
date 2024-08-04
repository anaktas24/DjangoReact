import React from 'react';
import '../styles/Home.css';
import mango from '../assets/mango.png'
import { Link } from 'react-router-dom';
import About from './About';
import Carousel from 'react-bootstrap/Carousel';




const Home = () => {
  return (
    <div className="home">
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
        <h3 className='line-title'>What is Migrating Mango</h3>
        <p>Details and information about Manago.</p>
    <Carousel>

      <div className="owl-carousel custom-carousel owl-theme">
            <Carousel.Item>
              <div className="item active">
                <div className="item-desc">
                  <h3>Dota 2</h3>
                  <p>Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the
                    Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
                </div>
              </div>
            </Carousel.Item>

          <Carousel.Item>
            <div className="item">
              <div className="item-desc">
                <h3>The Witcher 3</h3>
                <p>The Witcher 3 is a multiplayer online battle arena by Valve. The game is a sequel to Defense
                  of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="item">
              <div className="item-desc">
                <h3>RDR 2</h3>
                <p>RDR 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the
                  Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
              </div>
            </div>
          </Carousel.Item>

          </div>
      </Carousel>
    </section>
    <section className="category-section">
      <button>Explore more</button>
      <About/>
    </section>
    <section className="category-section">
    <h3>WHat can you do with it.</h3>
      <p>Learn about Category 3 and its benefits.</p>
    </section>


  </div>
</div>

  );
};

export default Home;

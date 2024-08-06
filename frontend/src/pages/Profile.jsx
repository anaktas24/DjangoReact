import React from 'react'

import './Profile.css'

const Profile = () => {



return(
  <div className="container d-flex justify-content-center">
      <div className="card p-3 py-4">
          <div className="text-center">
              <h3 className="mt-2">Maria Smantha</h3>
        <span className="mt-1 clearfix">Android Developer</span>

        <div className="row mt-3 mb-3">

          <div className="col-md-4">
          <h5>Projects</h5>
          <span className="num">10</span>
          </div>
          <div className="col-md-4">
          <h5>Projects</h5>
          <span className="num">10</span>
          </div>
          <div className="col-md-4">
          <h5>Projects</h5>
          <span className="num">10</span>
          </div>

        </div>

        <hr className="line"></hr>

        <small className="mt-4">I am an android developer working at google Inc at california,USA</small>
                <div className="social-buttons mt-5">
          <button className="neo-button"><i className="fa fa-facebook fa-1x"></i> </button>
          <button className="neo-button"><i className="fa fa-linkedin fa-1x"></i></button>
          <button className="neo-button"><i className="fa fa-google fa-1x"></i> </button>
          <button className="neo-button"><i className="fa fa-youtube fa-1x"></i> </button>
          <button className="neo-button"><i className="fa fa-twitter fa-1x"></i> </button>
          </div>

        <div className="profile mt-5">

        <button className="profile_button px-5">View profile</button>

      </div>

          </div>
      </div>
  </div>
)
}

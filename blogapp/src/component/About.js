import React from 'react';
import animate from "../image/animateddd.jpg"

function About() {
  return (
    <div className="container mt-4 ">
      <div className="row d-flex justify-content-evenly align-items-center">
        <div className="col-md-5 bg-dark p-4 ">
          <h1>About us</h1>
          <p className='text-white '>
            We are a team of passionate bloggers who are dedicated to providing our readers with informative and engaging content. We believe that everyone has a story to tell, and we want to help you share yours with the world.
          </p>
          <p className='text-white '>
            We are always looking for new and interesting topics to write about, so if you have any suggestions, please let us know. We also welcome guest bloggers, so if you have a story to tell, we would love to hear it.
          </p>
        </div>
        <div className="col-md-5">
      <img src={animate} alt="" className='img-fluid' />
        </div>

      </div>
    </div>
  );
}

export default About;

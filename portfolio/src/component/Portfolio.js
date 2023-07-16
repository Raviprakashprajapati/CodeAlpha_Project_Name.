import React from 'react'
import "./Portfolio.css"

import project1 from "../image/prject 1.jpg"
import project2 from "../image/projetc 2.jpg"
import project3 from "../image/project3.jpg"
import image from "../image/animate.png"
function Portfolio() {
  return (
    <div>


      <div className="container mt-4">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col">
            <img src={image} alt="" className='img-fluid'  />
          </div>
          <div className="col">
            <h2 className='text-white'><b>Here, my all projects i have done</b> </h2>
          </div>
        </div>
      </div>
      
  <div class="card-container mt-5 ">
    <div class="card">
    
      <img src={project1} />
      <h3>E-commerce Website:</h3>
      <p> Build a complete e-commerce platform from scratch, including user authentication, product catalog, shopping cart, payment integration, and order management..</p>
    </div>
    
    <div class="card">
      <img src={project2} />
      <h3>Social Media Application: </h3>
      <p>Develop a social networking platform with features like user profiles, friend connections, posts, comments, likes, and notifications. Implement real-time updates using technologies like WebSockets.</p>
    </div>
    
    <div class="card">
      <img src={project3} />
      <h3>Real Estate Listing Website:</h3>
      <p> Create a platform for listing and searching properties, including user profiles, property details, image galleries, search filters, and contact forms. Implement a back-end CMS for managing listings.</p>
    </div>
  </div>
      
      
    </div>
  )
}

export default Portfolio

import React from 'react'
import "./About.css"
import profilePhoto from "../image/Profile photo.jpg"
import ProgressBar from 'react-bootstrap/ProgressBar';

function About() {

  const now = 60;
 
  return (
    <>
      <div className='container-fluid text-white '>

        <div className="row mt-5 d-flex justify-content-center align-items-center">

          <div className=" col-md-5">
            <div class="profile-picture">
              <img src={profilePhoto} alt="Profile" />
            </div>
          </div>

          <div className=" col-md-5">
            <div class="details">
              <h1 className='make-center' >Ravi Prakash Prajapati</h1>
              <p className='make-center' style={{fontFamily:"monospace"}} >Full Stack Developer</p>
              <p>I am a Full stack Developer and very passionate to craete a Fronted and Backend Web application</p>
              <hr />
              <ul>
                <li><strong>Email:</strong> john.doe@example.com</li>
                <li><strong>Phone:</strong> (123) 456-7890</li>
                <li><strong>Website:</strong> www.johndoe.com</li>
              </ul>
              <hr />
            </div>
          </div>
        </div>
      </div>

      <div className="container text-white">
        <div className="row d-flex justify-content-center">
          <div className="col-8">
            <h1>SKILLS</h1>
            <hr />
            <div>
              
              <ProgressBar now={now} label={`${now}%`} visuallyHidden />
            </div>
            <div >
              <p><b>Html</b></p>
              <ProgressBar now={80} label={`${now}%`} visuallyHidden />
            </div>
            <div>
              <p><b>Css</b></p>
              <ProgressBar now={70} label={`${now}%`} visuallyHidden />
            </div>
            <div>
              <p><b>Javascript</b></p>
              <ProgressBar now={60} label={`${now}%`} visuallyHidden />
            </div>
            <div>
              <p><b>React JS</b></p>
              <ProgressBar now={70} label={`${now}%`} visuallyHidden />
            </div>
            <div>
              <p><b>Python</b></p>
              <ProgressBar now={60} label={`${now}%`} visuallyHidden />
            </div>
            <div>
              <p><b>Nodejs</b></p>
              <ProgressBar now={65} label={`${now}%`} visuallyHidden />
            </div>
            <div>
              <p><b>Php</b></p>
 
            </div>
         
          </div>
        </div>
      </div>






      <div className='container-fluid mt-4' >
        <div className="row d-flex justify-content-center ">
          <div className="col-11 ">
            <p className='text-center text-white p-3' style={{boxShadow:"0 0 0 0.2px white",fontFamily:"monospace"}} >
              Since beginning my journey as a freelance designer over 3 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>

          </div>
        </div>
      </div>
    </>

  )
}

export default About

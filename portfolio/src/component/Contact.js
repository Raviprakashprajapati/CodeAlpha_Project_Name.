import React, { useState } from 'react';
import './Contact.css';

function Contact() {



    return (
        <div>
            <div className="contact-section" style={{margin:"0 auto"}} >
                <div className="container bg-dark p-5 text-white">
                    <form>
                        <div className="col-7 ">
                            <div className="form-group">
                                <label htmlFor="exampleInputUsername">Your name</label>
                                <input type="text" className="form-control" id="exampleInputUsername" placeholder="Enter Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail">Email Address</label>
                                <input type="email" className="form-control" id="exampleInputEmail" placeholder="Enter Email id" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="telephone">Mobile No.</label>
                                <input type="tel" className="form-control" id="telephone" placeholder="Enter 10-digit mobile no." />
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="form-group">
                                <label htmlFor="description">Message</label>
                                <textarea className="form-control" id="description" placeholder="Enter Your Message"></textarea>
                            </div>
                            <div>
                                <button type="button" className="btn btn-default submit">
                                    <i className="fa fa-paper-plane" aria-hidden="true"></i> Send Message
                                </button>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>



        </div>
    )
}

export default Contact

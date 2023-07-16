import React from 'react'
import "./Home.css"
import Accordion from 'react-bootstrap/Accordion';

import Card from 'react-bootstrap/Card';

function Home() {


    return (
        <>
            {/* home--- */}
            <div className='Home' >
                <h1>Welcome To , <br /><span style={{ color: "yellow" }}>BLOG APP</span>   <p style={{ fontSize: "30px", padding: "10px", color: "yellow" }}>Write your first blog😉</p> </h1>
            </div>

            {/* question----- */}
            <div className="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-12">
                        <h1 style={{fontWeight:"bold"}} className='mb-3'>✒ Writing a great blog post takes time and effort, but it's worth it when you see the results. Here are a few tips to help you write a great blog post:</h1>

                        <Accordion defaultActiveKey={['0']} alwaysOpen>

                            <Accordion.Item eventKey="0"  >
                                <Accordion.Header  >Start with a strong headline. </Accordion.Header>
                                <Accordion.Body className='bg-dark text-white'>
                                    The headline is the first thing people will see, so make sure it's attention-grabbing and informative.
                                </Accordion.Body>
                            </Accordion.Item> <br />
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Write about something you're passionate about. </Accordion.Header>
                                <Accordion.Body className='bg-dark text-white'>
                                    When you're passionate about a topic, it shows in your writing. Your readers will be more engaged if they can tell that you're excited about what you're writing about.
                                </Accordion.Body>
                            </Accordion.Item><br />
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Do your research. </Accordion.Header>
                                <Accordion.Body className='bg-dark text-white'>
                                    Before you start writing, make sure you do your research and have a good understanding of the topic you're writing about. This will help you write a more informative and accurate post.
                                </Accordion.Body>
                            </Accordion.Item><br />
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Structure your post well. </Accordion.Header>
                                <Accordion.Body className='bg-dark text-white'>
                                    A well-structured post is easy to read and understand. Make sure your post has a clear introduction, body, and conclusion.
                                </Accordion.Body>
                            </Accordion.Item><br />

                        </Accordion>

                    </div>
                </div>
            </div>


            {/* articvles-- */}
            <div className="container-fluid mt-5">
                <div className="row p-2 d-flex justify-content-center bg-dark">
                    <h1 style={{ fontSize: "30px", fontWeight: "bolder" }}>Features Articles🖌...</h1> <br /><br />

                        {/* article col--- */}
                    <div className="col-12 col-md-8 mb-1 ">
                        <Card className="text-center" style={{ backgroundColor: "black" }}>
                            <Card.Body style={{ backgroundColor: "black" }}>

                                <Card.Text style={{ color: "white" }}>
                                    📂 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore nam laboriosam nostrum iusto commodi amet dolorem doloribus reiciendis eius iure!
                                </Card.Text>
                                <Card.Title style={{ color: "wheat" }}> by Dennis sam</Card.Title>
                                <div className="d-flex justify-content-between align-items-center">

                                    <p className='bg-dark' style={{ padding: "2px 8px",fontFamily:"monospace" , color: "white" }}>To go Article</p>
                                    <Card.Footer className="text-muted text-white"  > <span style={{ color: "white" }} >2 days ago</span></Card.Footer>
                                </div>

                            </Card.Body>

                        </Card>

                    </div>
                    
                    <div className="col-12 col-md-8 mb-1 ">
                        <Card className="text-center" style={{ backgroundColor: "black" }}>
                            <Card.Body style={{ backgroundColor: "black" }}>

                                <Card.Text style={{ color: "white" }}>
                                    📂 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore nam laboriosam nostrum iusto commodi amet dolorem doloribus reiciendis eius iure!
                                </Card.Text>
                                <Card.Title style={{ color: "wheat" }}> by Dennis sam</Card.Title>
                                <div className="d-flex justify-content-between align-items-center">

                                    <p className='bg-dark' style={{ padding: "2px 8px",fontFamily:"monospace" , color: "white" }}>To go Article</p>
                                    <Card.Footer className="text-muted text-white"  > <span style={{ color: "white" }} >2 days ago</span></Card.Footer>
                                </div>

                            </Card.Body>

                        </Card>

                    </div> 

                    
                    <div className="col-12 col-md-8 mb-1 ">
                        <Card className="text-center" style={{ backgroundColor: "black" }}>
                            <Card.Body style={{ backgroundColor: "black" }}>

                                <Card.Text style={{ color: "white" }}>
                                    📂 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore nam laboriosam nostrum iusto commodi amet dolorem doloribus reiciendis eius iure!
                                </Card.Text>
                                <Card.Title style={{ color: "wheat" }}> by Dennis sam</Card.Title>
                                <div className="d-flex justify-content-between align-items-center">

                                    <p className='bg-dark' style={{ padding: "2px 8px",fontFamily:"monospace" , color: "white" }}>To go Article</p>
                                    <Card.Footer className="text-muted text-white"  > <span style={{ color: "white" }} >2 days ago</span></Card.Footer>
                                </div>

                            </Card.Body>

                        </Card>

                    </div> 

                    
                    <div className="col-12 col-md-8 mb-1 ">
                        <Card className="text-center" style={{ backgroundColor: "black" }}>
                            <Card.Body style={{ backgroundColor: "black" }}>

                                <Card.Text style={{ color: "white" }}>
                                    📂 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore nam laboriosam nostrum iusto commodi amet dolorem doloribus reiciendis eius iure!
                                </Card.Text>
                                <Card.Title style={{ color: "wheat" }}> by Dennis sam</Card.Title>
                                <div className="d-flex justify-content-between align-items-center">

                                    <p className='bg-dark' style={{ padding: "2px 8px",fontFamily:"monospace" , color: "white" }}>To go Article</p>
                                    <Card.Footer className="text-muted text-white"  > <span style={{ color: "white" }} >2 days ago</span></Card.Footer>
                                </div>

                            </Card.Body>

                        </Card>

                    </div> 

                    
                    <div className="col-12 col-md-8 mb-1 ">
                        <Card className="text-center" style={{ backgroundColor: "black" }}>
                            <Card.Body style={{ backgroundColor: "black" }}>

                                <Card.Text style={{ color: "white" }}>
                                    📂 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore nam laboriosam nostrum iusto commodi amet dolorem doloribus reiciendis eius iure!
                                </Card.Text>
                                <Card.Title style={{ color: "wheat" }}> by Dennis sam</Card.Title>
                                <div className="d-flex justify-content-between align-items-center">

                                    <p className='bg-dark' style={{ padding: "2px 8px",fontFamily:"monospace" , color: "white" }}>To go Article</p>
                                    <Card.Footer className="text-muted text-white"  > <span style={{ color: "white" }} >2 days ago</span></Card.Footer>
                                </div>

                            </Card.Body>

                        </Card>

                    </div> 

                    
                    <div className="col-12 col-md-8 mb-1 ">
                        <Card className="text-center" style={{ backgroundColor: "black" }}>
                            <Card.Body style={{ backgroundColor: "black" }}>

                                <Card.Text style={{ color: "white" }}>
                                    📂 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore nam laboriosam nostrum iusto commodi amet dolorem doloribus reiciendis eius iure!
                                </Card.Text>
                                <Card.Title style={{ color: "wheat" }}> by Dennis sam</Card.Title>
                                <div className="d-flex justify-content-between align-items-center">

                                    <p className='bg-dark' style={{ padding: "2px 8px",fontFamily:"monospace" , color: "white" }}>To go Article</p>
                                    <Card.Footer className="text-muted text-white"  > <span style={{ color: "white" }} >2 days ago</span></Card.Footer>
                                </div>

                            </Card.Body>

                        </Card>

                    </div> 

                    
                    <div className="col-12 col-md-8 mb-1 ">
                        <Card className="text-center" style={{ backgroundColor: "black" }}>
                            <Card.Body style={{ backgroundColor: "black" }}>

                                <Card.Text style={{ color: "white" }}>
                                    📂 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore nam laboriosam nostrum iusto commodi amet dolorem doloribus reiciendis eius iure!
                                </Card.Text>
                                <Card.Title style={{ color: "wheat" }}> by Dennis sam</Card.Title>
                                <div className="d-flex justify-content-between align-items-center">

                                    <p className='bg-dark' style={{ padding: "2px 8px",fontFamily:"monospace" , color: "white" }}>To go Article</p>
                                    <Card.Footer className="text-muted text-white"  > <span style={{ color: "white" }} >2 days ago</span></Card.Footer>
                                </div>

                            </Card.Body>

                        </Card>

                    </div> 

                      
                   

                    {/* row end */}
                </div>
            </div>




        </>

    )
}

export default Home

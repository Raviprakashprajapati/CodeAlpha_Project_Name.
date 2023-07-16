import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import animted from "../image/etretret.jpg"
import newanimted from "../image/my.jpg"

function Blog() {
  return (
    
    <>

<div className="container mt-5">
       <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={animted} />
            <Card.Body>
              <Card.Title>Article </Card.Title>
              <Card.Text className='text-dark' >
              In this comprehensive guide, we will explore the fundamentals of object-oriented programming and delve into the key concepts such as encapsulation, inheritance, and polymorphism to help you build robust and scalable applications."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
     <div className="container mt-5">
     <Row xs={1} md={2} className="g-4">
    {Array.from({ length: 4 }).map((_, idx) => (
      <Col key={idx}>
        <Card>
          <Card.Img variant="top" src={newanimted} />
          <Card.Body>
            <Card.Title>Article </Card.Title>
            <Card.Text className='text-dark' >
            In this comprehensive guide, we will explore the fundamentals of object-oriented programming and delve into the key concepts such as encapsulation, inheritance, and polymorphism to help you build robust and scalable applications."
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  </div>
    
    
    
    </>
  
   
  );
}

export default Blog;
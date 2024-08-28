import React from 'react'
import "./headerpart.css"
import { Col, Row, Container, Navbar, Nav, NavDropdown, Form, Button  } from 'react-bootstrap'
import imageslogo from "../../../assets/imageslogo.jpg"

const Headerpart = () => {
  return (
    <section id='header'>
      <Row>
        <Col lg={12}>
        <Navbar expand="lg" className="manu">
      <Container>
        <Navbar.Brand href="#"><img src={imageslogo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"> Bangla Subtitle</Nav.Link>
            <Nav.Link href="#action1">Bollywood</Nav.Link>
            <Nav.Link href="#action1">Dual Audio</Nav.Link>
            <Nav.Link href="#action1">Hindi Dubbed</Nav.Link>
            <Nav.Link href="#action1">Hollywood</Nav.Link>
            <Nav.Link href="#action1">Links Request</Nav.Link>
            
          
          </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Col>
   
        
      </Row>

        <Container>
      <Row>

        <Col lg={{span:3,offset:9}}>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <div className="three">

            <Button variant="outline-success">Search</Button>
            </div>
          </Form>
        
        </Col>
      </Row>
        </Container>

    </section>
  )
}

export default Headerpart

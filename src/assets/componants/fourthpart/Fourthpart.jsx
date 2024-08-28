import React from 'react'
import "./fourthpart.css"
import { Col, Container, Row } from 'react-bootstrap'

const Fourthpart = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg={12}>
                <div className="five">
                <div class="pagination">
        <a href="#" class="prev">&laquo; Previous</a>
        <a href="#" class="page">1</a>
        <a href="#" class="page">2</a>
        <a href="#" class="page">3</a>
        <a href="#" class="page">4</a>
        <a href="#" class="page">...</a>
        <a href="#" class="page">256</a>
        <a href="#" class="page">257</a>
        <a href="#" class="page">Next</a>
        
    </div>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
    
  )
}

export default Fourthpart

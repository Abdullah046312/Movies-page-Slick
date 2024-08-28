import React from 'react'
import "./firstpart.css"
import { Col, Container, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import images45 from "../../../assets/images45.jpg"
import images46 from "../../../assets/images46.jpg"
import images47 from "../../../assets/images47.jpg"
import images48 from "../../../assets/images48.jpg"
import images49 from "../../../assets/images49.jpg"
import images50 from "../../../assets/images50.jpg"
import images51 from "../../../assets/images51.jpg"
import images52 from "../../../assets/images52.jpg"
import images53 from "../../../assets/images53.jpg"
import images54 from "../../../assets/images54.jpg"
import images55 from "../../../assets/images55.jpg"
import images56 from "../../../assets/images56.jpg"
import images57 from "../../../assets/images57.jpg"
import images58 from "../../../assets/images58.jpg"
import images59 from "../../../assets/images59.jpg"
import images60 from "../../../assets/images60.jpg"
import images61 from "../../../assets/images61.jpg"
import images62 from "../../../assets/images62.jpg"

function SampleNextArrow(props) {
    const {  onClick } = props;
    return (
      <div
        
        onClick={onClick} className='next'> 
        <FaChevronRight/>
      </div> 
    );
  }
  
  function SamplePrevArrow(props) {
    const {  onClick } = props;
    return (
      <div
       
        onClick={onClick} className='pre'>
         <FaChevronLeft/>
      </div>
    );
  }

const Firstpart = () => {
    var settings = {
        
        slidesToShow: 6,
        slidesToScroll: 6,
        dots: true,
        autoplay: true,
        speed:1000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

  return (
    <section id='banner'>

    <div className="banner">

    <Container>
        <Row>
            <Col lg={12}>
            <div className="banner_main">

            <Slider  {...settings}>

        <div className="one">
            <img src={images45} alt="" />
        </div>
        <div className="one">
            <img src={images46} alt="" />
        </div>
        <div className="one">
            <img src={images47} alt="" />
        </div>
        <div className="one">
            <img src={images48} alt="" />
        </div>
        <div className="one">
            <img src={images49} alt="" />
        </div>
        <div className="one">
            <img src={images50} alt="" />
        </div>
        <div className="one">
            <img src={images51} alt="" />
        </div>
        <div className="one">
            <img src={images52} alt="" />
        </div>
        <div className="one">
            <img src={images53} alt="" />
        </div>
        <div className="one">
            <img src={images54} alt="" />
        </div>
        <div className="one">
            <img src={images55} alt="" />
        </div>
        <div className="one">
            <img src={images56} alt="" />
        </div>
        <div className="one">
            <img src={images57} alt="" />
        </div>
        <div className="one">
            <img src={images58} alt="" />
        </div>
        <div className="one">
            <img src={images59} alt="" />
        </div>
        <div className="one">
            <img src={images60} alt="" />
        </div>
        <div className="one">
            <img src={images61} alt="" />
        </div>
        <div className="one">
            <img src={images62} alt="" />
        </div>
        </Slider>
            </div>
            </Col>
        </Row>
        
    </Container>
    </div>
    </section>
  )
}

export default Firstpart

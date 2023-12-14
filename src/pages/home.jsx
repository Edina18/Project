import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarouselComp from "../components/CarouselComp";
import CardComp from "../components/CardComp";
import CardImgComp from "../components/CardImgComp";
import React, { useEffect } from 'react';

export const Home = () => {
  useEffect(() => {
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     const uid = user.uid;
    //   } else {
    //     console.log("user is logged out")
    //   }
    // });

  }, [])

  return (
    <Container className="ContainerComp">
      <Row className="section1">
        <Col className="CarouselDropdown" sm={6}>
          <h3 style={{color: 'azure'}}>Upcoming</h3>
          <div>
            <CarouselComp />
          </div>

        </Col>
        <Col className="text" sm={5}>
          <CardComp />
        </Col>
      </Row>
      <Row className="firstLine">
        <Col>
          <h3 style={{color: 'azure'}}>Now Playing</h3>
          <CardImgComp />
        </Col>
      </Row>
    </Container>
  );
};
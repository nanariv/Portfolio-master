import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import LoopType from "./LoopType";
import Lottie from 'react-lottie';
import animationData from '../../Assets/home-main';

function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={5} className="home-header">
              <h1 className="heading-name">
                I am
                <strong className="main-name"> Nan.  </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <LoopType />
              </div>
            </Col>

            <Col md={7} style={{ paddingBottom: 20 }}>
            <Lottie
                options={defaultOptions}
                height={800}
                width={800}
                style={{ marginTop: '-7em' }} 
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

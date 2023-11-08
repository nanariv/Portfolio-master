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
            <Col md={12} lg={5} className="home-header">
              <h1 className="heading-name">
                I am
                <strong className="main-name"> Nan.  </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <LoopType />
                {/* I work with forward-thinking people to design and build interactive, accessible websites and products. From working on projects for likes of IBM, Tavant Technologies, Ashtel LLC, to working with startups in Academia, I've devoted more than a  decade to building tiny pockets in the web. */}
              </div>
            </Col>

            <Col md={12} lg={7} style={{ paddingBottom: 20 }}>
            <Lottie
                options={defaultOptions}
                height={'100%'}
                width={'100%'}
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

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import Type from "./Type";
import homeImg from "../../Assets/home-main2.jpg";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading-name">
                I am
                <strong className="main-name"> Nan.  </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeImg}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
              <p><a href="https://www.freepik.com/free-vector/woman-working-concept-flat-style_25676515.htm#page=2&query=female%20programmer&position=12&from_view=keyword&track=ais">Image by brgfx</a> on Freepik</p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

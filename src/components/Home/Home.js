import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import LoopType from "./LoopType";
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
                <LoopType />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeImg}
                alt="home pic"
                className="img-fluid img-grey"
                style={{ maxHeight: "450px" }}
              />
              <p><a href="https://www.freepik.com/free-vector/multitasking-concept_6759715.htm#page=2&query=female%20programmer&position=43&from_view=search&track=ais">Image by pikisuperstar</a> on Freepik</p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

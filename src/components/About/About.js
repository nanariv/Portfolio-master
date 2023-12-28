import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import Lottie from 'react-lottie';
import animationData from '../../Assets/about-main';
import Hobbies from "./Hobbies";

function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={5}
            className="about-img"
          >
            <Lottie
              options={defaultOptions}
              height={500}
              width={'100%'}
            />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "1.4em", paddingBottom: "20px" }}>
              I prioritize integrity, continuous improvement and gratitude above all else. These ideals guide my approach to problem solving and life in general.
            </h1>
            <br />
            <h1 style={{ fontSize: "1.4em", paddingBottom: "20px" }}>
              I was particularly drawn to frontend development due to its immediacy in displaying the outcomes of coding efforts.After dedicating five years to honing my skills in frontend development, I pursued a Master's degree with a specialization in full stack development, which I successfully completed at the University of Pittsburgh in April 2023.
            </h1>
            <br />
            <h1 style={{ fontSize: "1.4em", paddingBottom: "20px" }}>
              My goal is to seamlessly integrate my frontend expertise with backend proficiency, allowing me to create holistic, user-centered solutions that deliver a superior user experience while addressing complex technical challenges.<br />
            </h1>
            <Aboutcard />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="highlight">Skillset </strong>
        </h1>

        <Techstack />

        {/* <h1 className="project-heading">
          <strong className="highlight">Tools</strong> I use
        </h1> */}
        {/* <Toolstack /> */}

        {/* <Github /> */}
        <Hobbies />
      </Container>
    </Container>
  );
}

export default About;

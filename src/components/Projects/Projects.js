import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wordpress from "../../Assets/Projects/wordpress.jpeg";
import bags from "../../Assets/Projects/bags.jpeg";
import petronia from "../../Assets/Projects/petronia.jpeg";
import literary from "../../Assets/Projects/literary.jpeg";
import cine from "../../Assets/Projects/cine.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="highlight">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col xs={12} lg={4} className="project-card">
            <ProjectCard
              imgPath={bags}
              isBlog={false}
              title="Nirvana"
              description="An e-commerce website for bags build using HTML, JavaScript, MYSQL, Flask AND Python"
              ghLink="https://github.com/nanariv/Nirvana"
            />
          </Col>

          <Col xs={12} lg={4} className="project-card">
            <ProjectCard
              imgPath={literary}
              isBlog={false}
              title="Literary Labyrinth"
              description="A library application with checkout features built using React and Express JS. "
              ghLink="https://github.com/nanariv/Library-App"
            />
          </Col>

          <Col xs={12} lg={4} className="project-card">
            <ProjectCard
              imgPath={cine}
              isBlog={false}
              title="CineVault"
              description="A movie database and review web application built using Java Spring Boot, MongoDB and React JS"
              ghLink="https://github.com/nanariv/CineVault"  
            />
          </Col> 

          <Col xs={12} lg={4} className="project-card">
            <ProjectCard
              imgPath={petronia}
              isBlog={false}
              title="Plague of Petronia"
              description="A single player, role playing video game(RPG). Face off with Aphosis!"
              ghLink="https://gitlab.com/ariv.nandhini/plagueofpetronia"
              demoLink="https://nanariv.itch.io/plague-of-petronia"
            />
          </Col>

          {/* <Col xs={12} lg={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/nanariv/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
          <Col xs={12} lg={4} className="project-card">
            <ProjectCard
              imgPath={wordpress}
              isBlog={true}
              title="Web Weaver Nan"
              description="Welcome to my bi-weekly blog on all things frontend development!"
              ghLink="https://webweavernan.wordpress.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

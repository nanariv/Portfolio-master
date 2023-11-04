import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wordpress from "../../Assets/Projects/wordpress.PNG";
import nirvana from "../../Assets/Projects/nirvana.png";
import petronia2 from "../../Assets/Projects/petronia2.PNG";
import literary from "../../Assets/Projects/literary.png";

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
              imgPath={nirvana}
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
              description="A library application built using React and Express JS. "
              ghLink="https://github.com/nanariv/Library-App"
            />
          </Col>

          {/* <Col xs={12} lg={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/nanariv/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}

          <Col xs={12} lg={4} className="project-card">
            <ProjectCard
              imgPath={petronia2}
              isBlog={false}
              title="Plague of Petronia"
              description="A single player, role playing video game(RPG). Face off with Aphosis!"
              ghLink="https://gitlab.com/ariv.nandhini/plagueofpetronia"
              demoLink="https://nanariv.itch.io/plague-of-petronia"
              classAdd="game-wrap"
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

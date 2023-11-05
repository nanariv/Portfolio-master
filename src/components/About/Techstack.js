import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3,
  FaLess,
  FaSass,
  FaWordpress,
  FaBootstrap,
  FaJava,
  FaGit
} from "react-icons/fa";
import { SiExpress, SiWebpack } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

import {
  DiNodejs,
  DiMongodb,
  DiPython
} from "react-icons/di";
import {
  SiNextdotjs,
  SiMysql,
  SiBabel,
  SiJest,
  SiRubyonrails,
  SiAmazons3,
  SiSpring,
  SiVercel
} from "react-icons/si";

function Techstack() {
  return (
    <div>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={12}>
          <h2 className="project-heading">
            Leading-edge <strong className="highlight">Technology Stack</strong>
          </h2>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={12} md={4} xl={2} className="tech-icons">
          <FaReact />
        </Col>
        <Col xs={12} md={4} xl={2} className="tech-icons">
          <FaAngular />
        </Col>
        <Col xs={12} md={4} xl={2} className="tech-icons">
          <IoLogoJavascript />
        </Col>
        <Col xs={12} md={4} xl={2} className="tech-icons">
          <DiNodejs />
        </Col>
        <Col xs={12} md={4} xl={2} className="tech-icons">
          <FaJava />
        </Col>
        <Col xs={12} md={4} xl={2} className="tech-icons">
          <SiNextdotjs />
        </Col>
        <Col xs={12} md={4} xl={2} className="tech-icons">
          <SiExpress />
        </Col>
        <Col xs={12} md={4} xl={2} className="tech-icons">
          <SiMysql />
        </Col>
        <Col xs={12} md={4} xl={2} className="tech-icons">
          <FaHtml5 />
        </Col>
        <Col xs={12} md={4} xl={2} className="tech-icons">
          <FaCss3 />
        </Col>
        <Col xs={12} md={4} xl={2} className="tech-icons">
          <FaWordpress />
        </Col>
        <Col xs={12} md={4} xl={2} className="tech-icons">
          <DiPython />
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={12}>
          <h2 className="project-heading">
            Specialized <strong className="highlight">Technology Stack</strong>
          </h2>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={12} md={4} xl={2} className="tech-icons">
          <DiMongodb />
        </Col>
        <Col xs={12} md={4} xl={2} className="tech-icons">
          <SiWebpack />
        </Col>
        <Col xs={12} md={4} xl={2} className="tech-icons">
          <SiBabel />
        </Col>
        <Col xs={12} md={4} xl={2} className="tech-icons">
          <SiJest />
        </Col>
        <Col xs={12} md={4} xl={2} className="tech-icons">
          <SiRubyonrails />
        </Col>
        <Col xs={12} md={4} xl={2} className="tech-icons">
          <SiAmazons3 />
        </Col>
        <Col xs={12} md={4} xl={2} className="tech-icons">
          <FaBootstrap />
        </Col>
        <Col xs={12} md={4} xl={2} className="tech-icons">
          <SiSpring />
        </Col>
        <Col xs={12} md={4} xl={2} className="tech-icons">
          <FaGit />
        </Col>
        <Col xs={12} md={4} xl={2} className="tech-icons">
          <SiVercel />
        </Col>
        <Col xs={12} md={4} xl={2} className="tech-icons">
          <FaLess />
        </Col>
        <Col xs={12} md={4} xl={2} className="tech-icons">
          <FaSass />
        </Col>
        
      </Row>
    </div>
  );
}

export default Techstack;

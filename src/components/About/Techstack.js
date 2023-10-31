import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, 
  FaAngular, 
  FaHtml5, 
  FaCss3, 
  FaLess, 
  FaSass,
  FaPhp,
  FaJira,
  FaConfluence,
  FaWordpress,
  FaBootstrap
} from "react-icons/fa";
import {SiExpress, SiWebpack} from "react-icons/si";
import {IoLogoJavascript} from "react-icons/io";

import {
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiBackbone
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiMysql,
  SiBabel,
  SiJest,
  SiRubyonrails,
  SiGooglecloud,
  SiAmazons3
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <div>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAngular />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLess />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSass />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPhp />
      </Col>
    </Row>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
      <DiPython />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiGit />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiPostgresql />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <FaJira />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <FaConfluence />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiWebpack />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiBabel />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiJest />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiRubyonrails />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiGooglecloud />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiAmazons3 />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiBackbone />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <FaWordpress />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <FaBootstrap />
    </Col>
  </Row>
  </div>
  );
}

export default Techstack;

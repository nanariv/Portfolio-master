import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/nan.jpg";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Particle from "../Particle";
import Timeline from "./Timeline";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// function LinkedInModal(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered>
//       <Modal.Body>
//       <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="nan-ariv" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/nan-ariv?trk=profile-badge">Nandhini Ariv</a></div>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }
function Home2() {
  // const [modalShow, setModalShow] = useState(false);
  
// function openModal(e) {
//   e && e.preventDefault(); 
//   setModalShow(true)
// }
  return (
    <Container fluid className="home-about-section" id="about">
      <Particle />
      <Container>
        <Row>
          <Col md={12} lg={8} className="home-about-description relative">
            <div className="text-wrap">
              <p className="home-about-body">
                Let's build something amazing together.
                <br />
                <br />I have successfully delivered 23 projects over 5+ years.
                <i>
                  <b className="highlight"> I am a award winning developer whose true love is crafting websites that leave clients in awe. </b>
                </i>
                <br />
                <br />
                I specialize in &nbsp;
                <i>
                  <b className="highlight">SEO, Cross-browser and multiple media devices.</b>
                </i>
                <br />
                <br />
                I have a Master's degree from the <b className="highlight">University of Pittsburgh</b> with a focus in
                <i>
                  <b className="highlight">
                    {" "}
                    Full stack development.
                  </b>
                </i>
                &nbsp;
                <i>
                  <b className="highlight"> Lets dive right in</b>
                </i>
              </p>
            </div>
          </Col>
          <Col md={12} lg={4} className="nanProfile block">
            <img src={myImg} className="img-fluid img-grey" alt="avatar" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Timeline />
        <Row>
          <Col md={12} lg={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="highlight">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/nanariv"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/nanariv"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> 
              onClick={openModal}*/}
              <li className="social-icons" >
                <a
                  href="www.linkedin.com/in/nan-ariv"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <LinkedInModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              /> */}
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/nanariv"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

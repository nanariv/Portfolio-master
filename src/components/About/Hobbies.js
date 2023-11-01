import React, {useState} from "react";
import { Col, Row } from "react-bootstrap";
import Lottie from 'react-lottie';
import animationData from '../../Assets/reading';
import animationTravelData from '../../Assets/travelling';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function HobbyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Body>
        <div id="gr_grid_widget_1698819928">
          <h2>
            <a
              style={{ textDecoration: "none" }}
              rel="nofollow"
              href="https://www.goodreads.com/review/list/9981050-nan-ariv?shelf=currently-reading&utm_medium=api&utm_source=grid_widget"
            >
              Nan's currently-reading book montage
            </a>
          </h2>
          <div className="gr_grid_container">
            <div className="gr_grid_book_container">
              <a
                title="A Game of Thrones (A Song of Ice and Fire, #1)"
                rel="nofollow"
                href="https://www.goodreads.com/book/show/13496.A_Game_of_Thrones"
              >
                <img
                  alt="A Game of Thrones"
                  border={0}
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1562726234l/13496._SY75_.jpg"
                />
              </a>
            </div>
            <div className="gr_grid_book_container">
              <a
                title="Tintin and the Picaros (Tintin #23)"
                rel="nofollow"
                href="https://www.goodreads.com/book/show/146160.Tintin_and_the_Picaros"
              >
                <img
                  alt="Tintin and the Picaros"
                  border={0}
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327959072l/146160._SX50_.jpg"
                />
              </a>
            </div>
            <div className="gr_grid_book_container">
              <a
                title="Why Quantum Physicists Do Not Fail"
                rel="nofollow"
                href="https://www.goodreads.com/book/show/17261742-why-quantum-physicists-do-not-fail"
              >
                <img
                  alt="Why Quantum Physicists Do Not Fail"
                  border={0}
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1359418673l/17261742._SX50_.jpg"
                />
              </a>
            </div>
            <div className="gr_grid_book_container">
              <a
                title="Pretty Girls"
                rel="nofollow"
                href="https://www.goodreads.com/book/show/25574782-pretty-girls"
              >
                <img
                  alt="Pretty Girls"
                  border={0}
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1432205734l/25574782._SY75_.jpg"
                />
              </a>
            </div>
            <div className="gr_grid_book_container">
              <a
                title="Throne of Glass (Throne of Glass, #1)"
                rel="nofollow"
                href="https://www.goodreads.com/book/show/76703559-throne-of-glass"
              >
                <img
                  alt="Throne of Glass"
                  border={0}
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1673566495l/76703559._SY75_.jpg"
                />
              </a>
            </div>
            <div className="gr_grid_book_container">
              <a
                title="The Paris Apartment"
                rel="nofollow"
                href="https://www.goodreads.com/book/show/58468990-the-paris-apartment"
              >
                <img
                  alt="The Paris Apartment"
                  border={0}
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1645550948l/58468990._SY75_.jpg"
                />
              </a>
            </div>
            <div className="gr_grid_book_container">
              <a
                title="A Flicker in the Dark"
                rel="nofollow"
                href="https://www.goodreads.com/book/show/57693172-a-flicker-in-the-dark"
              >
                <img
                  alt="A Flicker in the Dark"
                  border={0}
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1621347398l/57693172._SY75_.jpg"
                />
              </a>
            </div>
            <div className="gr_grid_book_container">
              <a
                title="Wrong Place Wrong Time"
                rel="nofollow"
                href="https://www.goodreads.com/book/show/59947696-wrong-place-wrong-time"
              >
                <img
                  alt="Wrong Place Wrong Time"
                  border={0}
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1659457434l/59947696._SY75_.jpg"
                />
              </a>
            </div>
            <div className="gr_grid_book_container">
              <a
                title="The Graveyard Book"
                rel="nofollow"
                href="https://www.goodreads.com/book/show/2213661.The_Graveyard_Book"
              >
                <img
                  alt="The Graveyard Book"
                  border={0}
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1531295292l/2213661._SY75_.jpg"
                />
              </a>
            </div>
            <br style={{ clear: "both" }} />
            <br />
            <a
              className="gr_grid_branding"
              style={{
                fontSize: ".9em",
                color: "#382110",
                textDecoration: "none",
                float: "right",
                clear: "both"
              }}
              rel="nofollow"
              href="https://www.goodreads.com/user/show/9981050-nan-ariv"
            >
              Nan Ariv's favorite books »
            </a>
            <noscript>
              &lt;br/&gt;Share &lt;a rel="nofollow" href="/"&gt;book reviews&lt;/a&gt;
              and ratings with Nan, and even join a &lt;a rel="nofollow"
              href="/group"&gt;book club&lt;/a&gt; on Goodreads.
            </noscript>
          </div>
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Hobbies() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptionsTwo = {
    loop: true,
    autoplay: true,
    animationData: animationTravelData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const [modalShow, setModalShow] = useState(false);
  return (
    <Row>
      <h1 className="project-heading hobby-head">Hobbies</h1>
      <Col xs={12} md={6} className="hobby-wrap" id="read">
        <HobbyModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <Button variant="primary" onClick={() => setModalShow(true)}>
        See my book shelf
      </Button>
        <Lottie
          options={defaultOptions}
          height={600}
          width={'94%'}
        />
      </Col>
      <Col xs={12} md={6} className="hobby-wrap">
        <Lottie
          options={defaultOptionsTwo}
          height={600}
          width={'94%'}
        />
      </Col>
    </Row>
  );
}

export default Hobbies;

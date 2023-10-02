import { Col, Row } from "react-bootstrap";

import Shuffle from "../assets/playerbuttons/Shuffle.png";
import Previous from "../assets/playerbuttons/Previous.png";
import Play from "../assets/playerbuttons/Play.png";
import Next from "../assets/playerbuttons/Next.png";
import Repeat from "../assets/playerbuttons/Repeat.png";

const Player = () => {
  return (
    <Row>
      <Col lg={10} className='offset-lg-2'>
        <Row>
          <Col xs={6} md={4} lg={2} className='offset-3 offset-md-4 offset-lg-5 playerControls mt-1'>
            <Row>
              <Col>
                <a href='s'>
                  <img src={Shuffle} alt='shuffle' />
                </a>
              </Col>
              <Col>
                <a href='s'>
                  <img src={Previous} alt='shuffle' />
                </a>
              </Col>
              <Col>
                <a href='s'>
                  <img src={Play} alt='shuffle' />
                </a>
              </Col>
              <Col>
                <a href='s'>
                  <img src={Next} alt='shuffle' />
                </a>
              </Col>
              <Col>
                <a href='s'>
                  <img src={Repeat} alt='shuffle' />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='justify-content-center playBar py-3'>
          <Col xs={8} md={6}>
            <div className='progress'>
              <div
                className='progress-bar'
                role='progressbar'
                aria-valuenow='0'
                aria-valuemin='0'
                aria-valuemax='100'
              ></div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Player;

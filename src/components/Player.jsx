import { Col, Container, Row } from "react-bootstrap";

import Shuffle from "../assets/playerbuttons/Shuffle.png";
import Previous from "../assets/playerbuttons/Previous.png";
import Play from "../assets/playerbuttons/Play.png";
import Pause from "../assets/playerbuttons/Pause.png";
import Next from "../assets/playerbuttons/Next.png";
import Repeat from "../assets/playerbuttons/Repeat.png";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setPlayerOff, setPlayerOn } from "../redux/actions/songInListen";

const Player = () => {
  const dispatch = useDispatch();
  const isPlayerOn = useSelector((state) => state.currentSong.isPlayerOn);
  const songInfo = useSelector((state) => state.currentSong.songInListen);

  return (
    <Container fluid className='fixed-bottom bg-dark p-2 mb-5 mb-lg-0 px-4 px-lg-0'>
      <Row className='justify-content-end'>
        {songInfo && (
          <Col className='mt-1 ps-2 ps-lg-4'>
            <Row className='align-items-center '>
              <Col xs={2} md={1} lg={4} className='pe-0'>
                <Link to={`/album_page/${songInfo.id}`}>
                  <img className='img-fluid' src={songInfo.album.cover_medium} alt='1' />
                </Link>
              </Col>
              <Col>
                <p className='mb-0 text-white fw-bold'>
                  {songInfo.title.length < 16 ? songInfo.title : songInfo.title.substring(0, 16) + "..."}
                  <br></br>
                </p>

                <Link to={`/artist_page/${songInfo.artist.id}`} className='nav-link text-white'>
                  <p className='mb-0'>{songInfo.artist.name}</p>
                </Link>
              </Col>
            </Row>
          </Col>
        )}
        <Col xs={2} lg={10} className='d-flex d-lg-block justify-content-center'>
          <Row className='flex-column align-items-center justify-content-center gap-4'>
            <Col xs={6} md={4} lg={2} className='playerControls mt-1'>
              <Row>
                <Col className='d-none d-lg-block'>
                  <a href='s'>
                    <img src={Shuffle} alt='shuffle' />
                  </a>
                </Col>
                <Col className='d-none d-lf-block'>
                  <a href='s'>
                    <img src={Previous} alt='shuffle' />
                  </a>
                </Col>
                <Col className='d-flex align-items-end'>
                  {
                    <img
                      src={isPlayerOn ? Pause : Play}
                      alt='shuffle'
                      width={14}
                      onClick={() => {
                        isPlayerOn ? dispatch(setPlayerOff()) : dispatch(setPlayerOn());
                      }}
                    />
                  }
                </Col>
                <Col className='d-none d-lg-block'>
                  <a href='s'>
                    <img src={Next} alt='shuffle' />
                  </a>
                </Col>
                <Col className='d-none d-lg-block'>
                  <a href='s'>
                    <img src={Repeat} alt='shuffle' />
                  </a>
                </Col>
              </Row>
            </Col>
            <Col xs={8} md={6} className='d-none d-lg-block'>
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
    </Container>
  );
};

export default Player;

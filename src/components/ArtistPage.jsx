import { Button, Col, Container, Row } from "react-bootstrap";
import Player from "./Player";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedElem } from "../redux/actions";

const ArtistPage = () => {
  let elementId = useParams();
  const dispatch = useDispatch();
  let elementData = useSelector((state) => state.songs.selectedElement);
  useEffect(() => {
    dispatch(setSelectedElem(elementId.id, "artist"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementId.id]);

  return (
    <>
      <Container fluid>
        <Row>
          <Sidebar />

          <Col xs={12} md={9} className='offset-md-3 mainPage'>
            <Topbar />
            <Row>
              {elementData && (
                <Col xs={12} md={10} className='mt-5'>
                  <h2 className='titleMain'>{elementData.name}</h2>
                  <div id='followers'>{elementData.nb_fan} followers</div>
                  <div className='d-flex justify-content-center gap-2' id='button-container'>
                    <Button className='btn-success mainButton' id='playButton'>
                      PLAY
                    </Button>
                    <Button className='bg-transparent mainButton' id='followButton'>
                      FOLLOW
                    </Button>
                  </div>
                </Col>
              )}
            </Row>
            <Row className='mb-3'>
              <Col xs={10} className='offset-1 p-0'>
                <div className='mt-4 d-flex justify-content-start'>
                  <h2 className='text-white font-weight-bold'>Tracks</h2>
                </div>
                <div className='pt-5 mb-5'>
                  <Row className='apiLoaded'></Row>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className='fixed-bottom bg-container pt-1' fluid>
        <Player />
      </Container>
    </>
  );
};

export default ArtistPage;

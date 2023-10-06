import { Button, Col, Container, Row } from "react-bootstrap";
import Player from "./Player";
import Topbar from "./Topbar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedElem } from "../redux/actions";
import AlbumCard from "./AlbumCard";
import Sidebar2 from "./Sidebar2";

const ArtistPage = () => {
  let elementId = useParams();
  const dispatch = useDispatch();
  let elementData = useSelector((state) => state.main.selectedElement);
  let currentTrucksList = useSelector((state) => state.main.currentTrucks);
  useEffect(() => {
    dispatch(setSelectedElem(elementId.id, "artist"));
    console.log("dispatch effettuata ");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementId]);

  return (
    <>
      <Container fluid>
        <Row>
          <Sidebar2 />

          <Col xs={12} md={10} className='offset-md-2 mainPage'>
            <Topbar />
            <Row>
              {elementData && (
                <Col xs={12} className='mt-5'>
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
              <Col xs={12}>
                <div className='mt-5 ms-3 text-center'>
                  <h2 className='text-white font-weight-bold'>Tracks</h2>
                </div>

                <Row className='apiLoaded justify-content-center row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-5'>
                  {currentTrucksList &&
                    currentTrucksList.map((truck) => (
                      <AlbumCard key={"truck" + truck.id} element='artist' songInfo={truck} />
                    ))}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Player />
    </>
  );
};

export default ArtistPage;

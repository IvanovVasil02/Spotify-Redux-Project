import { Col, Container, Row } from "react-bootstrap";
import Player from "./Player";
import Topbar from "./Topbar";
import AlbumCard from "./AlbumCard";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedElem } from "../redux/actions";
import Sidebar2 from "./Sidebar2";

const AlbumPage = () => {
  let elementId = useParams();
  const dispatch = useDispatch();
  let elementData = useSelector((state) => state.main.selectedElement);

  useEffect(() => {
    dispatch(setSelectedElem(elementId.id, "album"));

    console.log("dispatch efettuata");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementId.id]);
  return (
    <>
      <Container fluid>
        <Row>
          <Sidebar2 />

          <Col xs={12} md={9} className='offset-md-3 mainPage'>
            <Topbar />

            <Row>
              {elementData && elementData.id === parseInt(elementId.id) && (
                <AlbumCard songInfo={elementData} element={"album"} />
              )}

              <Col md={8} className='p-5'>
                <Row>
                  {elementData && elementData.id === parseInt(elementId.id) && (
                    <Col md={12} className='mb-5' id='trackList'>
                      {elementData.tracks.data.map((track) => (
                        <div key={"album" + track.id}>
                          <div className='p-3 ps-0 trackHover'>
                            <a href='s' className='card-title  px-3' style={{ color: "white" }}>
                              {track.title}
                            </a>
                            <small className='duration' style={{ color: "white" }}>
                              {Math.floor(
                                parseInt(track.duration) / 60 // setting the duration minutes
                              )}
                              :
                              {parseInt(track.duration) % 60 < 10
                                ? "0" + (parseInt(track.duration) % 60) // checking che duration seconds, if they are less than 10 a 0 is prefixed
                                : parseInt(track.duration) % 60}
                            </small>
                          </div>
                        </div>
                      ))}
                    </Col>
                  )}
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

export default AlbumPage;

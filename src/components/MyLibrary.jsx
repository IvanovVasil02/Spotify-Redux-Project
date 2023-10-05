import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Player from "./Player";
import AlbumCard from "./AlbumCard";
import Topbar from "./Topbar";
import Sidebar2 from "./Sidebar2";

const MyLibrary = () => {
  const favoriteList = useSelector((state) => state.favoriteList.content);

  return (
    <>
      <Container fluid>
        <Row>
          <Sidebar2 />
          <Col xs={12} md={10} className='offset-md-2 mainPage'>
            <Topbar />
            <Row>
              <Col xs={12}>
                <div id='rock'>
                  <h2>Your Favorites songs</h2>
                  <Row className='row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-5 imgLinks py-3'>
                    {favoriteList.length > 0 ? (
                      favoriteList.map((song, i) => (
                        <AlbumCard key={"song" + song._id + i} songInfo={song} element='album' />
                      ))
                    ) : (
                      <h4>Non hai nessuna canzone nei preferiti...</h4>
                    )}
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Player />
    </>
  );
};

export default MyLibrary;

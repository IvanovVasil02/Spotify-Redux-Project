import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import Player from "./Player";
import AlbumCard from "./AlbumCard";
import Topbar from "./Topbar";

const MyLibrary = () => {
  const favoriteList = useSelector((state) => state.favoriteList.content);

  return (
    <>
      <Container fluid>
        <Row>
          <Sidebar />
          <Col xs={12} md={9} className='offset-md-3 mainPage'>
            <Topbar />
            <Row>
              <Col xs={10}>
                <div id='rock'>
                  <h2>Your Favorites songs</h2>
                  <Row className='row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3'>
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
      <Container className='fixed-bottom bg-container pt-1' fluid>
        <Player />
      </Container>
    </>
  );
};

export default MyLibrary;

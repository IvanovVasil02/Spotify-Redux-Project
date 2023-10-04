import { Container, Row } from "react-bootstrap";
import MainContainer from "./MainContainer";
import Player from "./Player";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Sidebar />
          <MainContainer />
        </Row>
      </Container>
      <Container className='fixed-bottom bg-container pt-1' fluid>
        <Player />
      </Container>
    </>
  );
};
export default Home;

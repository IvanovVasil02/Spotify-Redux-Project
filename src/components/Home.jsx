import { Container, Row } from "react-bootstrap";
import MainContainer from "./MainContainer";
import Player from "./Player";
import Sidebar from "./Sidebar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { clearSearchQuery } from "../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearSearchQuery());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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

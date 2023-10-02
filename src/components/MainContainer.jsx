import { Col } from "react-bootstrap";
import CategoryComp from "./CategoryComp";
import SearchResultsList from "./SearchResultsList";
import Topbar from "./Topbar";

const MainContainer = () => {
  let rockArtists = ["queen", "u2", "thepolice", "eagles", "thedoors", "oasis", "thewho", "bonjovi"];

  let popArtists = ["maroon5", "coldplay", "onerepublic", "jamesblunt", "katyperry", "arianagrande"];

  let hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];
  return (
    <Col xs={12} md={9} className='offset-md-3 mainPage'>
      <Topbar />
      <SearchResultsList />
      <CategoryComp genre='rock' categoryTitle='Rock Classics' artists={rockArtists} />
      <CategoryComp genre='pop' categoryTitle='Pop' artists={popArtists} />
      <CategoryComp genre='hiphop' categoryTitle='#HipHop' artists={hipHopArtists} />
    </Col>
  );
};

export default MainContainer;

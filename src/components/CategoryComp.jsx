import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getGenre } from "../redux/actions";
import AlbumCard from "./AlbumCard";

const CategoryComp = ({ genre, categoryTitle, artists }) => {
  const dispatch = useDispatch();
  const songsArray = useSelector((state) => state.genre[genre]);

  useEffect(() => {
    songsArray.length < 4 && dispatch(getGenre(genre, artists));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Row>
      <Col xs={10}>
        <div id={genre}>
          <h2>{categoryTitle}</h2>
          <Row className='row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3'>
            {songsArray && songsArray.map((song, i) => <AlbumCard key={"song" + song._id + i} songInfo={song} />)}
          </Row>
        </div>
      </Col>
    </Row>
  );
};
export default CategoryComp;

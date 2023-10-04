import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsHeart, BsSuitHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../redux/actions/favoriteActions";
import { setPlayerOn } from "../redux/actions";

const AlbumCard = ({ songInfo, element }) => {
  const dispatch = useDispatch();
  const favoriteList = useSelector((state) => state.favoriteList.content);

  return element === "album" ? (
    <Col md={3} className='pt-5 text-center' id='img-container'>
      <img src={songInfo.cover_medium} className='card-img img-fluid' alt='Album' />
      <div className='mt-4 text-center'>
        <p className='album-title'>{songInfo.title}</p>
      </div>
      <div className='text-center'>
        <p className='artist-name'>{songInfo.artist.name}</p>
      </div>
      <div className='mt-4 text-center'>
        <Button
          id='btnPlay'
          className='btn btn-success'
          type='button'
          onClick={() => {
            dispatch(setPlayerOn());
          }}
        >
          Play
        </Button>

        <Button
          variant='link'
          className='ms-auto'
          onClick={() => {
            favoriteList.some((e) => e.id === songInfo.id)
              ? dispatch(removeFromFavorites(songInfo.id))
              : dispatch(addToFavorites(songInfo));
          }}
        >
          {favoriteList.some((e) => e.id === songInfo.id) ? (
            <BsSuitHeartFill className='fs-2 text-secondary' />
          ) : (
            <BsHeart className='fs-2 text-secondary' />
          )}
        </Button>
      </div>
    </Col>
  ) : element === "artist" ? (
    <Col xs='auto' className='text-center mb-5'>
      <Link to={`/artist_page/${songInfo.album.id}`} className='nav-link text-white'>
        <img className='img-fluid' src={songInfo.album.cover_medium} alt='1' />

        <p className='mb-0'>
          Track: "
          {
            songInfo.title.length < 16 ? songInfo.title : songInfo.title.substring(0, 16) + "..." // setting the track title, if it's longer than 16 chars cuts the rest
          }
          "<br></br>
        </p>
      </Link>
      <Link to={`/album_page/${songInfo.album.id}`} className='nav-link text-white'>
        <p>
          Album: "
          {
            songInfo.album.title.length < 16 ? songInfo.album.title : songInfo.album.title.substring(0, 16) + "..." // setting the track title, if it's longer than 16 chars cuts the rest
          }
          "
        </p>
      </Link>
    </Col>
  ) : (
    <Col className='text-center'>
      <Link to={`/album_page/${songInfo.album.id}`}>
        <img className='img-fluid' src={songInfo.album.cover_medium} alt='1' />

        <p className='mb-0'>
          Album:
          {songInfo.album.title.length < 16 ? songInfo.album.title : songInfo.album.title.substring(0, 16) + "..."}
          <br></br>
        </p>
      </Link>
      <Link to={`/artist_page/${songInfo.artist.id}`}>
        <p>Artist: {songInfo.artist.name}</p>
      </Link>
    </Col>
  );
};

export default AlbumCard;

import { Button, Col } from "react-bootstrap";
import { BsHeart, BsSuitHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../redux/actions/favoriteActions";
import { SetCurentTruck, setPlayerOn } from "../../redux/actions/songInListen";
import { Link } from "react-router-dom";

const AlbumCard = ({ albumData, btnOff }) => {
  const dispatch = useDispatch();
  const favoriteList = useSelector((state) => state.favoriteList.albums);

  return (
    <Col md={3} className='text-center' id='img-container'>
      <Link to={`/album_page/${albumData.id}`} className='text-decoration-none'>
        <img src={albumData.cover_medium} className='card-img img-fluid' alt='Album' />
      </Link>
      <div className={btnOff && "d-flex justify-content-center"}>
        <div className='mt-4 text-center'>
          <Link to={`/album_page/${albumData.id}`} className='text-decoration-none'>
            <p className='album-title'>{albumData.title}</p>
          </Link>
          <Link to={`/artist_page/${albumData.artist.id}`} className='text-decoration-none'>
            <p className='artist-name'>{albumData.artist.name}</p>
          </Link>
        </div>
        {btnOff && (
          <Button
            variant='link'
            onClick={() => {
              favoriteList.some((e) => e.id === albumData.id)
                ? dispatch(removeFromFavorites(albumData.id, "album"))
                : dispatch(addToFavorites(albumData, "album"));
            }}
          >
            {favoriteList.some((e) => e.id === albumData.id) ? (
              <BsSuitHeartFill className='fs-2 text-secondary' />
            ) : (
              <BsHeart className='fs-2 text-secondary' />
            )}
          </Button>
        )}
      </div>
      <div className='mt-4 text-center'>
        {!btnOff && (
          <>
            <Button
              id='btnPlay'
              className='btn btn-success'
              type='button'
              onClick={() => {
                dispatch(SetCurentTruck(albumData.tracks.data[0].title));
                dispatch(setPlayerOn());
              }}
            >
              Play
            </Button>
            <Button
              variant='link'
              className='ms-auto'
              onClick={() => {
                favoriteList.some((e) => e.id === albumData.id)
                  ? dispatch(removeFromFavorites(albumData.id, "album"))
                  : dispatch(addToFavorites(albumData, "album"));
              }}
            >
              {favoriteList.some((e) => e.id === albumData.id) ? (
                <BsSuitHeartFill className='fs-2 text-secondary' />
              ) : (
                <BsHeart className='fs-2 text-secondary' />
              )}
            </Button>
          </>
        )}
      </div>
    </Col>
  );
};

export default AlbumCard;

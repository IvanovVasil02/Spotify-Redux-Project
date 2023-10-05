import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { clearSearchQuery } from "../redux/actions";
import { FaBookOpen, FaHome } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import spotify_Logo from "../assets/logo/Spotify_Logo.png";

const Sidebar2 = () => {
  const dispatch = useDispatch();
  return (
    <Col
      xs={12}
      md={2}
      className='bg-dark d-flex d-md-block justify-content-center align-items-center fixed-bottom'
      id='sidebar2'
    >
      <Link to={"/"} className='d-none d-md-block'>
        <img src={spotify_Logo} alt='Spotify_Logo' width='120' height='30' className='my-2' />
      </Link>

      <ul className='nav nav-pills flex-md-column justify-content-center justify-content-md-start'>
        <li>
          <Link
            to={"/"}
            className='nav-link text-white'
            onClick={() => {
              dispatch(clearSearchQuery());
            }}
          >
            <FaHome />
            <span className='d-none d-md-inline'>Home</span>
          </Link>
        </li>
        <li>
          <Link to={"/favorite_list/"} className='nav-link text-white'>
            <FaBookOpen /> <span className='d-none d-md-inline'>Your Library</span>
          </Link>
        </li>
        <li>
          <Link to={"/search_page/"} className='nav-link text-white'>
            <BsSearch /> <span className='d-none d-md-inline'>Search</span>
          </Link>
        </li>
      </ul>
    </Col>
  );
};
export default Sidebar2;

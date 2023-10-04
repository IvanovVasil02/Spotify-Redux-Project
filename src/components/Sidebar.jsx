import { Button, Col, Nav, Navbar } from "react-bootstrap";
import { FaBookOpen, FaHome } from "react-icons/fa";
import spotify_Logo from "../assets/logo/Spotify_Logo.png";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";
import { clearSearchQuery } from "../redux/actions";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <Col xs={2}>
      <Navbar expand='md' className='navbar-white bg-navbar fixed-left justify-content-between px-2'>
        <div className='nav-container'>
          <Link to={"/"}>
            <img src={spotify_Logo} alt='Spotify_Logo' width='120' height='30' className='my-2' />
          </Link>
          <Button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </Button>
          <Navbar.Collapse id='navbarNavAltMarkup'>
            <Nav>
              <ul>
                <li>
                  <Link
                    to={"/"}
                    className='nav-link'
                    onClick={() => {
                      dispatch(clearSearchQuery());
                    }}
                  >
                    <FaHome />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/favorite_list/"} className='nav-link'>
                    <FaBookOpen /> Your Library
                  </Link>
                </li>
                <li>
                  <div className='input-group mt-3'>
                    <SearchForm />
                  </div>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </div>
        <div className='nav-btn'>
          <button className='btn signup-btn' type='button'>
            Sign Up
          </button>
          <button className='btn login-btn' type='button'>
            Login
          </button>
          <a href='a'>Cookie Policy</a> |<a href='a'> Privacy</a>
        </div>
      </Navbar>
    </Col>
  );
};

export default Sidebar;

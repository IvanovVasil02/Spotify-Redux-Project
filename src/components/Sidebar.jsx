import { Button, Col, Nav } from "react-bootstrap";
import { FaBookOpen, FaHome } from "react-icons/fa";
import spotify_Logo from "../assets/logo/Spotify_Logo.png";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <Col xs={2}>
      <Nav className='navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between px-2'>
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
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav'>
              <ul>
                <li>
                  <Link to={"/"} className='nav-link'>
                    <FaHome />
                    Home
                  </Link>
                </li>
                <li>
                  <a className='nav-item nav-link' href='s'>
                    <FaBookOpen /> Your Library
                  </a>
                </li>
                <li>
                  <div className='input-group mt-3'>
                    <SearchForm />
                  </div>
                </li>
              </ul>
            </div>
          </div>
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
      </Nav>
    </Col>
  );
};

export default Sidebar;

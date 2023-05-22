import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
import './style.css';
import {Container} from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar expand='false' bg='info' variant='info'>
        <Container>
          <Navbar.Brand>
            <NavLink className='logo' to='/'>
              Home
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Nav className='me-auto'>
              <NavLink to='/user/1' className='link'>
                User Details
              </NavLink>
              <NavLink to='/about' className='link'>
                About Me
                <span>Gena</span>
                <span>oreshka85@tut.by</span>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

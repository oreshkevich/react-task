import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
import './style.css';

const Header = () => {
  return (
    <Navbar expand='lg' bg='info' variant='info' className='header-nav'>
      <Navbar.Brand>
        <NavLink className='logo' to='/'>
          Home
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-end'>
        <Nav className='me-auto'>
          <NavLink to='/about' className='link'>
            About Me
          </NavLink>
          <NavLink to='/user' className='link'>
            User Details
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
  // <header className={classes.header}>
  //   <div className={classes.logo}>Great Quotes</div>
  //   <nav className={classes.nav}>
  //     <ul>
  //       <li>
  //         <NavLink to='/quotes' activeClassName={classes.active}>
  //           All Quotes
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink to='/new-quote' activeClassName={classes.active}>
  //           Add a Quote
  //         </NavLink>
  //       </li>
  //     </ul>
  //   </nav>
  // </header>;
};

export default Header;

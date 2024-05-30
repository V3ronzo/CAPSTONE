import { Link, useLocation } from 'react-router-dom';

const navbarStyles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-around',
    borderBottom: '1px solid black',
    padding: '10px 0',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
  },
  activeLink: {
    color: 'orange',
  },
};

const Navbar = () => {
  const location = useLocation();

  return (
    <nav style={navbarStyles.nav}>
      <Link
        to="/"
        style={{
          ...navbarStyles.link,
          ...(location.pathname === '/' && navbarStyles.activeLink),
        }}
      >
        Home
      </Link>
      <Link
        to="/reviews"
        style={{
          ...navbarStyles.link,
          ...(location.pathname === '/reviews' && navbarStyles.activeLink),
        }}
      >
        Reviews
        
      </Link>
      <Link
        to="/register"
        style={{
          ...navbarStyles.link,
          ...(location.pathname === '/register' && navbarStyles.activeLink),
        }}
      >
        Register
        
      </Link>
      <Link
        to="/checklist"
        style={{
          ...navbarStyles.link,
          ...(location.pathname === '/checklist' && navbarStyles.activeLink),
        }}
      >
        My Checklist
      </Link>
      <Link
        to="/weather"
        style={{
          ...navbarStyles.link,
          ...(location.pathname === '/weather' && navbarStyles.activeLink),
        }}
      >
        W.O.T.
      </Link>
    </nav>
  );
};

export default Navbar;
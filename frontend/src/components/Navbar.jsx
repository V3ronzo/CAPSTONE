import { Link } from 'react-router-dom';

const navbarStyles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-around',
    borderBottom: '1px solid black',
    padding: '10px 0',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
  },
};

const Navbar = () => {
  return (
    <nav style={navbarStyles.nav}>
      <Link to="/" style={navbarStyles.link}>
        Home
      </Link>
      <Link to="/reviews" style={navbarStyles.link}>
        Reviews
      </Link>
      <Link to="/checklist" style={navbarStyles.link}>
        My Checklist
      </Link>
      <Link to="/weather" style={navbarStyles.link}>
        W.O.T.
      </Link>
    </nav>
  );
};

export default Navbar;
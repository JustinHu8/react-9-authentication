import { Link } from "react-router-dom";

interface NavBarProps {
  isAuthenticated: boolean;
  toggleAuth: () => void;
}

const NavBar = ({ isAuthenticated, toggleAuth }: NavBarProps) => (
  <nav className='navbar'>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/courses">Courses</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      {isAuthenticated ? (
        <li><Link to="/profile">Profile</Link></li>
      ) : (
        <li><Link to="/login">Login</Link></li>
      )}
      <li>
        <button onClick={toggleAuth}>
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </li>
    </ul>
  </nav>
);

export default NavBar;
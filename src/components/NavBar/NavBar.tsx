import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className='navbar'>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/courses">Courses</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default NavBar;
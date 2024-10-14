import { Link, Outlet } from "react-router-dom";

const UserProfilePage = () => (
  <div>
    <h1>User Profile</h1>
    <ul>
      <li><Link to="settings">Settings</Link></li>
      <li><Link to="orders">Order History</Link></li>
    </ul>
    <Outlet />
  </div>
);

export default UserProfilePage;
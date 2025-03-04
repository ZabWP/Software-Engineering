import SSO from "./googleSSO";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <h1>Shart Gallery</h1>
      <SSO />
    </div>
  );
};

export default Navbar;

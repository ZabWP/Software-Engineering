import SSO from "./googleSSO";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="navbarContainer">
      <div className="logoContainer" onClick={() => navigate('/home')}>
      <img src="https://cdn.discordapp.com/attachments/1346268283279773759/1346547549242396732/image.png?ex=67c895a1&is=67c74421&hm=6e7abc19b7f8015144cfa4cc7ddb0c74471e9deac6d9aacadd08b41bef86dde4&" alt="logo" />
      <h1>Shart Gallery</h1>
      </div>
     
      <SSO />
    </div>
  );
};

export default Navbar;

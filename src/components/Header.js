//Styless
import '../styles/layout/header.scss';
//image
import logo from '../images/Rick_and_Morty_-_logo.png';

const Header = (props) => {
  return (
    <header className="header">
      <img className="header--img z_index" src={logo} alt="Rick and Morty" />
    </header>
  );
};

export default Header;

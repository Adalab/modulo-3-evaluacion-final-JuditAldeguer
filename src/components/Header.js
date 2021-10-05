//Styless
import '../styles/layout/header.scss';
//image
import logo from '../images/Rick_and_Morty_-_logo.png';

const Header = (props) => {
  return (
    <header className="header">
      <img className="header--img" src={logo} alt="Rick and Morty" />
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
    </header>
  );
};

export default Header;

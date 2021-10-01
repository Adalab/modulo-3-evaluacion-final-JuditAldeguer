//Styless
import '../styles/layout/header.scss';
//image
import logo from '../images/Rick_and_Morty_-_logo.png';
//Components
import Links from './secondary-components/Links';

const Header = (props) => {
  return (
    <header>
      <img src={logo} alt="Rick and Morty" />
      <Links productId={props.productId} />
    </header>
  );
};

export default Header;

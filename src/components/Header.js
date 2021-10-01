//Styless
import '../styles/layout/header.scss';
//image
import logo from '../images/Rick_and_Morty_-_logo.png';
//Components
import Links from './secondary-components/Links';

const Header = (props) => {
  const handleBackBtn = (ev) => {
    ev.preventDefault();
    window.history.back();
  };

  return (
    <header>
      <img src={logo} alt="Rick and Morty" />
      <Links productId={props.productId} />
      <button title="atrás" onClick={handleBackBtn}>
        Volver atrás
      </button>
    </header>
  );
};

export default Header;

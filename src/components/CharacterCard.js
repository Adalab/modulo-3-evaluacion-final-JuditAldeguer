//Styles
import '../styles/components/links.scss';
//component
import { NavLink } from 'react-router-dom';

const CharacterCard = (props) => {
  return (
    <NavLink
      to={`/character-detail/${props.characterId}`}
      title="Detalle del personaje"
      activeClassName="selected-link"
    >
      <article>
        <img src="" alt="personaje" />
        <h2>
          <strong>Name</strong>
        </h2>
        <p>Especie</p>
      </article>
    </NavLink>
  );
};

export default CharacterCard;

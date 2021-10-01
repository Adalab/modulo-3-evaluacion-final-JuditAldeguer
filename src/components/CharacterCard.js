//Styles
import '../styles/components/characterCards.scss';
//component
import { NavLink } from 'react-router-dom';

const CharacterCard = (props) => {
  return (
    <NavLink
      to={`/character/${props.characterId}`}
      title="Detalle del personaje"
      activeClassName="selected-link"
    >
      <article className="card">
        <img src={props.character.image} alt="personaje" />
        <h2>
          <strong>{props.character.name}</strong>
        </h2>
        <p>{props.character.species}</p>
      </article>
    </NavLink>
  );
};

export default CharacterCard;

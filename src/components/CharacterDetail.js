import ModalWindow from './secondary-components/ModalWindow';
import '../styles/components/characterDetail.scss';

const CharacterDetail = (props) => {
  if (props.character === undefined) {
    return (
      <ModalWindow title="Usuario no encontrado">
        <p className="detail">Revisa que la dirección sea correcta</p>
      </ModalWindow>
    );
  } else {
    return (
      <ModalWindow title={props.character.name}>
        <article className="detail">
          <img
            className="detail--img"
            src={props.character.image}
            alt="personaje"
          />
          <ul className="detail--list">
            <li>
              <strong>Status: </strong>
              {props.character.status}
            </li>
            <li>
              <strong>Species: </strong>
              {props.character.species}
            </li>
            <li>
              <strong>Gender: </strong>
              {props.character.gender}
            </li>
            <li>
              <strong>Location: </strong>
              {props.character.location.name}
            </li>
            <li>
              <strong>Origin: </strong>
              {props.character.species}
            </li>
            <li>
              <strong>Episodes: </strong>
              {props.character.episode.length}
            </li>
          </ul>
        </article>
      </ModalWindow>
    );
  }
};

export default CharacterDetail;

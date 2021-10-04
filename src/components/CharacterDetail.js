import ModalWindow from './secondary-components/ModalWindow';
import '../styles/components/characterDetail.scss';

const CharacterDetail = (props) => {
  const iconStatus = () => {
    if (props.character.status === 'Dead') {
      return <i className="fas fa-skull-crossbones"></i>;
    } else if (props.character.status === 'Alive') {
      return <i className="fas fa-heartbeat"></i>;
    } else {
      return <i className="fas fa-question-circle"></i>;
    }
  };

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
              {iconStatus()}
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

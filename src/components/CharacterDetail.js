//React
import { useEffect, useState } from 'react';
//Services
import api from '../services/api';
//styles
import '../styles/components/characterDetail.scss';
//components
import ModalWindow from './secondary-components/ModalWindow';

const CharacterDetail = (props) => {
  const [firstEpisode, setFirstEpisode] = useState('');

  const iconStatus = () => {
    if (props.character.status === 'Dead') {
      return <i className="fas fa-skull-crossbones"></i>;
    } else if (props.character.status === 'Alive') {
      return <i className="fas fa-heartbeat"></i>;
    } else {
      return <i className="fas fa-question-circle"></i>;
    }
  };

  //useEffect
  useEffect(() => {
    if (props.character !== undefined) {
      api.callToApiEpisodes(props.character.episode[0]).then((response) => {
        setFirstEpisode(response);
      });
    }
  }, [props.character]);

  if (props.character === undefined) {
    return (
      <ModalWindow title="Character not found">
        <p className="detail">Please check that the address is correct</p>
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
            <li>
              <strong>Firts seen in: </strong> {firstEpisode}
            </li>
          </ul>
        </article>
      </ModalWindow>
    );
  }
};

export default CharacterDetail;

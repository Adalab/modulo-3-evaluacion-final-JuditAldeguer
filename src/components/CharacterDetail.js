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
      return (
        <>
          <p>
            <strong>Status: </strong>
            <i className="fas fa-skull-crossbones"></i>;
            {` ${props.character.status}`}
          </p>
        </>
      );
    } else if (props.character.status === 'Alive') {
      return (
        <>
          <p>
            <strong>Status: </strong>
            <i className="fas fa-heartbeat"></i>;{` ${props.character.status}`}
          </p>
        </>
      );
    } else {
      return (
        <>
          <p>
            <strong>Status: </strong>
            <i className="fas fa-question-circle"></i>
            {` ${props.character.status}`}
          </p>
        </>
      );
    }
  };

  const speciesResult = () => {
    if (props.character.species === 'Human') {
      return (
        <>
          <p>
            <strong>Species: </strong>
            <i className="fas fa-user-alt"></i>
            {` ${props.character.species}`}
          </p>
        </>
      );
    } else if (props.character.species === 'Alien') {
      return (
        <>
          <p>
            <strong>Species: </strong>
            <i className="fab fa-reddit-alien"></i>
            {` ${props.character.species}`}
          </p>
        </>
      );
    } else {
      return (
        <>
          <p>
            <strong>Species: </strong>
            <i className="fas fa-user-alt-slash"></i>
            {` ${props.character.species}`}
          </p>
        </>
      );
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
        <p className="not_found_detail">
          Please check if the address is correct
        </p>
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
            <li>{iconStatus()}</li>
            <li>{speciesResult()}</li>
            <li>
              <p>
                <strong>Gender: </strong>
                {props.character.gender}
              </p>
            </li>
            <li>
              <p>
                <strong>Location: </strong>
                {props.character.location.name}
              </p>
            </li>
            <li>
              <p>
                <strong>Origin: </strong>
                {props.character.species}
              </p>
            </li>
            <li>
              <p>
                <strong>Firts seen in: </strong> {firstEpisode}
              </p>
            </li>
            <li>
              <p>
                <strong>Episodes: </strong>
                {props.character.episode.length}
              </p>
            </li>
          </ul>
        </article>
      </ModalWindow>
    );
  }
};

export default CharacterDetail;

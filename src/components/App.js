//React / npm
import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
//Services
import callToApi from '../services/api';
import ls from '../services/local-storage.js'; //localStorage
import date from '../services/date'; //fecha usamos date: date.getCurrentDate()
//Styles
import '../styles/App.scss';
//Components
import Header from './Header';
import Footer from './Footer';
import CharacterDetail from './CharacterDetail';
import Filters from './Filters';
import CharacterList from './CharacterList';
import NotFoundPage from './secondary-components/NotFoundPage';
import Loading from './secondary-components/Loading';

function App() {
  //useState
  const [listCharacters, setListCharacters] = useState([]);
  const [filteredListCharacters, setFilteredListCharacters] =
    useState(listCharacters);
  const [searchWord, setSearchWord] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  //useEffect
  useEffect(() => {
    setIsLoading(true);
    callToApi().then((response) => {
      setListCharacters(response);
      setIsLoading(false);
      setSearchWord(' ');
    });
  }, []);

  useEffect(() => {
    getFilteredData();
  }, [searchWord]);

  //useRef
  const routeData = useRouteMatch('/character/:characterId');
  const characterId = routeData !== null ? routeData.params.productId : '';
  const selectedCharacter = listCharacters.find(
    (character) => character.uuid === characterId
  );
  console.log(`CharacterID: ${characterId}`);
  console.log(selectedCharacter);

  //handles
  const handleSearchWord = (name, value) => {
    setSearchWord(value);
  };

  const getFilteredData = () => {
    const newData = listCharacters.filter((character) =>
      character.name
        .toLocaleLowerCase()
        .includes(searchWord.toLocaleLowerCase())
    );
    setFilteredListCharacters(newData);
  };

  //renders

  return (
    <div className="page">
      <Header productId="321" />
      <main>
        <Loading loading={isLoading} />
        <h1>Bienvenid@, encuentra tu(s) personaje(s) favorito(s)</h1>
        <Filters value={searchWord} handleSearchWord={handleSearchWord} />
        <CharacterList data={filteredListCharacters} searchWord={searchWord} />
        <Switch>
          <Route path="/" exact></Route>
          <Route path="/character/:characterId">
            <CharacterDetail
              character={selectedCharacter}
              characterId={characterId}
            />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;

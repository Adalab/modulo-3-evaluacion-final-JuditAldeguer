//React / npm
import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
//Services
import api from '../services/api';
import date from '../services/date';
import ls from '../services/local-storage.js'; //localStorage
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
  const [searchSpecies, setSearchSpecies] = useState('');
  const [searchGender, setSearchGender] = useState('');
  const [searchStatus, setSearchStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  //useEffect
  useEffect(() => {
    setIsLoading(true);
    api.callToApi().then((response) => {
      const data = response.map((character) => (character.id = uuid()));
      setListCharacters(response);
      setIsLoading(false);
      setSearchWord(' ');
      setSearchSpecies('');
      setSearchGender('');
      setSearchStatus('');
    });
  }, []);

  useEffect(() => {
    getFilteredData();
  }, [searchWord, searchSpecies, searchGender, searchStatus]);

  //useRef
  const routeData = useRouteMatch('/character/:characterId');
  const characterId = routeData !== null ? routeData.params.characterId : '';
  const selectedCharacter = listCharacters.find((character) => {
    return character.id === characterId;
  });
  console.log(`CharacterID: ${characterId}`);
  console.log(selectedCharacter);

  //handles
  const handleSearch = (name, value) => {
    if (name === 'search-word') {
      setSearchWord(value);
    }
    if (name === 'search-species') {
      setSearchSpecies(value);
    }
    if (name === 'get-gender') {
      if (value === 'all') {
        setSearchGender('');
      } else {
        setSearchGender(value);
      }
    }
    if (name === 'get-status') {
      if (value === 'all') {
        setSearchStatus('');
      } else {
        setSearchStatus(value);
      }
    }
  };

  const getFilteredData = () => {
    const newData = listCharacters
      .filter((character) =>
        character.name
          .toLocaleLowerCase()
          .includes(searchWord.toLocaleLowerCase())
      )
      .filter((character) =>
        character.species
          .toLocaleLowerCase()
          .includes(searchSpecies.toLocaleLowerCase())
      )
      .filter((character) => character.gender.includes(searchGender))
      .filter((character) =>
        character.status
          .toLocaleLowerCase()
          .includes(searchStatus.toLocaleLowerCase())
      );
    setByOrder(newData);
    setFilteredListCharacters(newData);
  };

  const setByOrder = (newData) => {
    newData.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  };

  //renders

  //html
  return (
    <div className="page">
      <Header />
      <main id="main">
        <Loading loading={isLoading} />

        <Filters
          value={searchWord}
          handleSearch={handleSearch}
          searchGender={searchGender}
          searchStatus={searchStatus}
        />
        <CharacterList
          data={filteredListCharacters}
          searchWord={searchWord}
          characterId={characterId}
        />
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

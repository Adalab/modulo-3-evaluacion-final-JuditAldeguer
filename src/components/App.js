//React / npm
import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
//Services
import api from '../services/api';
//Styles
import '../styles/App.scss';
import webPreview from '../images/webPreview.png';
//Components
import Header from './Header';
import Footer from './Footer';
import CharacterDetail from './CharacterDetail';
import Filters from './Filters';
import NavPage from './NavPage';
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
  const [searchEqual, setSearchEqual] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [numberOfPages, setNumberOfPages] = useState('');
  let pageNumCont;
  const [pageNum, setPageNum] = useState(1);

  //useEffect
  useEffect(() => {
    setIsLoading(true);
    api.callToApi(pageNum).then((response) => {
      setListCharacters(response.results);
      getFilteredData();
      setIsLoading(false);
      setSearchWord(' ');
      setSearchSpecies('');
      setSearchGender('');
      setSearchStatus('');
      setNumberOfPages(response.info.pages);
      setSearchEqual(false);
    });
  }, [pageNum]);

  useEffect(() => {
    getFilteredData();
  }, [searchWord, searchSpecies, searchGender, searchStatus, searchEqual]);

  //useRef
  const routeData = useRouteMatch('/character/:characterId');
  const characterId =
    routeData !== null ? parseInt(routeData.params.characterId) : '';
  const selectedCharacter = listCharacters.find((character) => {
    return character.id === characterId;
  });

  //handles
  const handlePrevPage = (ev) => {
    pageNumCont = pageNum - 1;
    setPageNum(pageNumCont);
  };

  const handleNextPage = (ev) => {
    pageNumCont = pageNum + 1;
    setPageNum(pageNumCont);
  };

  const handlePageInput = (value) => {
    setPageNum(value);
  };

  const handleSearch = (name, value) => {
    if (name === 'search-word') {
      setSearchWord(value);
    }
    if (name === 'search-species') {
      setSearchSpecies(value);
    }
    if (name === 'get-gender') {
      value === 'all' ? setSearchGender('') : setSearchGender(value);
    }
    if (name === 'get-status') {
      value === 'all' ? setSearchStatus('') : setSearchStatus(value);
    }
    if (name === 'search-equal') {
      setSearchEqual(value);
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
      )
      .filter((character) => {
        if (searchEqual === true) {
          return (
            character.location.name.toLocaleLowerCase() ===
            character.origin.name.toLocaleLowerCase()
          );
        } else {
          return character;
        }
      });
    setByOrder(newData);
    if (newData.length === 0) {
      const noData = [
        {
          name: 'There are no characters that match the requested filters.',
          image: 'https://www.villas4u.com/assets/img/image-not-found.svg',
          species: 'Not Found',
        },
      ];
      setFilteredListCharacters(noData);
    } else {
      setFilteredListCharacters(newData);
    }
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
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds">
        <Header />
        <main id="main">
          <Loading loading={isLoading} />

          <Filters
            value={searchWord}
            handleSearch={handleSearch}
            searchGender={searchGender}
            searchStatus={searchStatus}
            searchEqual={searchEqual}
          />
          <NavPage
            pageNum={pageNum}
            numberOfPages={numberOfPages}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            handlePageInput={handlePageInput}
          />
          <CharacterList
            data={filteredListCharacters}
            searchWord={searchWord}
            characterId={characterId}
          />
          <NavPage
            pageNum={pageNum}
            numberOfPages={numberOfPages}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            handlePageInput={handlePageInput}
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
    </div>
  );
}

export default App;

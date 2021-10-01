//React / npm
import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { v4 as uuid } from 'uuid'; // al generar id={uuid()}
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
import NotFoundPage from './secondary-components/NotFoundPage';
import CharacterDetail from './CharacterDetail';
import Filters from './Filters';
import CharacterList from './CharacterList';

function App() {
  //useState

  //useEffect
  useEffect(
    callToApi().then((response) => {
      console.log(response);
    }),
    []
  );
  //useRef
  const routeData = useRouteMatch('/character-detail/:characterId');
  const characterId = routeData !== null ? routeData.params.productId : '';
  //pendiente introducir numero id con find() tras callToApi

  //handles

  //renders

  return (
    <div className="page">
      <Header productId="321" />
      <main>
        <h1>Bienvenid@, encuentra tu(s) personaje(s) favorito(s)</h1>
        <Filters></Filters>
        <CharacterList />
        <Switch>
          <Route path="/" exact></Route>
          <Route path="/character-detail/:characterId">
            <CharacterDetail characterId={characterId} />
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

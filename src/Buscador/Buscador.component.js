import { BrowserRouter, Route, Switch } from 'react-router-dom';

import React from 'react';
import BuscadorBox from './BuscadorBox';
import BuscadorDetailsContainer from './BuscadorDetails.container';
import BuscadorResultsContainer from './BuscadorResults.container';
import './Buscador.scss'

const Buscador = () => {
  return (
    <section className="Buscador__Container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={BuscadorBox} />
          <Route path="/items/search/:term" exact component={BuscadorResultsContainer}/>
          <Route path="/items/:id" exact component={BuscadorDetailsContainer} />
        </Switch>
      </BrowserRouter>
    </section>
  );
};

export default Buscador;
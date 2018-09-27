import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import App from './components/App';
import Home from './routes/Home';

const Router = () => (
  <Main>
    <BrowserRouter>
      <Switch>
        <App>
          <Route exact path="/" component={Home} />
        </App>
      </Switch>
    </BrowserRouter>
  </Main>
);

export default Router;

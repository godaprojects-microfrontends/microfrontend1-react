import React from 'react';
import { Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import { createBrowserHistory } from 'history';
import logo from './logo.svg';
import './App.css';
import Microfrontend1 from './Microfrontend1'

const aSampleClass = styled.div`
  background-color: antiquewhite;
`;

const defaultHistory = createBrowserHistory();


const App = ({ history = defaultHistory }) => (
  <Router history={history}>
    <aSampleClass>
      <Route exact path="/microfrontend1" component={Microfrontend1} />
    </aSampleClass>
  </Router>
)


export default App;

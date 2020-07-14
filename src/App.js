import React from 'react';
import { Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import { createBrowserHistory } from 'history';
import Microfrontend1 from './Microfrontend1'

const defaultHistory = createBrowserHistory();

export default class App extends React.Component {
    
  constructor(props) {
    super(props)
    this.state = { results: props } ;
  }

  render(){
    return (
      <Microfrontend1 data={this.props}/>
    )
  }
}




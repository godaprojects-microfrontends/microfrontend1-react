import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.renderMicrofrontend1 = (containerId, history, data) => {
  ReactDOM.render(
    <React.StrictMode>
      <App data={data}/>
    </React.StrictMode>,
    document.getElementById(containerId)
  );  
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
}

window.unmountMicrofrontend1 = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};




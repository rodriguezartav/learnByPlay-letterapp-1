import React from 'react';
import ReactDOM from 'react-dom';
import App from './container';
import { AppContainer } from 'react-hot-loader';
import Business from './business';

const render = (Component) => {

  ReactDOM.render(
    <AppContainer>
      <App {...window.__APP_INITIAL_STATE__} />
    </AppContainer>

   , document.getElementById('app')
  );
};

render(App);

if (module.hot){
  module.hot.accept('./container', () => {
    render(App);
  })
}

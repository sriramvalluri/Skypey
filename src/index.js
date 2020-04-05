import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import store from './store';
import * as serviceWorker from './serviceWorker';
//import registerServiceWorker from "./registerServiceWorker";

const render = () => {
  fancyLog();
  return ReactDOM.render(
    <App />,
  document.getElementById('root')
);
};

function fancyLog() {
  console.log("%c Rendered with ? ??", "background: purple; color: #FFF");
  console.log(store.getState());
}

render();
store.subscribe(render);
//registerServiceWorker();
serviceWorker.register();



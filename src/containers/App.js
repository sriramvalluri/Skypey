import React from 'react';
import './App.css';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import store from '../store/index.js';
import _ from 'lodash';

const App = () => {
  const { user, contacts, activeUserId } = store.getState();
  
  return (
    <div className="App">
      <Sidebar key={1} contacts = {_.values(contacts)} />
      <Main key={2} user={user} activeUserId= {activeUserId} />
    </div>
  );
}

export default App;

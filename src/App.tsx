import React from 'react';
import Router from './router/router';
import request from './utils/request'

function App() {
  request.get('1')
  return (
    <div className="App">
      <Router></Router>
    </div>
  );
}

export default App;

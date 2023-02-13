import React from 'react';
import Router from './router/router';

function App() {
  console.log(process.env.REACT_APP_TITLE)
  return (
    <div className="App">
      <Router></Router>
    </div>
  );
}

export default App;

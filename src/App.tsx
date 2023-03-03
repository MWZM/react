import Router from './router/router';

function App() {
  console.log(process.env.REACT_APP_TITLE)
  return (
    <Router></Router>
  );
}

export default App;

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Router from './router/router';

function App() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    console.log('navigate')
  },[location.pathname])
  
  return (
    <div className="App">
      <Router></Router>
    </div>
  );
}

export default App;

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Router from './router/router';

function App() {
  const location = useLocation()
  const navigate = useNavigate()

  // 这里目前的想法就是利用 useEffect 副作用，当 location 的路径发生变化时进行 做出路由判断
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

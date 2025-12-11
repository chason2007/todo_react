import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './Common/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;

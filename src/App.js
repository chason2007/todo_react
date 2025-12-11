import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './Common/Header';
import Tasks from './Pages/Tasks';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
      <Tasks></Tasks>
    </div>
  );
}

export default App;

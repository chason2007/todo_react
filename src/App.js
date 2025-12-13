import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './Common/Header';
import { TaskProvider } from './context/TaskContext';

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </TaskProvider>
  );
}

export default App;

import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './Common/Header';
import { TaskProvider } from './context/TaskContext';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.body.classList.add('dark-mode');
  }, []);

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

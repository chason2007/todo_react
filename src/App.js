import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './Common/Header';
import { useEffect, useState } from 'react';

function App() {
  let [data,setData]=useState([]);
  useEffect(()=>{
    const fetchData=async()=>{
      const res=await fetch('http://localhost:3000/Tasks.json');
      const json=await res.json();
      setData(json);
    }
    fetchData()
  },[])

  return (
    <div className="App">
      <Header></Header>
      <Outlet 
      context={{
        data
      }}></Outlet>
    </div>

  );
}

export default App;

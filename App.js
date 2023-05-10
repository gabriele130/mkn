import './App.css';
import React from 'react';
import Navbar from './Components/NavBar';
import Sidebar from './Components/SideBar';
import { ReactDOM } from 'react';

function App() {
  return (
    <div className="App">
      <React.StrictMode>
      <Navbar />
      <Sidebar/>
      </React.StrictMode>
      
    </div>
  );
}

export default App;

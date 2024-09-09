import React from 'react';
import Sidebar from './components/Sidebar';
import Forecast from './components/Forecast';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Forecast />
    </div>
  );
}

export default App;

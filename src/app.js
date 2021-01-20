import React from 'react';
import Alarm from './components/alarm';
import Calendar from './components/calendar';
import './app.css';

function App() {
  return (<div className="app">
    <Alarm />
    <Calendar />
  </div>);
};

export default App;
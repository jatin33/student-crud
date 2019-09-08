import React from 'react';
import './App.css';
import StudentCard from './components/StudentCard/StudentCard';

function App() {
  return (
    <div className="App">
      <h1 className="banner">STUDENT PROFILE EDITOR</h1>
      <StudentCard />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import StudentCard from './components/StudentCard/StudentCard';
import FloatingLabelInput from './components/FloatingLabelInput/FloatingLabelInput';

function App() {
  return (
    <div className="App">
      <h1 className="banner">STUDENT PROFILE EDITOR</h1>
      {/* <StudentCard /> */}
      <FloatingLabelInput field={"Email"} />
    </div>
  );
}

export default App;

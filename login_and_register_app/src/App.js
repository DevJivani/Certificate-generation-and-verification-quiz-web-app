import React, { useState } from 'react';
import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Quiz from './Quiz';
import Certificate from './components/certificate/Certificate';
function App() {
  const [user, setLoginUser] = useState({});

  return (
    <div className="App">
 <Router>
        <Routes>
          <Route exact path="/" element={<Login setLoginUser={setLoginUser} />} />
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/homepage" element={<Homepage setLoginUser={setLoginUser} />} />
          <Route path="/Quiz" element={<Quiz setLoginUser={setLoginUser} />} />
          <Route path="/certificate/:email" element={<Certificate/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

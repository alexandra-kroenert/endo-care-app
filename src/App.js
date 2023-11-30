import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './pages/Home/Home';
import Endometriosis from './pages/Endometriosis/Endometriosis';
import SymptomTracker from './pages/Tracker/SymptomTracker.js';
import Profile from './pages/Profile/Profile';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';

function App() { 
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/endometriosis" element={<Endometriosis />} />
          <Route path="/tracker" element={<SymptomTracker />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import LoginScreen from './pages/login';
import Registration from './pages/register';
import Package from './pages/sendPackage';
import "./css/App.css";
import ProfilePage from './pages/profile';
import {Shop} from './pages/shop';

const App = () => {
  return (
    <Router>
      <div className="app-container"> {/* Wrap header and routes in a container */}
        <Header />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<About />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/Send Package" element={<Package />} />
          <Route path="/Shop" element={<Shop />} />
    
        </Routes>
      </div>
    </Router>
  );
};

export default App;

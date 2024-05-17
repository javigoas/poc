import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Clasificaciones from './components/Clasificaciones';
import Jornadas from './components/Jornadas';
import LoginModal from './components/LoginModal';
import styled from 'styled-components';

function App() {
 
 
 
  return (
    <Router>
      <StyledWrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/clasif" element={<Clasificaciones/>} />
          <Route path="/jornadas" element={<Jornadas/>} />
          <Route path="/login-modal" element={<LoginModal/>} />
        </Routes>        
      </StyledWrapper>
    </Router>
  );
}

const StyledWrapper = styled.div``

export default App;

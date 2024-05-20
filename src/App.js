import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Clasificaciones from './components/Clasificaciones';
import Jornadas from './components/Jornadas';
import LoginModal from './components/LoginModal';
import styled from 'styled-components';

function App() {
  const [isClicked, setIsClicked] = useState(false);

  const handleBurguerClick = () => {
    setIsClicked(!isClicked);
  };

 return (
    <Router>
      <StyledWrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home clicked={isClicked}/>} />
          <Route path="/clasif" element={<Clasificaciones clicked={isClicked}/>} />
          <Route path="/jornadas" element={<Jornadas clicked={isClicked}/>} />
          <Route path="/login-modal" element={<LoginModal clicked={isClicked}/>} />
        </Routes>        
      </StyledWrapper>
    </Router>
  );
}

const StyledWrapper = styled.div``

export default App;

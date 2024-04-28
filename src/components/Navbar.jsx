import React, {useState} from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'
import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect';

function Navbar() {

   const [clicked, setClicked] = useState(false)
   const [userLoged, setUserLoged] = useState(false)
   const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa      
    setClicked(!clicked)
   }
   const handleAccessClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
    //setUserLoged(!userLoged)    
}

  

  return (
    <>
        <NavContainer>
            <h2>Liga de tenis <span>Málaga</span></h2>
            <div className={`links ${clicked ? 'active' : ''}`}>
                <Link onClick={handleClick} to="/" href="#h">Home</Link>
                <Link onClick={handleClick} to="/clasif" href="#h">Clasificaciones</Link>
                <Link onClick={handleClick} to="/jornadas" href="#h">Jornadas</Link>
                <Link onClick={handleAccessClick} to="/acceso" href="#h">Acceso</Link>
                {userLoged && <Link onClick={handleClick} to="/upload-results" href="#h">Subir resultados</Link>}
            </div>
            
               <div className='burguer'>
                 <BurguerButton clicked={clicked} handleClick={handleClick} />
               </div>
            
            <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
        </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
  h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    @media(max-width: 768px){
      width: 100%;
      display: block;
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      top: 30%;
      left: 0;
      right: 0;
      text-align: center;
      a{
        font-size: 2rem;
        margin-top: 1rem;
        color: white;
      }
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
    z-index: 0;
  }
`

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    @media(max-width: 768px){
      border-radius: 0 0 80% 0;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`
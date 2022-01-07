import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormPage';
import './Navigation.css';
import logo from '../../images/768px-Flickr_dots.svg.png'

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <div className='login-signup-container'>
        <NavLink className="signup" to="/signup">Sign Up</NavLink>
        <LoginFormModal />
        </div>
      </>
    );
  }

  return (
    <>
      <div className='logo-pupr'>
        <img className="dotsLogo" src={logo} height={30} width={30} alt=""/>
        <NavLink className="puprLink" exact to="/">Pupr</NavLink>
      </div>
        {isLoaded && sessionLinks}
    </>

  );
}

export default Navigation;

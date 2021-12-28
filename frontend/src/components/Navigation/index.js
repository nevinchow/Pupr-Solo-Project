import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormPage';
import './Navigation.css';

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
        <LoginFormModal />
        <NavLink className="signup" to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <>
        <NavLink className="puprLink" exact to="/">Pupr</NavLink>
        {isLoaded && sessionLinks}
    </>

  );
}

export default Navigation;

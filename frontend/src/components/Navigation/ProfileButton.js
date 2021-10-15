import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css'
import { useHistory } from 'react-router'

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = async (e) => {
    e.preventDefault();
    const logout = await dispatch(sessionActions.logout());
    if (logout) {
    history.push('/')
    }
  };

  return (
    <>
      <button className="userButton" onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <div class="infoContainer">
        <ul className="profile-dropdown">
          <li className="infoList">{user.username}</li>
          <li className="infoList">{user.email}</li>
          <li className="infoList">
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
        </div>
      )}
    </>
  );
}

export default ProfileButton;

import React, { useReducer, useState } from 'react';
import { Modal } from '../../context/Modal';
import * as sessionActions from '../../store/session'
import { useDispatch } from "react-redux";
import './SuggestionContainer.css'
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import logo from '../../images/github-logo.png'
import logo2 from '../../images/linkedin-logo.png'



function SuggestionContainer() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/api/photos/upload" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.login({credential: 'demo-user', password: '123456'})).catch(
          async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors)

          }
        )
      }

    return (
      <div className='background'>
        <div>
            <h1 className='head1'>Welcome To Pupr!</h1>
            <h3 className='head2'>Pupr, a Flickr clone, is a photo-sharing website where people can upload </h3>
            <h3 className='head3'>photos of their pets or any animals for other people to view.</h3>
            <button className="demoButton" onClick={handleSubmit}>Sign In as a Demo User</button>
            <div className='footer'>
              <h2 className='footerTitle'>Made By: Nevin Chow</h2>
              <img class="githubLogo" src={logo} height={40} width={40}/>
              <a className="gitLink"href='https://github.com/nevinchow'>Github</a>
              <img class="linkedinLogo" src={logo2} height={40} width={40}/>
              <a className="linkedLink" href='https://www.linkedin.com/in/nevin-chow-aa4770221/'>LinkedIn</a>
            </div>
        </div>
      </div>
    )
}


export default SuggestionContainer

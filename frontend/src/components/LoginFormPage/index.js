import React, { useReducer, useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import * as sessionActions from '../../store/session'
import { useDispatch } from "react-redux";
import './LoginForm.css'


function LoginFormModal() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState([]);

  return (
    <>
      <button className="loginButton" onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}

    </>
  );
}

export default LoginFormModal;

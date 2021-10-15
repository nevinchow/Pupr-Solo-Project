import React, { useReducer, useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import * as sessionActions from '../../store/session'
import { useDispatch } from "react-redux";


function LoginFormModal() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState([]);

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
    <>
      <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
      <button onClick={handleSubmit}>Demo User</button>
    </>
  );
}

export default LoginFormModal;

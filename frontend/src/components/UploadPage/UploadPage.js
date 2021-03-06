import './UploadPage.css'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import React from 'react'
import { useHistory } from 'react-router'
import { uploadPhotos } from '../../store/photo'
import { useSelector } from 'react-redux'


function UploadPage() {
    const dispatch = useDispatch();
    const [file, setFile] = useState("")
    const history = useHistory();
    const user = useSelector(state => state.session.user)
    const [errors, setErrors] = useState([]);
    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setFile(file);
      };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            file,
            userId: user.id
        }
        setErrors([])
        let newImage = await dispatch(uploadPhotos(payload)).catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
        })
            if (newImage) {
                history.push(`/api/photos/`)
            }
    }

    return (
        <div className='uploadBackground'>
            <div className='uploadContainer'>
            <h2 className='header1'>
                Welcome to Pupr!
            </h2>
            <ul className= 'uploadError'>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
            <h3 className='header2'>
                Please provide a link to photo to upload:
            </h3>
            <form >
                    <input
                    className="imageUrlInput"
                    name='file'
                    type="file"
                    onChange={updateFile}
                    />
                <button className="uploadButton"type='submit' onClick={handleSubmit}>Upload</button>
            </form>
            </div>
        </div>

    )
}

export default UploadPage

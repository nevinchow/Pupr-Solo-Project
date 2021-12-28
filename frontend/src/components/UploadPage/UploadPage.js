import './UploadPage.css'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import React from 'react'
import { useHistory } from 'react-router'
import { uploadPhotos } from '../../store/photo'
import { useSelector } from 'react-redux'
import logo from '../../images/github-logo.png'
import logo2 from '../../images/linkedin-logo.png'


function UploadPage() {
    const dispatch = useDispatch();
    const [imageUrl, setImageUrl] = useState("")
    const history = useHistory();
    const user = useSelector(state => state.session.user)
    const [errors, setErrors] = useState([]);



    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            imageUrl,
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
                    placeholder='Image URL'
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    />
                <button className="uploadButton"type='submit' onClick={handleSubmit}>Upload</button>
            </form>
            </div>
            <div className='footer-2'>
              <h2 className='footerTitle'>Made By: Nevin Chow</h2>
              <img className="githubLogo" src={logo} height={40} width={40} alt=""/>
              <a className="gitLink"href='https://github.com/nevinchow'>Github</a>
              <img className="linkedinLogo" src={logo2} height={40} width={40} alt=""/>
              <a className="linkedLink" href='https://www.linkedin.com/in/nevin-chow-aa4770221/'>LinkedIn</a>
            </div>
        </div>

    )
}

export default UploadPage

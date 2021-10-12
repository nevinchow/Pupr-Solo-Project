import './UploadPage.css'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import React from 'react'
import * as photoActions from "../../store/photo"
import { useHistory } from 'react-router'
import { uploadPhotos } from '../../store/photo'
import { useSelector } from 'react-redux'


function UploadPage() {
    const dispatch = useDispatch();
    const [imageUrl, setImageUrl] = useState("")
    const history = useHistory();
    const user = useSelector(state => state.session.user)



    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            imageUrl,
            userId: user.id
        }
        let newImage = await dispatch(uploadPhotos(payload))
        if (newImage) {
            history.push(`/api/photos/`)
        }
    }

    return (
        <div>
            <h2>
                You can upload 999 more photos and videos.
            </h2>
            <h3>
                Drag & drop photos and videos here
            </h3>
            <form >
                <label>
                    Image URL:
                    <input type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    />
                </label>
                <button type='submit' onClick={handleSubmit}>Upload</button>
            </form>
        </div>
    )
}

export default UploadPage

import './UploadPage.css'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import React from 'react'
import * as photoActions from "../../store/photo"


function UploadPage() {
    const dispatch = useDispatch();
    const [imageUrl, setImageUrl] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        return dispatch(photoActions.uploadPhotos({imageUrl}))
    }
    return (
        <div>
            <h2>
                You can upload 999 more photos and videos.
            </h2>
            <h3>
                Drag & drop photos and videos here
            </h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Image URL:
                    <input type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    />
                </label>
                <button type='submit'>Upload</button>
            </form>
        </div>
    )
}

export default UploadPage

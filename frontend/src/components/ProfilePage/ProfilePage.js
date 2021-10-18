import { useEffect } from "react"
import { getPhotos } from "../../store/photo"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import EditPhotoForm from "../EditPhotoForm/EditPhotoForm";
import PhotoTile from "../PhotoTile/PhotoTile";
import { removePhoto } from "../../store/photo";
import { Redirect, useHistory } from 'react-router'
import AlbumContainer from "../AlbumContainer/AlbumContainer";
import './ProfilePage.css'

function ProfilePage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const photos = useSelector(state => (Object.values(state.photo)))
    const user = useSelector(state => state.session.user)

    const [showEditPhotoForm, setShowEditPhotoForm] = useState(false)
    const [photoId, setPhotoId ] = useState("")

    const onClick = (e, photo) => {
        setShowEditPhotoForm(true)
        setPhotoId(photo.id)
    }

    const handleDeleteItem = async (e, photo) => {
        setPhotoId(photo.id)
        await dispatch(removePhoto(photo.id))

        history.push('/api/photos')
    }

    useEffect(() => {
        setShowEditPhotoForm(false);
        if (user) {
            dispatch(getPhotos(user.id))
        } else {
            history.push('/')
        }
    }, [dispatch, user.id])


    let content = null;


    if (showEditPhotoForm) {
        content = (
            <EditPhotoForm photoId={photoId} photos={photos} hideForm={() => setShowEditPhotoForm(false)} />
        )
    }
    return (
          <div className="pageContainer">
              <AlbumContainer/>
                <div className="tileContainer">
                    {photos.map((photo) =>
                    <>
                    <PhotoTile
                    key={photo.id}
                    photo={photo}
                    onClick={(e) => {onClick(e,photo)}}
                    />
                    <button className="deleteButton1" onClick={(e) => {handleDeleteItem(e, photo)}}>Delete</button>
                    </>
                    )}
                    {content}
                </div>

          </div>

    )

}


export default ProfilePage

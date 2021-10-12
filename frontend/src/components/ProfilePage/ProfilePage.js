import { useEffect } from "react"
import { getPhotos } from "../../store/photo"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import EditPhotoForm from "../EditPhotoForm/EditPhotoForm";



function ProfilePage() {
    const dispatch = useDispatch();
    const photos = useSelector(state => (Object.values(state.photo)))
    const user = useSelector(state => state.session.user)
    const [showEditPhotoForm, setShowEditPhotoForm] = useState(false)


    useEffect(() => {
        setShowEditPhotoForm(false);
        dispatch(getPhotos())
    }, [dispatch])


    let content = null;


    if (showEditPhotoForm) {
        content = (
            <EditPhotoForm photo={photos.id} hideForm={() => setShowEditPhotoForm(false)} />
        )
    }
    return (
          (
                <div>
                    {photos.map((photo) =>
                    <a href={`http://localhost:3000/api/photos/${photo.id}`}>
                    <img key={photo.id} src={`${photo.imageUrl}` }/>
                    {(!showEditPhotoForm) && (
                    <button onClick={() => setShowEditPhotoForm(true)}>Edit</button>
          )}
                </a>
                    )}
                </div>
            )

    )

}


export default ProfilePage

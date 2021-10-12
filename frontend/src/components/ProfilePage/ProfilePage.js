import { useEffect } from "react"
import { getPhotos } from "../../store/photo"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import EditPhotoForm from "../EditPhotoForm/EditPhotoForm";
import PhotoTile from "../PhotoTile/PhotoTile";


function ProfilePage() {
    const dispatch = useDispatch();

    const photos = useSelector(state => (Object.values(state.photo)))
    const user = useSelector(state => state.session.user)

    const [showEditPhotoForm, setShowEditPhotoForm] = useState(false)


    useEffect(() => {
        setShowEditPhotoForm(false);
        dispatch(getPhotos(user.id))
    }, [dispatch, photos.id])


    let content = null;


    if (showEditPhotoForm) {
        content = (
            <EditPhotoForm photos={photos} hideForm={() => setShowEditPhotoForm(false)} />
        )
    }
    return (
          (
                <div>
                    {photos.map((photo) =>
                    <PhotoTile
                    key={photo.id}
                    photo={photo}
                    onClick={() => setShowEditPhotoForm(true)}
                    />
                    )}
                    {content}
                </div>
            )

    )

}


export default ProfilePage

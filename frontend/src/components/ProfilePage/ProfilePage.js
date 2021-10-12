import { useEffect } from "react"
import { getPhotos } from "../../store/photo"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


function ProfilePage() {
    const dispatch = useDispatch();
    const photos = useSelector(state => (Object.values(state.photo)))
    const user = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch])


    return (
        <div>
            {photos.map((photo) =>
            <a href={`http://localhost:3000/api/photos/${photo.id}/edit`}>
            <img key={photo.id} src={`${photo.imageUrl}` }/>
        </a>
            )}
        </div>
    )
}


export default ProfilePage

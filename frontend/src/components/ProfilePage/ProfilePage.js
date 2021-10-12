import { useEffect } from "react"
import { getPhotos } from "../../store/photo"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function ProfilePage() {
    const dispatch = useDispatch();
    const photos = useSelector(state => (Object.values(state.photo)))

    console.log(photos)

    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch])

    return (
        <div>
            {photos.map((photo) => <img key={photo.id} photo={photo} src={photo.imageUrl} alt="dog"/>)}
        </div>
    )
}


export default ProfilePage

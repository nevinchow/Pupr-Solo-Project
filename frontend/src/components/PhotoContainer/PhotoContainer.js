import styles from './PhotoContainer.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPhotos } from '../../store/photo';


const PhotoContainer = () => {
    const dispatch = useDispatch();
    const photos = useSelector((state) => Object.values(state.photos))

    useEffect(() => {
        dispatch(getPhotos());
    }, [dispatch])

    return (
        <div>
            {photos.map((photo) =>
                <img key={photo.id} photo={photo} src={`${photo.imageUrl}`}/>
            )}
        </div>
    )
}

import styles from './PhotoContainer.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getPhotos } from '../../store/photo';


const PhotoContainer = () => {
    const dispatch = useDispatch();
    const photos = useSelector((state) => Object.values(state.photos))

    useEffect(() => {
        dispatch(getPhotos());
    }, [dispatch])

    return (
        <div>
            <a>
                {photos.map((photo) => <a key={photo.id} photo={photo} />)}
            </a>
        </div>
    )
}

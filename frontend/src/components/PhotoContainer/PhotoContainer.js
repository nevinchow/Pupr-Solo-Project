import styles from './PhotoContainer.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPhotos } from '../../store/photo';
import { useHistory } from 'react-router';


const PhotoContainer = () => {
    const dispatch = useDispatch();
    const photos = useSelector((state) => Object.values(state.photos))
    const user = useSelector(state => state.session.user)
    const history = useHistory();

    useEffect((user) => {
        dispatch(getPhotos(user.id));
    }, [dispatch])


    const redirect = () => {
        console.log('hello')
    }

    return (
        <div>
            {photos.map((photo) =>
                <a href={`http://localhost:3000/api/photos/${photo.id}`}>
                    <img onClick={redirect} key={photo.id} src={`${photo.imageUrl}` }/>
                </a>

            )}
        </div>
    )
}


export default PhotoContainer

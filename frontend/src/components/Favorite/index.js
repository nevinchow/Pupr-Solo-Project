import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router'
import { getFavoritePhotos } from "../../store/photo";

function Favorite({album}) {
    const dispatch = useDispatch()
    const history = useHistory();

    const onClick = async(e) => {

        await dispatch(getFavoritePhotos())
        history.push('/api/photos')
    }




    return (
        <div className="indivdiualAlbumContainer">
             <a className="album"onClick={onClick} key={album.id}>{album.name}</a>
        </div>
    )
}


export default Favorite

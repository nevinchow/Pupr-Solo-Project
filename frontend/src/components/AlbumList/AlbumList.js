import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router'
import { getPhotosByAlbumId } from "../../store/album";
import { removeAlbum } from "../../store/album";
import "./AlbumList.css"


function AlbumList({album}) {
    const dispatch = useDispatch()
    const history = useHistory();

    const onClick = async(e) => {

        await dispatch(getPhotosByAlbumId(album.id))
    }

    const handleDeleteItem = async (e, album) => {
        await dispatch(removeAlbum(album.id))
        history.push('/api/photos')
    }



    return (
        <div className="indivdiualAlbumContainer">
             <a className="album"onClick={onClick} key={album.id}>{album.name}</a>
             <button className="deleteAlbumButton" onClick={(e) => {handleDeleteItem(e, album)}}>Delete</button>
        </div>
    )
}


export default AlbumList

import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router'
import { getPhotosByAlbumId } from "../../store/album";
import { removeAlbum } from "../../store/album";


function AlbumList({album}) {
    const dispatch = useDispatch()
    const history = useHistory();
    const user = useSelector(state => state.session.user)

    const onClick = async(e) => {

        await dispatch(getPhotosByAlbumId(album.id))
    }

    const handleDeleteItem = async (e, album) => {
        await dispatch(removeAlbum(album.id))
        console.log(album)
        history.push('/api/photos')
    }



    return (
        <div>
             <span onClick={onClick} key={album.id} href={``} >{album.name}</span>
             <button onClick={(e) => {handleDeleteItem(e, album)}}>Delete</button>
        </div>
    )
}


export default AlbumList

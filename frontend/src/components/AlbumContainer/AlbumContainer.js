import React from "react";
import {useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAlbums } from "../../store/album";
import AlbumList from "../AlbumList/AlbumList";
import { useState } from "react";
import { createAlbum } from "../../store/album";
import { useHistory } from 'react-router'


function AlbumContainer() {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user)
    const albums = useSelector(state => Object.values(state.album))
    const [name, setName] = useState("")

    useEffect(() => {
        dispatch(getAlbums())
    }, [dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            name,
            userId: user.id
        }
        let newAlbum = await dispatch(createAlbum(payload))
        if (newAlbum) {
            history.push(`/api/photos/`)
        }
    }


    return (
        <div>
            <input type="text"
             placeholder="Add an album"
             value= {name}
             onChange= {(e) => setName(e.target.value)}
             ></input>
            <button
            type="submit"
            onClick={handleSubmit}
            >+</button>
            {albums.map((album) => <AlbumList key={album.id} album={album}/>)}
        </div>
    )
}


export default AlbumContainer

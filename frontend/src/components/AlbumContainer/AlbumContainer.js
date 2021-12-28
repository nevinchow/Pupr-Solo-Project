import React from "react";
import {useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAlbums } from "../../store/album";
import AlbumList from "../AlbumList/AlbumList";
import { useState } from "react";
import { createAlbum } from "../../store/album";
import { useHistory } from 'react-router'
import "./AlbumContainer.css"


function AlbumContainer() {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user)
    const userId = user?.id
    const albums = useSelector(state => Object.values(state.album))
    const filteredAlbums = albums.filter((album) => album.userId === userId)
    const [name, setName] = useState("")
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        dispatch(getAlbums())
    }, [dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            name,
            userId: user.id
        }
        setErrors([]);
        let newAlbum = await dispatch(createAlbum(payload)).catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors)
        })
        if (newAlbum) {
            history.push(`/api/photos/`)
        }
    }


    return (
        <div className="albumListContainer">
            <input className='albumInput' type="text"
             placeholder="Add an album"
             value= {name}
             onChange= {(e) => setName(e.target.value)}
             ></input>
            <button
            className="addAlbumButton"
            type="submit"
            onClick={handleSubmit}
            >+</button>
             <ul className= 'uploadAlbumError'>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
            {filteredAlbums.map((album) => <AlbumList key={album.id} album={album} />)}
        </div>
    )
}


export default AlbumContainer

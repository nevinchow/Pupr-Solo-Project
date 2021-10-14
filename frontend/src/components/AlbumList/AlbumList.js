import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router'


function AlbumList({album}) {
    const dispatch = useDispatch()
    const history = useHistory();
    const [albumId, setAlbumId ] = useState("")
    const user = useSelector(state => state.session.user)

    const onClick = async(e) => {
        setAlbumId(album.id)
    }

    // useEffect(() => {
    //     dispatch(getPhotos(user.id, album.id))
    // }, [dispatch, album.id])


    return (
        <div>
             <a onClick={onClick} key={album.id} href={`http://localhost:3000/api/albums/${album.id}`}>{album.name}
                            </a>
        </div>
    )
}


export default AlbumList

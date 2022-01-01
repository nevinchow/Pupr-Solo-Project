import React from "react";
import "./PhotoTile.css"
import { useDispatch } from "react-redux";
import { makeFavorite } from "../../store/photo";

function PhotoTile({photo, onClick}) {
    const dispatch = useDispatch();
    const photoId = photo.id
    const handleFavorite = async (e) => {
        e.preventDefault();
        const payload = {
            photoId

        };
        await dispatch(makeFavorite(payload))


    }
    return (
        <div className="photoTileContainer">
            <div className="photo-tile">
                            <img className="photo" key={photo.id} src={`${photo.imageUrl}`} alt=""/>
                            <button className="editButton" onClick={onClick}>Edit</button>
                            {photo.favorite === false ?
                            <i class="far fa-heart" onClick={(e) => {handleFavorite(e, photo)}} ></i> :
                            <i class="fas fa-heart" onClick={(e) => {handleFavorite(e, photo)}} ></i>
                            }

            </div>
        </div>
    )
}

export default PhotoTile

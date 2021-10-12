import React from "react";
import "./PhotoTile.css"

function PhotoTile({photo, onClick}) {
    return (
        <div className="photoTileContainer">
            <div className="photo-tile">
                <a key={photo.id} href={`http://localhost:3000/api/photos/${photo.id}`}>
                            <img className="photo" key={photo.id} src={`${photo.imageUrl}` }/>
                            </a>
                            <button className="editButton" onClick={onClick}>Edit</button>
                            <button className="deleteButton">Delete</button>
            </div>

        </div>
    )
}

export default PhotoTile

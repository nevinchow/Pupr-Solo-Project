import React from "react";
import "./PhotoTile.css"

function PhotoTile({photo, onClick}) {
    return (
        <div className="photoTileContainer">
            <div className="photo-tile">
                            <img className="photo" key={photo.id} src={`${photo.imageUrl}`} alt=""/>

                            <button className="editButton" onClick={onClick}>Edit</button>
            </div>
        </div>
    )
}

export default PhotoTile

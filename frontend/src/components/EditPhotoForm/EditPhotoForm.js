import { editPhotos } from "../../store/photo";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import './EditPhotoForm.css'


function EditPhotoForm({photos, hideForm, photoId}) {
    const dispatch = useDispatch();
    const albums = useSelector(state => Object.values(state.album))
    const [imageUrl, setImageUrl] = useState(photos.imageUrl)
    const [albumName, setAlbumName ] = useState("")
    const updateImageUrl = (e) => setImageUrl(e.target.value)
    const updateAlbumName = (e) => setAlbumName(e.target.value)



    const handleSubmit = async(e) => {
        e.preventDefault();

        const payload = {
            ...photos,
            photoId,
            imageUrl,
            albumName

        };
        let updatedPhoto = await dispatch(editPhotos(payload))
        if (updatedPhoto) {
            hideForm();
        }
    }


    const handleCancelClick = (e) => {
        e.preventDefault();
        hideForm();
      };

    return (
        <div className="editPhotoFormContainer">
        <section>
            <form onSubmit={handleSubmit}>
                <input
                className="editURL"
                type="imageUrl"
                placeholder="Image URL"
                value={imageUrl}
                onChange={updateImageUrl} />
                <select
                className="dropdown"
                value={albumName}
                onChange={updateAlbumName}>
                    <option value="">Select an Album</option>
                    {albums.map((album) => <option key={album.id} value={album.name} >{album.name}</option>)}
                </select>
                <button className="updatePhotoButton" type="submit">Update Photo</button>
                <button className="cancelUpdateButton" type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </section>
        </div>
    )
}




export default EditPhotoForm

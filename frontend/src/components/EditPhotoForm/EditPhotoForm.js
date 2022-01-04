import { editPhotos } from "../../store/photo";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import './EditPhotoForm.css'


function EditPhotoForm({photos, hideForm, photoId}) {
    const dispatch = useDispatch();
    const albums = useSelector(state => Object.values(state.album))
    const filteredAlbums = albums.filter((album) => album.id !== 1)
    const [imageUrl, setImageUrl] = useState(photos.imageUrl)
    const [file, setFile] = useState("")
    const [albumName, setAlbumName ] = useState("")
    const updateImageUrl = (e) => setImageUrl(e.target.value)
    const updateAlbumName = (e) => setAlbumName(e.target.value)

    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setFile(file);
      };

    const handleSubmit = async(e) => {
        e.preventDefault();

        const payload = {
            ...photos,
            photoId,
            albumName,
            file,
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
                name='file'
                type="file"
                onChange={updateFile} />
                <select
                className="dropdown"
                value={albumName}
                onChange={updateAlbumName}>
                    <option value="">Select an Album</option>
                    {filteredAlbums.map((album) => <option key={album.id} value={album.name} >{album.name}</option>)}
                </select>
                <button className="updatePhotoButton" type="submit">Update Photo</button>
                <button className="cancelUpdateButton" type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </section>
        </div>
    )
}




export default EditPhotoForm

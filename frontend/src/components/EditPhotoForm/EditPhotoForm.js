import { editPhotos } from "../../store/photo";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";


function EditPhotoForm({photos, hideForm, photoId}) {
    const dispatch = useDispatch();
    const [imageUrl, setImageUrl] = useState(photos.imageUrl)
    const updateImageUrl = (e) => setImageUrl(e.target.value)
    const handleSubmit = async(e) => {
        e.preventDefault();

        const payload = {
            ...photos,
            photoId,
            imageUrl,
        };
        // console.log(payload)
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
        <section>
            <form onSubmit={handleSubmit}>
                <input type="imageUrl"
                placeholder="ImageUrl"
                value={imageUrl}
                onChange={updateImageUrl} />
                <button type="submit">Update Photo</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </section>
    )
}




export default EditPhotoForm

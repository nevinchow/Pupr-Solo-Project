import { editPhotos } from "../../store/photo";
import { useDispatch } from "react-redux";
import { useState } from "react";

function EditPhotoForm({photos, hideForm}) {
    const dispatch = useDispatch();
    const [name, setName] = useState(photos.name)
    const updateName = (e) => setName(e.target.value)


    const handleSubmit = async(e) => {
        e.preventDefault();

        const payload = {
            ...photos,
            name
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
        <section>
            <form onSubmit={handleSubmit}>
                <input type="name"
                placeholder="Name"
                value={name}
                onChange={updateName} />
                <button type="submit">Update Photo</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </section>
    )
}




export default EditPhotoForm

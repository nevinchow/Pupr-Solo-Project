import { editPhotos } from "../../store/photo";
import { useDispatch } from "react-redux";

function EditPhotoForm({photos, hideForm}) {
    const dispatch = useDispatch();
    const handleSubmit = async(e) => {
        e.preventDefault();

        const payload = {
            ...photos,
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
                placeholder="Name" />
                <button type="submit">Update Photo</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </section>
    )
}




export default EditPhotoForm

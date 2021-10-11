
const LOAD_PHOTOS = 'photos/loadPhotos'

const loadPhotos = (photos) => ({
    type: LOAD_PHOTOS,
    photos,
})

export const getPhotos = () => async (dispatch) => {
    const reponse = await fetch('/api/photos')
    const photos = await reponse.json();
    dispatch(loadPhotos(photos))
}


const initialState = {};

const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PHOTOS:
            const newState = {...state};
            action.photos.forEach(photo => {
                newState[photo.id] = photo;
            });
            return newState;
        default:
        return state;
    }
}


export default photoReducer

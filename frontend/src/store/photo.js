
const LOAD_PHOTOS = 'photos/loadPhotos'
const ADD_PHOTOS = 'photos/addPhotos'
const SET_PHOTOS = 'photos/setPhotos'

const loadPhotos = (photos) => ({
    type: LOAD_PHOTOS,
    photos,
})

const addPhotos = (photos) => ({
    type: ADD_PHOTOS,
    photos,
})

const setPhotos = (photo) => ({
    type: SET_PHOTOS,
    payload: photo
})


export const getPhotos = () => async (dispatch) => {
    const reponse = await fetch('/api/photos')
    const photos = await reponse.json();
    dispatch(loadPhotos(photos))
}

export const uploadPhotos = (photos) => async (dispatch) => {
    const { imageUrl } = photos;
    const response = await fetch('/api/photos', {
    method: 'POST',
    body: JSON.stringify({
      imageUrl,
    }),
});
const data = await response.json();
dispatch(setPhotos(data.photo));
return response;
};


const initialState = {};

const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PHOTOS:
            let newState = {...state};
            action.photos.forEach(photo => {
                newState[photo.id] = photo;
            });
            return newState;
        // case SET_PHOTOS:
        //     newState = {...state}
        //     newState.photo = action.payload;
        default:
        return state;
    }
}


export default photoReducer

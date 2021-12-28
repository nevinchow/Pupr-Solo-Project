import { csrfFetch } from "./csrf"
import { LOAD_PHOTO_ALBUMS } from "./album"

const LOAD_PHOTOS = 'photos/loadPhotos'
const ADD_PHOTOS = 'photos/addPhotos'
const DELETE_PHOTOS = 'photos/deletePhotos'


const loadPhotos = (photos) => ({
    type: LOAD_PHOTOS,
    photos,
})

const addPhoto = (photo) => ({
    type: ADD_PHOTOS,
    photo,
})

const deletePhoto = (photo) => ({
    type: DELETE_PHOTOS,
    photo
})

export const removePhoto = (photoId) => async (dispatch)  => {
    const response = await csrfFetch(`/api/photos/${photoId}`, {
        method: "DELETE"
    });

    if (response.ok) {
        const photo = await response.json();
        dispatch(deletePhoto(photo))
        return photo
    }
}



export const getPhotos = () => async (dispatch) => {
    const reponse = await fetch(`/api/photos`)
    const photos = await reponse.json();
    dispatch(loadPhotos(photos))
}

export const getPhotosByAlbumId = (albumId) => async (dispatch) => {
    const response = await fetch(`/api/albums/${albumId}`)
    const photos = await response.json();
    dispatch(loadPhotos(photos))
}



export const uploadPhotos = (payload) => async (dispatch) => {
    const response = await csrfFetch('/api/photos', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(payload),
});
const photo = await response.json();
dispatch(addPhoto(photo));
return photo;
};

export const editPhotos = (payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/photos/${payload.photoId}/edit`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
    })
        if (response.ok) {
            const data = await response.json();
            dispatch(addPhoto(data))
            return data
        }
}


const initialState = {
};

const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PHOTOS:
            let newState = {...state};
            action.photos.forEach(photo => {
                newState[photo.id] = photo;
            });
            return newState;
        case LOAD_PHOTO_ALBUMS: {
            let newState = {};
            action.photos.forEach(photo => {
                newState[photo.id] = photo;
            });
            return newState
        }
        case ADD_PHOTOS:
            if (!state[action.photo.id]) {
                const newState = {
                    ...state,
                    [action.photo.id]: action.photo
                };
                return newState
            }
            return {
                ...state,
                [action.photo.id]: {
                    ...state[action.photo.id],
                    ...action.photo,
                }
            }
        case DELETE_PHOTOS: {
            const newState = {...state};
            delete newState[action.photo.id];
            return newState
        }

        default:
        return state;
    }
}


export default photoReducer

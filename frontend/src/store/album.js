import { csrfFetch } from "./csrf"
export const LOAD_ALBUMS = 'albums/loadAlbums'
export const LOAD_PHOTO_ALBUMS = 'albums/loadPhotoAlbums'

const ADD_ALBUM = 'albums/addAlbum'
const DELETE_ALBUMS = 'albums/deleteAlbums'

const loadAlbums = (albums) => ({
    type: LOAD_ALBUMS,
    albums,
})

const addAlbum = (album) => ({
    type: ADD_ALBUM,
    album
})

const loadPhotoAlbums = (photos) => ({
    type: LOAD_PHOTO_ALBUMS,
    photos
})

const deleteAlbum = (album) => ({
    type: DELETE_ALBUMS,
    album
})


export const getAlbums = () => async (dispatch) => {
    const response = await fetch('/api/albums')
    const albums = await response.json();
    dispatch(loadAlbums(albums))
}

export const createAlbum = (payload) => async (dispatch) => {
    const response = await csrfFetch('/api/albums', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(payload),
});
const album = await response.json();
dispatch(addAlbum(album));
return album;
}



export const getPhotosByAlbumId = (albumId) => async (dispatch) => {
    const response = await fetch(`/api/albums/${albumId}`)
    const photos = await response.json();
    dispatch(loadPhotoAlbums(photos))
}

export const removeAlbum = (albumId) => async (dispatch) => {
    const response = await csrfFetch(`/api/albums/${albumId}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        const album = await response.json();
        dispatch(deleteAlbum(album))
        return album
    }
}

const initialState = {};

const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ALBUMS:
            let newState = {...state};
            action.albums.forEach(album => {
                newState[album.id] = album;
            })
            return newState
        case ADD_ALBUM:
            if (!state[action.album.id]) {
                const newState = {
                    ...state,
                    [action.album.id]: action.album
                };
                return newState
            }
        case DELETE_ALBUMS: {
            const newState = {...state};
            delete newState[action.album.id];
            return newState
        }
        default:
            return state;
    }
}



export default albumReducer

import { csrfFetch } from "./csrf"
const LOAD_ALBUMS = 'albums/loadAlbums'
const ADD_ALBUM = 'abums/addAlbum'

const loadAlbums = (albums) => ({
    type: LOAD_ALBUMS,
    albums,
})

const addAlbum = (album) => ({
    type: ADD_ALBUM,
    album
})



export const getAlbums = () => async (dispatch) => {
    const response = await fetch('/api/albums')
    const albums = await response.json();
    dispatch(loadAlbums(albums))
}

export const createAlbum = (payload) => async (dispatch) => {
    const response = await csrfFetch('http://localhost:3000/api/albums', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(payload),
});
const album = await response.json();
dispatch(addAlbum(album));
return album;
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
        default:
            return state;
    }
}



export default albumReducer

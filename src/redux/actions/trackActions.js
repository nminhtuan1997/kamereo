import axios from 'axios';

export const FETCH_TRACKS_REQUEST = 'FETCH_TRACKS_REQUEST';
export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
export const FETCH_TRACKS_FAILURE = 'FETCH_TRACKS_FAILURE';

const fetchTracksRequest = () => ({
  type: FETCH_TRACKS_REQUEST,
});

const fetchTracksSuccess = (tracks) => ({
  type: FETCH_TRACKS_SUCCESS,
  payload: tracks,
});

const fetchTracksFailure = (error) => ({
  type: FETCH_TRACKS_FAILURE,
  payload: error,
});

export const fetchTracks = (query) => async (dispatch,getState) => {
  dispatch(fetchTracksRequest());
  const cachedTracks = getState().tracks.cache[query];
  if (cachedTracks) {
    dispatch(fetchTracksSuccess(cachedTracks));
    return;
  }
  try {
    const response = await axios.get(`https://itunes.apple.com/search?term=${query}`);
    const tracks = response.data.results;
    dispatch(fetchTracksSuccess(tracks));
    dispatch({ type: 'CACHE_TRACKS', payload: { query, tracks } });
  } catch (error) {
    dispatch(fetchTracksFailure(error.message));
  }
};

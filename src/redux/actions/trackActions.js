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

export const fetchTracks = (query) => async (dispatch) => {
  dispatch(fetchTracksRequest());
  try {
    const response = await axios.get(`https://itunes.apple.com/search?term=${query}`);
    dispatch(fetchTracksSuccess(response.data.results));
  } catch (error) {
    dispatch(fetchTracksFailure(error.message));
  }
};

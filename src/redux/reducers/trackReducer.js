import { FETCH_TRACKS_REQUEST, FETCH_TRACKS_SUCCESS, FETCH_TRACKS_FAILURE } from '../actions/trackActions';

const initialState = {
  loading: false,
  items: [],
  error: null,
  cache:{}
};

const trackReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRACKS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_TRACKS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case FETCH_TRACKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'CACHE_TRACKS':
      return {
        ...state,
        cache: {
          ...state.cache,
          [action.payload.query]: action.payload.tracks,
        },
      };
    default:
      return state;
  }
};

export default trackReducer;

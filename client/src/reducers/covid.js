import {
  FETCH_ERROR,
  GET_SUMMARY,
  GET_CONFIRMED,
  GET_RECOVERED,
  GET_DEATHS
} from '../actions/types';

const initialState = {
  summary: [],
  confirmed: [],
  recovered: [],
  deaths: [],
  date: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload, secPayload, thirdPayload, fourthPayload } = action;

  switch (type) {
    case GET_SUMMARY:
      return {
        ...state,
        summary: payload.Countries,
        date: payload.Date,
        loading: false
      };
    case GET_CONFIRMED:
      return {
        ...state,
        confirmed: secPayload
      };

    case GET_RECOVERED:
      return {
        ...state,
        recovered: thirdPayload
      };
    case GET_DEATHS:
      return {
        ...state,
        deaths: fourthPayload
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}

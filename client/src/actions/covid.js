import axios from 'axios';
import {
  GET_SUMMARY,
  CLEAR_POST,
  FETCH_ERROR,
  GET_CONFIRMED,
  GET_RECOVERED,
  GET_DEATHS
} from './types';

// @route       GET api/v1/posts/timeline
// @description Get all posts by the users loggedIn user is following
// @access      Private
// @task        DONE
export const getSummary = () => async dispatch => {
  try {
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    };
    const res = await axios.get(`https://api.covid19api.com/summary`, null, config);
    return dispatch({
      type: GET_SUMMARY,
      payload: res.data
    });
  } catch (err) {
    
    return dispatch({
      type: FETCH_ERROR,
      payload: { msg: err.response && err.response.statusText, status: err.response && err.response.status }
    });
  }
};

// @route       GET https://api.covid19api.com/country/mexico/status/confirmed/live
// @description Returns cases confirmed every 10 mins
// @access      Private
// @task        DONE
export const getConfirmed = () => async dispatch => {
  try {
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    };
    const res = await axios.get(`https://api.covid19api.com/country/mexico/status/confirmed/live`,null,config);
    return dispatch({
      type: GET_CONFIRMED,
      secPayload: res.data
    });
  } catch (err) {

    return dispatch({
      type: FETCH_ERROR,
      secPayload: { msg: err.response && err.response.statusText, status: err.response && err.response.status }
    });
  }
};

// @route       GET https://api.covid19api.com/country/mexico/status/recovered/live
// @description Returns cases recovered every 10 mins
// @access      Private
// @task        DONE
export const getRecovered = () => async dispatch => {
  try {
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    };
    const res = await axios.get(`https://api.covid19api.com/country/mexico/status/recovered/live`, null, config);
    return dispatch({
      type: GET_RECOVERED,
      thirdPayload: res.data
    });
  } catch (err) {

    return dispatch({
      type: FETCH_ERROR,
      thirdPayload: { msg: err.response && err.response.statusText, status: err.response && err.response.status }
    });
  }
};

// @route       GET https://api.covid19api.com/country/mexico/status/deaths/live
// @description Returns death cases every 10 mins
// @access      Private
// @task        DONE
export const getDeaths = () => async dispatch => {
  try {
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    };

    const res = await axios.get(`https://api.covid19api.com/country/mexico/status/deaths/live`,null,config);
    return dispatch({
      type: GET_DEATHS,
      fourthPayload: res.data
    });
  } catch (err) {
    return dispatch({
      type: FETCH_ERROR,
      fourthPayload: { msg: err.response && err.response.statusText, status: err.response && err.response.status }
    });
  }
};

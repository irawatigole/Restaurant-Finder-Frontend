import axios from 'axios';

import {
    GET_CUISINE,
    SET_CURRENT_USER,
    GET_ERRORS,
  } from './types';


export const addCuisine = (newCuisine, history) => dispatch => {
    axios
      .post('http://localhost:3000/cuisines', newCuisine)
      .then(res => 
        dispatch({
          type: GET_CUISINE,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };
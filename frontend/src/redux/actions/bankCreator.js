import axios from 'axios';
import actionTypes from './actionTypes';

export default function bankCreator() {
  return async (dispatch) => {
    const { data } = await axios.get('https://restcountries.com/v3.1/all');
    console.log('Mahia');
    dispatch({
      type: actionTypes.RENDER,
      data
    });
  };
}

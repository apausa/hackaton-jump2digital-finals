import axios from 'axios';
import actionTypes from './actionTypes';

export default function checkoutCreator() {
  return async (dispatch) => {
    const { data } = await axios.get(`${process.env.API}/all`);
    dispatch({
      type: actionTypes.RENDER,
      data
    });
  };
}

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import bankCreator from '../../../redux/actions/bankCreator';

const ButtonUpdate = () => {
  const dispatch = useDispatch();
  let isUpdated = false;

  const toggleValue = () => {
    isUpdated = isUpdated !== true;
  };
  useEffect(() => {
    dispatch(bankCreator());
  }, isUpdated);
  return (
    <button
      type="button"
      onClick={toggleValue}
    >
      Update
    </button>
  );
};

export default ButtonUpdate;

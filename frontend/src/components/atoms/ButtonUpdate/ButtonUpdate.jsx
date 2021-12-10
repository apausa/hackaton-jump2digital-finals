import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import bankCreator from '../../../redux/actions/bankCreator';

const ButtonUpdate = () => {
  const dispatch = useDispatch();
  const [isUpdated, setIsUpdated] = useState(0);

  useEffect(() => { dispatch(bankCreator()); }, [isUpdated]);
  return (
    <button
      type="button"
      onClick={() => { setIsUpdated(isUpdated + 1); }}
    >
      Update
    </button>
  );
};

export default ButtonUpdate;

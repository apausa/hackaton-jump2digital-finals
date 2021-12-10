import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import bankCreator from '../../../redux/actions/bankCreator';

const Main = () => {
  const dispatch = useDispatch();
  const { bank } = useSelector((store) => ({
    bank: store.bank
  }));
  useEffect(() => {
    if (!bank.length) dispatch(bankCreator());
  }, []);
  return (
    <p>Main component works</p>
  );
};

export default Main;

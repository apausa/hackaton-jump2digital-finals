import React from 'react';
import { useSelector } from 'react-redux';

const DisplayBudget = () => {
  // eslint-disable-next-line no-unused-vars
  const { bank } = useSelector((store) => ({
    bank: store.bank
  }));
  return (
    <p>34453</p>
  );
};

export default DisplayBudget;

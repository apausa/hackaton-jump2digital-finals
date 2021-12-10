import React from 'react';
import { useSelector } from 'react-redux';
import './DisplayBudget.scss';

const DisplayBudget = () => {
  // eslint-disable-next-line no-unused-vars
  const { bank } = useSelector((store) => ({
    bank: store.bank
  }));
  return (
    <p className="displayBudget">34453</p>
  );
};

export default DisplayBudget;

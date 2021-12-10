/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';

const DisplayBudget = () => {
  const { bank } = useSelector((store) => ({
    bank: store.bank
  }));
  return (
    <p>3453453</p>
  );
};

export default DisplayBudget;

import React from 'react';
import { useSelector } from 'react-redux';

const DisplayLoans = () => {
  // eslint-disable-next-line no-unused-vars
  const { bank } = useSelector((store) => ({
    bank: store.bank
  }));
  return (
    <p>4543464</p>
  );
};

export default DisplayLoans;

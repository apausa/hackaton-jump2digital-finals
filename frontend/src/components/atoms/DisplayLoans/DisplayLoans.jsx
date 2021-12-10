import React from 'react';
import { useSelector } from 'react-redux';

const DisplayLoans = () => {
  // eslint-disable-next-line no-unused-vars
  const { bank } = useSelector((store) => ({
    bank: store.bank
  }));
  return (
    <p>43464</p>
  );
};

export default DisplayLoans;

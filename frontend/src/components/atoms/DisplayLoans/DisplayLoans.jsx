import React from 'react';
import { useSelector } from 'react-redux';
import './DisplayLoans.scss';

const DisplayLoans = () => {
  // eslint-disable-next-line no-unused-vars
  const { bank } = useSelector((store) => ({
    bank: store.bank
  }));
  return (
    <p className="displayLoans">43464</p>
  );
};

export default DisplayLoans;

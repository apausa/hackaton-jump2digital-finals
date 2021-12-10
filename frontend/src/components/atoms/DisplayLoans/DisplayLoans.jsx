import React from 'react';
import { useSelector } from 'react-redux';
import '../DisplayRequests/DisplayRequests.scss';

const DisplayLoans = () => {
  // eslint-disable-next-line no-unused-vars
  const { bank } = useSelector((store) => ({
    bank: store.bank
  }));
  return (
    <div className="container">
      <p className="text">Loan return time</p>
      <p className="number">1 day</p>
    </div>
  );
};

export default DisplayLoans;

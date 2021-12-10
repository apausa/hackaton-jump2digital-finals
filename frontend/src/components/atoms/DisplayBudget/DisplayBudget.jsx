import React from 'react';
import { useSelector } from 'react-redux';
import '../DisplayRequests/DisplayRequests.scss';

const DisplayBudget = () => {
  // eslint-disable-next-line no-unused-vars
  const { bank } = useSelector((store) => ({
    bank: store.bank
  }));
  return (
    <div className="container">
      <p className="text">Budget</p>
      <p className="number">1000€</p>
    </div>
  );
};

export default DisplayBudget;

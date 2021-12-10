import React from 'react';
import { useSelector } from 'react-redux';
import './DisplayRequests.scss';

const DisplayRequests = () => {
  // eslint-disable-next-line no-unused-vars
  const { bank } = useSelector((store) => ({
    bank: store.bank
  }));
  return (
    <div className="container">
      <p className="text">Accepted requests</p>
      <p className="number">404278 requests</p>
    </div>
  );
};

export default DisplayRequests;

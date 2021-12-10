import React from 'react';
import { useSelector } from 'react-redux';

const DisplayRequests = () => {
  // eslint-disable-next-line no-unused-vars
  const { bank } = useSelector((store) => ({
    bank: store.bank
  }));
  return (
    <p>75675</p>
  );
};

export default DisplayRequests;

import React from 'react';
import DisplayBudget from '../../atoms/DisplayBudget/DisplayBudget';
import DisplayLoans from '../../atoms/DisplayLoans/DisplayLoans';
import DisplayRequests from '../../atoms/DisplayRequests/DisplayRequests';

const Display = () => (
  <div>
    <p>Buttons component works</p>
    <DisplayBudget />
    <DisplayLoans />
    <DisplayRequests />
  </div>
);

export default Display;

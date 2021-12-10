import React from 'react';
import DisplayBudget from '../../atoms/DisplayBudget/DisplayBudget';
import DisplayLoans from '../../atoms/DisplayLoans/DisplayLoans';
import DisplayRequests from '../../atoms/DisplayRequests/DisplayRequests';

import './display.scss';

const Display = () => (
  <div className="displayContainer">
    <DisplayBudget />
    <DisplayLoans />
    <DisplayRequests />
  </div>
);

export default Display;

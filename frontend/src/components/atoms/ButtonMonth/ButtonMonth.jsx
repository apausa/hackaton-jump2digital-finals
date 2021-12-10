/* eslint-disable react/jsx-indent */
/* eslint-disable react/void-dom-elements-no-children */
import React from 'react';
import './ButtonMonth.scss';

const ButtonMonth = () => {
  const MONTH_LIST = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augist', 'September', 'November', 'Dicember'];
  return (
    <div>
        <select className="buttonMonth">
          <option>
            Month
          </option>
            {MONTH_LIST.map((month) => (<option>{month}</option>))}
        </select>
    </div>
  );
};

export default ButtonMonth;

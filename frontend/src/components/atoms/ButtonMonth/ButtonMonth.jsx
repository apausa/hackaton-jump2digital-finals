/* eslint-disable react/jsx-indent */
/* eslint-disable react/void-dom-elements-no-children */
import React from 'react';
import './ButtonMonth.scss';

const ButtonMonth = () => {
  const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augist', 'September', 'November', 'Dicember'];
  return (
    <div>
      <input>
        <select>
          <option>
            choose the month
          </option>
            {monthList.map((month) => (<option>{month}</option>))}
        </select>
      </input>
    </div>
  );
};

export default ButtonMonth;

import React from 'react';
import ButtonMonth from '../../atoms/ButtonMonth/ButtonMonth';
import ButtonUpdate from '../../atoms/ButtonUpdate/ButtonUpdate';

import './buttons.scss';

const Buttons = () => (
  <div className="buttonsContainer">
    <ButtonMonth />
    <ButtonUpdate />
  </div>
);

export default Buttons;

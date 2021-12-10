import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import bankCreator from '../../../redux/actions/bankCreator';
import Buttons from '../../molecules/Buttons/Butttons';
import Display from '../../molecules/Display/Display';
import Graphs from '../../molecules/Graphs/Graphs';

import './main.scss';

const Main = () => {
  const dispatch = useDispatch();
  const { bank } = useSelector((store) => ({
    bank: store.bank
  }));
  useEffect(() => {
    if (!bank.length) dispatch(bankCreator());
  }, []);
  return (
    <main>

      <section className="upContainer">

        <div className="displayContainer">
          <Display />
        </div>

        <div className="buttonsContainer">
          <Buttons />
        </div>

      </section>

      <section className="bottomContainer">

        <div className="graphsContainer">
          <Graphs />
        </div>

      </section>
    </main>

  );
};

export default Main;

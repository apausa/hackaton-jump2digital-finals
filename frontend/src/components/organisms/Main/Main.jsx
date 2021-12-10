import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import bankCreator from '../../../redux/actions/bankCreator';
import Buttons from '../../molecules/Buttons/Butttons';
import Display from '../../molecules/Display/Display';
import Graphs from '../../molecules/Graphs/Graphs';
import styles from './main.scss';

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

      <p>Main component works</p>
      <section className={styles.displayContainer}>

        <Display />

        <div className={styles.buttonsContainer}>
          <Buttons />
        </div>

      </section>

      <section className={styles.bottomContainer}>

        <Graphs />

      </section>
    </main>

  );
};

export default Main;

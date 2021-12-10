import React from 'react';
import Buttons from '../molecules/Buttons/Butttons';
import Display from '../molecules/Display/Display';
import Graphs from '../molecules/Graphs/Graphs';
import styles from './main.scss';

const Main = () => (

  <main>
    <p>Main component works</p>

    <section className={styles.container}>

      <div className={styles.displayContainer}>
        <Display />
      </div>

      <div className={styles.displayButtons}>
        <Buttons />
      </div>

    </section>

    <section className={styles.displayGraphs}>
      <Graphs />
    </section>
  </main>

);

export default Main;

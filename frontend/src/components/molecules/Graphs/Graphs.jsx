/* eslint-disable arrow-body-style */

import React from 'react';
import faker from 'faker';
import GraphRequests from '../../atoms/GraphRequests/GraphRequests';
import './Graphs.scss';

const Graphs = () => {
  const optionsReqMoney = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'RequestedMoney x Month'
      }
    }
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const dataReqMoney = {
    labels,
    datasets: [
      {
        label: 'RequestedMoney ',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
    ]
  };
  const optionsUser = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'User x Month'
      }
    }
  };

  const dataUser = {
    labels,
    datasets: [
      {
        label: 'Users',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: 'rgb(2, 2, 155)',
        backgroundColor: 'rgba(2, 2, 155, 0.5)'
      }
    ]
  };

  return (
    <div className="container-graphs">
      <GraphRequests options={optionsReqMoney} data={dataReqMoney} />
      <GraphRequests options={optionsUser} data={dataUser} />
    </div>
  );
};

export default Graphs;

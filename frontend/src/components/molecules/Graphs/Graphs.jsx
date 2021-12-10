import React from 'react';
import GraphRequests from '../../atoms/GraphRequests/GraphRequests';
import GraphUsers from '../../atoms/GraphUsers/GraphUsers';

import './graphs.scss';

const Graphs = () => (
  <div className="graphContainer">
    <GraphRequests />
    <GraphUsers />
  </div>
);

export default Graphs;

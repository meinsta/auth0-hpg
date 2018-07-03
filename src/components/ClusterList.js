import React from 'react';
import Icon from './Icon';

export default class ClusterList extends React.Component {
    render() {

        let logos = ["USA", "NewZealand", "EuropeanUnion"];

        let svgs = logos.map(svg => {
           return <Icon iconStyle={'stats-list-cluster-icon'} icon={svg} />
        });

        return (
          <div className="stats-list-cluster-icon-container">
          { svgs }
          </div>
        );
    }
}
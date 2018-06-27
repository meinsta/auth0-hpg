import React from 'react';
import Icon from './Icon';

export default class CustomerCloud extends React.Component {
    render() {

        let logos = ["aeromexico", "jet-airways", "nvidia", "amd", "mns", "pbs", "atalssian", "mazda", "polaris", "bluetooth", "mozilla", "vmware", "harpercollins", "news-corp"];

        let svgs = logos.map(svg => {
           return <Icon icon={svg} />
        });

        return (
          <section className="customers">
            <h2 className="h2-customers">Join thousands of companies that trust Auth0 everyday</h2>
            <div className="cloud-container">{ svgs }</div>
            <p className="h3-link">See All Customers <div className="triangle" /></p>
          </section>
        );
    }
}
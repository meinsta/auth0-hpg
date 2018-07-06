import React, { Component } from 'react';
import Icon from './components/Icon';
import Carousel from './components/Carousel';
import CustomerCloud from './components/CustomerCloud';
import ClusterList from './components/ClusterList';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        <video autoPlay playsInline muted loop id="hero"><source src="https://meinsta.github.io/auth0-hpg/Hero/atom.mp4" type="video/mp4" /></video>
        <aside>
          <h1>Never compromise on <span className="emphasis">identity</span></h1>
          <h4><span>We provide a universal authentication &amp; authorization platform for web, </span><span>mobile and legacy applications.</span></h4>
          <a href="https://auth0.com/docs/getting-started" className="mobile-only orange button">Get started &rarr;</a>         
          <a href="https://auth0.com/docs" className="mobile-only button">Read the Docs</a>
        </aside>
      </header>
      <main>
        <section className="carousel">
          <div className="carousel-container">
          <div className="text-wrapper">
              <h2>What’s Auth0</h2>
            </div>
            <div className="content-wrapper">
              <div id="container"><Carousel /></div>
            </div>
          </div>
        </section>
      <CustomerCloud />
      <section className="stats">
        <div className="stats-column risk-based">
          <Icon icon="RiskBased" iconStyle="stats-column-icon" />
          <h2 className="h2-stats">Risk-based, security-first approach</h2>
          <h3 className="h3-stats">Robust security architecture and features providing adaptive multi-layer security, designed by world-class security experts.</h3>
          <div className="stats-table">
            <div className="stats-table-column">
              <h5>1.1B<span className="emphasis">+</span></h5>
              <div className="stats-list">
                <p>Monthly Logins</p>
                <p>Securely Authenticated</p>
              </div>
            </div>
            <div className="stats-table-column">
              <h5>1.3M<span className="emphasis">+</span></h5>
              <div className="stats-list">
                <p>Malicious Logins</p>
                <p>Prevented</p>
              </div>
            </div>
          </div>
          <h3 className="h3-link">Learn more <div className="triangle" /></h3>
        </div>
        <div className="stats-column availability">
          <Icon icon="Availability" iconStyle="stats-column-icon" />
          <h2 className="h2-stats">Enterprise-class availability.<br />Always ready, wherever you are.</h2>
          <h3 className="h3-stats">Advanced infrastructure ensuring high availability and resiliency for its users with globally distributed data centers and full disaster recovery systems.</h3>
          <div className="stats-table">
            <div className="stats-table-column">
              <div className="stats-list-cluster">
                <h5 className="stats-list-cluster-label">3</h5>
                <ClusterList />
              </div>
              <div className="stats-list small">
                <p>Clusters</p>
                <p className="stats-list-detail">(US, EU, AU)</p>
              </div>
            </div>
            <div className="stats-table-column">
              <h5>99.9<span className="emphasis">%</span></h5>
              <div className="stats-list small">
                <p>Guaranteed SLA</p>
                <p className="stats-list-detail">For Prod. Environments</p>
              </div>
            </div>
          </div>
          <h3 className="h3-link">Learn more <div className="triangle" /></h3>
        </div>
      </section>
      </main>
      </div>
    );
  }
}

export default App;

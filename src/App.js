import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const url = 'https://meinsta.github.io/auth0-hpg/symbol-defs.svg';

const Icon = (props) => (
  <svg viewBox='0 0 16 16' className={`icon icon-${props.icon}`}>
    <use xlinkHref={`${url}#icon-${props.icon}`} />
  </svg>
);

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        <video autoPlay playsInline muted loop id="hero"><source src="https://meinsta.github.io/auth0-hpg/Hero/atom.mp4" type="video/mp4" /></video>
        <aside>
        <h1>Never compromise on <span className="emphasis">identity</span></h1>
        <h4>We provide a universal authentication &amp; authorization platform for web,<br />mobile and legacy applications.</h4>
        </aside>
      </header>
      <main>
        <section className="carousel">
          <div className="carousel-container">
            <h2>What’s Auth0</h2>
            <h3 className="h3-carousel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</h3>
            <div className="video-carousel"><VideoCarousel /></div>
          </div>
        </section>
      <CustomerCloud />
      <section className="stats">
        <div className="stats-column">
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
          <p className="h3-link">Learn more <div className="triangle" /></p>
        </div>
        <div className="stats-column">
          <h2 className="h2-stats">Enterprise-class availability. Always ready.</h2>
          <h3 className="h3-stats">Advanced infrastructure ensuring high availability and resiliency for its users with globally distributed data centers and full disaster recovery systems.</h3>
          <div className="stats-table">
            <div className="stats-table-column">
              <div className="stats-list-cluster">
                <h5 className="stats-list-cluster-label">3</h5>
                <div className="stats-list-cluster-icon-container">
                  <img className="stats-list-cluster-icon" src="https://twemoji.maxcdn.com/2/svg/1f1fa-1f1f2.svg" alt="USA" />
                  <img className="stats-list-cluster-icon" src="https://twemoji.maxcdn.com/2/svg/1f1e6-1f1fa.svg" alt="New Zealand" />
                  <img className="stats-list-cluster-icon" src="https://twemoji.maxcdn.com/2/svg/1f1ea-1f1fa.svg" alt="European Union" />
                </div>
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
          <p className="h3-link">Learn more <div className="triangle" /></p>
        </div>
      </section>
      </main>
      </div>
    );
  }
}

class VideoCarousel extends Component {
    render() {
        return (
          <div>
            <div>
              <ul className="slide-list">
                <li className="slide selected">
                  <div>
                      <video autoPlay playsInline muted loop><source src="https://meinsta.github.io/auth0-hpg/What_is_Auth0/01_Use_Cases.mp4" type="video/mp4" /></video>
                  </div>
                </li>
                <li className="slide">
                  <div>
                      <video autoPlay playsInline muted loop><source src="https://meinsta.github.io/auth0-hpg/What_is_Auth0/02_Technology_1.mp4" type="video/mp4" /></video>
                  </div>
                </li>
                <li className="slide">
                  <div>
                      <video autoPlay playsInline muted loop><source src="https://meinsta.github.io/auth0-hpg/What_is_Auth0/03_Deployment.mp4" type="video/mp4" /></video>
                  </div>
                </li>
                <li className="slide">
                  <div>
                      <video autoPlay playsInline muted loop><source src="https://meinsta.github.io/auth0-hpg/What_is_Auth0/04_Customization.mp4" type="video/mp4" /></video>
                  </div>
                </li>
                <li className="slide">
                  <div>
                      <video autoPlay playsInline muted loop><source src="https://meinsta.github.io/auth0-hpg/What_is_Auth0/05_Result.mp4" type="video/mp4" /></video>
                  </div>
                </li>
              </ul>
            </div>
            <div className="slide-list-nav-container">
              <ul className="slide-list-nav">
                <li className="slide-list-nav-item selected"><div className="dot" />Use Case</li>
                <li className="slide-list-nav-item"><div className="dot" />Technologies</li>
                <li className="slide-list-nav-item"><div className="dot" />Deployment</li>
                <li className="slide-list-nav-item"><div className="dot" />Customization</li>
                <li className="slide-list-nav-item"><div className="dot" />Result</li>
              </ul>
            </div>
          </div>
        );
    }
}

class CustomerCloud extends Component {
    render() {

        let array = ["aeromexico", "jet-airways", "nvidia", "amd", "mns", "pbs", "atalssian", "mazda", "polaris", "bluetooth", "mozilla", "vmware", "harpercollins", "news-corp"];

        let svgs = array.map(svg => {
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

export default App;

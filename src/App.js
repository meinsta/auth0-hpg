import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        <video autoPlay playsInline muted loop id="hero"><source src="https://meinsta.github.io/auth0-hpg/Hero/atom.mp4" type="video/mp4" /></video>
        <aside>
        <h1>Never compromise on <span className="emphasis">identity</span></h1>
        <caption className="caption-hero">We provide a universal authentication &amp; authorization platform for web, mobile and legacy applications.</caption>
        </aside>
      </header>
      <main>
        <section className="carousel">
          <div className="carousel-container">
            <h2>What’s Auth0</h2>
            <caption className="caption-carousel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</caption>
            <div className="video-carousel"><VideoCarousel /></div>
          </div>
        </section>
      </main>
      <footer>
      <CustomerCloud />
      <section className="stats">
        stats
      </section>
      </footer>
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

        let array = ["aeromexico.svg", "jet airways.svg", "nvidia.svg", "amd.svg", "m&s.svg", "pbs.svg", "atalssian.svg", "mazda.svg", "polaris.svg", "bluetooth.svg", "mozilla.svg", "vmware.jpg", "harpercollins.svg", "news corp.svg"];

        let images = array.map(image => {
           return <img key={image} src={require(`./assets/${image}`)} alt="" className="cloud-image" />
        });

        return (
          <section className="customers">
            <h2 className="h2-customers">Join thousands of companies that trust Auth0 everyday</h2>
            <div className="cloud-container">{ images }</div>
          </section>
        );
    }
}

export default App;

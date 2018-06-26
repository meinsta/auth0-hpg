import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        <video autoPlay playsInline muted loop id="hero"><source src="https://meinsta.github.io/auth0-hpg/Hero/atom.mp4" type="video/mp4" /></video>
        <aside>
        <h1>Never compromise on <span className="emphasis">identity</span></h1>
        <caption>We provide a universal authentication &amp; authorization platform for web, mobile and legacy applications.</caption>
        </aside>
      </header>
      <main>
        Main
      </main>
      <footer>
      <section className="customers">
        customers
      </section>
      <section className="stats">
        stats
      </section>
      </footer>
      </div>
    );
  }
}

export default App;

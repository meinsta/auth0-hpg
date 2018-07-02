import React from 'react';
import { Button } from 'reactstrap';

const sources = {
  UseCases: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/posters/1.svg',
  Technology: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/posters/2.svg',
  Deployment: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/posters/3.svg',
  Customization: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/posters/4.svg',
  Result: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/posters/5.svg',
};

export default class ImageCarousel extends React.Component  {
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: sources['Result'],
    };
  }

  changeSource(name) {
    return () => {
      this.setState({
        source: sources[name]
      });
    };
  }

  render() {
    return (
      <div className="container">
        <div className="image-container">
          <img src={this.state.source} />
        </div>
        <div className="pb-3">
          <Button onClick={this.changeSource('UseCases')} className="mr-3">Use Cases</Button>
          <Button onClick={this.changeSource('Technology')} className="mr-3">Technology</Button>
          <Button onClick={this.changeSource('Deployment')} className="mr-3">Deployment</Button>
          <Button onClick={this.changeSource('Customization')} className="mr-3">Customization</Button>
          <Button onClick={this.changeSource('Result')} className="mr-3">Result</Button>
        </div>
      </div>
    );
  }
}

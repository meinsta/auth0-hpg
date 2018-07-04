import React from 'react';
import { Button } from 'reactstrap';
import Icon from './Icon';

const sources = {
  UseCases: 'UseCases',
  Technology: 'Technology',
  Deployment: 'Deployment',
  Customization: 'Customization',
  Result: 'Result',
};

export default class ImageCarousel extends React.Component  {
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: sources["Result"],
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
          <Icon icon={this.state.source} iconStyle={'carousel-image'} />
        </div>
        <div className="slide-list-nav">
          <div className="slide-list-nav-wrapper">
            <Button onClick={this.changeSource('UseCases')} className="slide-list-nav-item completed"><div className="dot use-case" />Use Cases</Button>
            <Button onClick={this.changeSource('Technology')} className="slide-list-nav-item completed"><div className="dot technologies" />Technology</Button>
            <Button onClick={this.changeSource('Deployment')} className="slide-list-nav-item completed"><div className="dot deployment" />Deployment</Button>
            <Button onClick={this.changeSource('Customization')} className="slide-list-nav-item completed"><div className="dot customization" />Customization</Button>
            <Button onClick={this.changeSource('Result')} className="slide-list-nav-item completed"><div className="dot result" />Result</Button>
          </div>
        </div>
      </div>
    );
  }
}

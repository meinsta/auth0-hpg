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
          <Icon icon={this.state.source} />
        </div>
        <div className="slide-list-nav">
          <Button onClick={this.changeSource('UseCases')} className="slide-list-nav-item completed use-case"><div className="dot" />Use Cases</Button>
          <Button onClick={this.changeSource('Technology')} className="slide-list-nav-item completed technologies"><div className="dot" />Technology</Button>
          <Button onClick={this.changeSource('Deployment')} className="slide-list-nav-item completed deployment"><div className="dot" />Deployment</Button>
          <Button onClick={this.changeSource('Customization')} className="slide-list-nav-item completed Customization"><div className="dot" />Customization</Button>
          <Button onClick={this.changeSource('Result')} className="slide-list-nav-item completed result"><div className="dot" />Result</Button>
        </div>
      </div>
    );
  }
}

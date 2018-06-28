import React from 'react';
import { Player, ControlBar } from 'video-react';
import { Button } from 'reactstrap';

const sources = {
  UseCases: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/01_Use_Cases.mp4',
  Technology: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/02_Technology_1.mp4',
  Deployment: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/03_Deployment.mp4',
  Customization: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/04_Customization.mp4',
  Result: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/05_Result.mp4',
};


function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
};

export default class VideoCarousel extends React.Component  {
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: sources['UseCases'],
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    // subscribe state change
    this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this));
    window.addEventListener('scroll', throttle(this.handleScroll, 1000));
  }

  handleStateChange(state, prevState) {
    // copy player state to this component's state
    this.setState({
      player: state
    });
  }

  play() {
    this.refs.player.play();
  }

  pause() {
    this.refs.player.pause();
  }

  load() {
    this.refs.player.load();
  }

  changeSource(name) {
    return () => {
      this.setState({
        source: sources[name]
      });
      this.refs.player.load();
    };
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', throttle(this.handleScroll, 1000));
  };

  handleScroll(event) {
    var currentYpos = window.pageYOffset || document.documentElement.scrollTop;
      if ( currentYpos >= document.querySelector('.video-carousel video').offsetTop && currentYpos <= document.querySelector('.video-carousel video').offsetTop + document.querySelector('.video-carousel video').offsetHeight ) {
        document.querySelector('.video-carousel video').play();
        console.info('video playing')
      }else{
        document.querySelector('.video-carousel video').pause();
        console.info('video paused')
      }
  };

  render() {
    return (
      <div className="container">
        <Player ref="player">
          <source src={this.state.source} />
          <ControlBar autoHide={false} />
        </Player>
        <div className="pb-3">
          <Button onClick={this.changeSource('UseCases')} className="mr-3">Use Cases</Button>
          <Button onClick={this.changeSource('Technology')} className="mr-3">Technology</Button>
          <Button onClick={this.changeSource('Deployment')} className="mr-3">Deployment</Button>
          <Button onClick={this.changeSource('Customization')} className="mr-3">Customization</Button>
          <Button onClick={this.changeSource('Result')} className="mr-3">Result</Button>
        </div>
        <pre>
          <p>Debug Panel</p>
          <div>
            {JSON.stringify(this.state.player, null, 2)}
          </div>
        </pre>
      </div>
    );
  }
}

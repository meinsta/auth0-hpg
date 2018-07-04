import React from 'react';
import { Player } from 'video-react';

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
};

// Start animation helper using nested requestAnimationFrames
function startAnimation(callback) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      callback();
    });
  });
};

export default class Video extends React.Component  {
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: this.props.url,
      animate: false,
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);

    this.handleScroll = this.handleScroll.bind(this);
    this.carouselHandler = this.carouselHandler.bind(this);
  }

  componentDidMount() {
    // subscribe state change
    this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this));
    window.addEventListener('scroll', throttle(this.handleScroll, 1000));
    document.querySelector('.new-carousel video').addEventListener('ended', this.carouselHandler, false);
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

  componentWillUnmount() {
    window.removeEventListener('scroll', throttle(this.handleScroll, 1000));
    document.querySelector('.new-carousel video').removeEventListener('ended', this.carouselHandler, false);
  };

  handleScroll(event) {
    if(!document.querySelector('.new-carousel video')) 
    {
      return;
    } 
    var currentYpos = window.pageYOffset || document.documentElement.scrollTop;
    if ( currentYpos >= document.querySelector('.content-wrapper').offsetTop && currentYpos <= document.querySelector('.content-wrapper').offsetTop + document.querySelector('.new-carousel video').offsetHeight ) 
    {
      document.querySelector('.new-carousel video').play();
      console.info('video playing')
    }
    else
    {
      document.querySelector('.new-carousel video').pause();
      console.info('video paused')
    }
  };

  carouselHandler = (event) => {
    if(!document.querySelector('.new-video video'))
    {
      return;
    }
    var videoElement = document.querySelector('.new-video');

    this.setState({
      source: this.props.url
    });
    this.refs.player.load();
    document.querySelector('.new-video video').play();

    if(this.props.name === 'Result')
    {
      videoElement.onended = function() {
        videoElement.parentNode.removeChild(videoElement);
        document.querySelector('.new-image').classList.add('new-image-only');
      };
    }
  };
  render() {
    return (
      <div className="new-video container">
        <Player ref="player" autoPlay muted>
          <source src={this.props.url} />
        </Player>
          <div>
           <pre>
            <p>Debug Panel</p>
            <div>
              {JSON.stringify(this.state.player, null, 2)}
            </div>
          </pre>           
        </div>
      </div>
    );
  }
}



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

  componentWillReceiveProps(nextProps) {
    if(!document.querySelector('.new-video')) { return; }
    if(nextProps.url!==this.props.url){
      this.setState({
        source: nextProps.url
      });
      this.refs.player.load();
      document.querySelector('.new-video video').play();
    }
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', throttle(this.handleScroll, 1000));
  };

  handleScroll(event) {
    if(!document.querySelector('.new-video')) { return; } 
    var currentYpos = window.pageYOffset || document.documentElement.scrollTop;
    if ( currentYpos >= document.querySelector('.content-wrapper').offsetTop && currentYpos <= document.querySelector('.content-wrapper').offsetTop + document.querySelector('.new-carousel video').offsetHeight ) 
    {
      document.querySelector('.new-carousel video').play();
    }
    else
    {
      document.querySelector('.new-carousel video').pause();
    }
  };

  render() {
    return (
      <div className="new-video container">
        <Player ref="player" autoPlay muted>
          <source src={this.props.url} />
        </Player>
      </div>
    );
  }
}
//   <div>
//    <pre>
//     <p>Debug Panel</p>
//     <div>
//       {JSON.stringify(this.state.player, null, 2)}
//     </div>
//   </pre>           
// </div>



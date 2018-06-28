import React from 'react';
import { Player } from 'video-react';
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
    this.carouselHandler = this.carouselHandler.bind(this);
  }

  componentDidMount() {
    // subscribe state change
    this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this));
    window.addEventListener('scroll', throttle(this.handleScroll, 1000));
    document.querySelector('.video-carousel video').addEventListener('ended', this.carouselHandler, false);
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
    document.querySelector('.video-carousel video').removeEventListener('ended', this.carouselHandler, false);
  };

  handleScroll(event) {
    if(!document.querySelector('.video-carousel video')) 
    {
      return;
    } 
    var currentYpos = window.pageYOffset || document.documentElement.scrollTop;
    if ( currentYpos >= document.querySelector('.video-carousel video').offsetTop && currentYpos <= document.querySelector('.video-carousel video').offsetTop + document.querySelector('.video-carousel video').offsetHeight ) 
    {
      document.querySelector('.video-carousel video').play();
      console.info('video playing')
    }
    else
    {
      document.querySelector('.video-carousel video').pause();
      console.info('video paused')
    }
  };

  carouselHandler = (event) => {
    if(!document.querySelector('.video-carousel video')) 
    {
      return;
    }
    //TO DO: i don't love this if-else-if; want to iterate with a nice iterative function :)
    if(this.state.source === sources['UseCases'])
    {
      this.setState({
        source: sources['Technology']
        });
        this.refs.player.load();
        document.querySelector('.video-carousel video').play();
    }
    else if(this.state.source === sources['Technology'])
    {
      this.setState({
        source: sources['Deployment']
        });
        this.refs.player.load();
        document.querySelector('.video-carousel video').play();
    }
    else if(this.state.source === sources['Deployment'])
    {
      this.setState({
        source: sources['Customization']
        });
        this.refs.player.load();
        document.querySelector('.video-carousel video').play();
    } 
    else if(this.state.source === sources['Customization'])
    {
      this.setState({
        source: sources['Result']
        });
        this.refs.player.load();
        document.querySelector('.video-carousel video').play();
    }
    else if(this.state.source === sources['Result'])
    {
        // TO DO: find a better way to remove video element to disable event listeners & hide carousel
        document.querySelector('#root > div > main > section.carousel > div > div > div > div').removeChild(document.querySelector('#root > div > main > section.carousel > div > div > div > div').childNodes[0]);
        document.querySelector('.video-carousel').style.display = 'none';
        document.querySelector('.image-carousel').style.display = 'flex';
    }
  };
  // TO DO: thinking about making a hot key for the debug panel 
  render() {
    return (
      <div className="container">
        <Player ref="player" autoPlay muted>
          <source src={this.state.source} />
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

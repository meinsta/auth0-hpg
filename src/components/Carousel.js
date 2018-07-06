import React from 'react';
import { Button } from 'reactstrap';
import Video from './Video';
import Image from './Image';

const sources = [
  { id: 0, name: 'Use Cases', class: 'use-cases', video: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/01_Use_Cases.mp4', image: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/svg/UseCases.svg'  },
  { id: 1, name: 'Technology', class: 'technologies', video: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/02_Technology_1.mp4', image: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/svg/Technology.svg' },
  { id: 2, name: 'Deployment', class: 'deployment',  video: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/03_Deployment.mp4', image: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/svg/Deployment.svg' },
  { id: 3, name: 'Customization', class: 'customization', video: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/04_Customization.mp4', image: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/svg/Customization.svg' },
  { id: 4, name: 'Result', class: 'result', video: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/05_Result.mp4', image: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/svg/Result.svg' }
];

var navListClass = 'slide-list-nav-item',
	navListItemName = 'dot';

var lastIndex = sources.length -1;

export default class Carousel extends React.Component {
	constructor (props, context) {
		super(props, context);
		
		this.state = {
			currentIndex: 0,
			videoVisibility: true
		};

		this.videoHandler = this.videoHandler.bind(this);
		this.changeSource = this.changeSource.bind(this);
		this.changeImage = this.changeImage.bind(this);
	}

	componentDidMount() {
		document.querySelector('.new-carousel video').addEventListener('ended', this.videoHandler, false);
	}

	componentWillUnmount() {
		document.querySelector('.new-carousel video').removeEventListener('ended', this.videoHandler, false);
	}

	videoHandler = (event) => {
		var videoElement = document.querySelector('.new-video');
		if(!videoElement) { return; }
		if(this.state.currentIndex === lastIndex) {
			this.setState({
				currentIndex: lastIndex,
				videoVisibility: false
			});
			document.querySelector('.new-carousel video').removeEventListener('ended', this.videoHandler, false);

		}
		var updatedIndex = this.state.currentIndex + 1;
		this.setState({
			currentIndex: updatedIndex
		});

	    if(this.state.currentIndex === event.target.id && this.state.currentIndex !== sources.length -1 ) {
	    	navListClass = 'slide-list-nav-item selected';
	    	navListItemName = 'dot';
	    }
	}

	changeSource(event) {
		this.setState({
			currentIndex: event.target.id,
			videoVisibility: false
		});
		document.querySelector('.new-carousel video').removeEventListener('ended', this.videoHandler, false);
	}

	changeImage(event) {
		this.setState({
			currentIndex: event.target.id
		});

	    if(this.state.currentIndex === event.target.id && this.state.currentIndex !== lastIndex ) {
	    	navListClass = 'slide-list-nav-item selected';
	    	navListItemName = 'dot';
	    } else if(this.state.currentIndex === lastIndex) {
	    	navListClass = 'slide-list-nav-item completed';
	    	navListItemName = 'dot' + ' ' + sources[this.state.currentIndex].class;
	    }
	    else {
   	    	navListClass = 'slide-list-nav-item';
	    	navListItemName = 'dot'; 	
	    }
		document.querySelector('.new-carousel video').removeEventListener('ended', this.videoHandler, false);

	}

	render () {
			if(this.state.videoVisibility === true) {
				return (
				<div className="new-carousel">
					<Video url={ sources[this.state.currentIndex].video } />
					<div className="slide-list-nav">
			          <div className="slide-list-nav-wrapper">
			            <Button id={0} onClick={ this.changeSource } className={ this.state.currentIndex === 0 ? 'slide-list-nav-item selected': 'slide-list-nav-item' }><div className="dot" />Use Cases</Button>
			            <Button id={1} onClick={ this.changeSource } className={ this.state.currentIndex === 1 ? 'slide-list-nav-item selected': 'slide-list-nav-item' }><div className="dot" />Technology</Button>
			            <Button id={2} onClick={ this.changeSource } className={ this.state.currentIndex === 2 ? 'slide-list-nav-item selected': 'slide-list-nav-item' }><div className="dot" />Deployment</Button>
			            <Button id={3} onClick={ this.changeSource } className={ this.state.currentIndex === 3 ? 'slide-list-nav-item selected': 'slide-list-nav-item' }><div className="dot" />Customization</Button>
			            <Button id={4} onClick={ this.changeSource } className={ this.state.currentIndex === 4 ? 'slide-list-nav-item selected': 'slide-list-nav-item' }><div className="dot" />Result</Button>
			          </div>
			        </div>
				</div>
				)
			}
			if(this.state.videoVisibility === false) {
				return (
				<div className="new-carousel">
					<Image url={ sources[this.state.currentIndex].image } />
					<div className="slide-list-nav">
			          <div className="slide-list-nav-wrapper">
			            <Button id={0} onClick={ this.changeImage } className={navListClass}><div className={navListItemName} />Use Cases</Button>
			            <Button id={1} onClick={ this.changeImage } className={navListClass}><div className={navListItemName} />Technology</Button>
			            <Button id={2} onClick={ this.changeImage } className={navListClass}><div className={navListItemName} />Deployment</Button>
			            <Button id={3} onClick={ this.changeImage } className={navListClass}><div className={navListItemName} />Customization</Button>
			            <Button id={4} onClick={ this.changeImage } className={navListClass}><div className={navListItemName} />Result</Button>
			          </div>
			        </div>
				</div>
				)
			}
	}
}

import React from 'react';
import { Button } from 'reactstrap';
import Video from './Video';
import Image from './Image';

const sources = [
  { id: 0, name: 'Use Cases', video: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/01_Use_Cases.mp4', image: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/svg/UseCases.svg'  },
  { id: 1, name: 'Technology', video: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/02_Technology_1.mp4', image: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/svg/Technology.svg' },
  { id: 2, name: 'Deployment', video: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/03_Deployment.mp4', image: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/svg/Deployment.svg' },
  { id: 3, name: 'Customization', video: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/04_Customization.mp4', image: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/svg/Customization.svg' },
  { id: 4, name: 'Result', video: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/05_Result.mp4', image: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/svg/Result.svg' }
];

export default class Carousel extends React.Component {
	constructor (props, context) {
		super(props, context);
		
		this.state = {
			currentImageIndex: 0,
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
		var lastIndex = sources.length - 1;
		var videoElement = document.querySelector('.new-video');
		if(!videoElement) { return; }
		if(this.state.currentImageIndex === lastIndex) {
			this.setState({ 
				currentImageIndex: lastIndex,
				videoVisibility: false 
			}, () => {
				document.querySelector('.new-carousel video').removeEventListener('ended', this.videoHandler, false);
			})
		}
		var updatedIndex = this.state.currentImageIndex + 1;
		this.setState({
			currentImageIndex: updatedIndex
		});
	}

	changeSource(e) {
		this.setState({
			currentImageIndex: e.target.id,
			videoVisibility: false
		});
		document.querySelector('.new-carousel video').removeEventListener('ended', this.videoHandler, false);
	}

	changeImage(e) {
		this.setState({
			currentImageIndex: e.target.id
		});
	}

	render () {
			if(this.state.videoVisibility === true) {
				return (
				<div className="new-carousel">
					<Video url={ sources[this.state.currentImageIndex].video } />
					<div className="slide-list-nav">
			          <div className="slide-list-nav-wrapper">
			            <Button id={0} onClick={ this.changeSource } className={ this.state.currentImageIndex === 0 ? 'slide-list-nav-item selected': 'slide-list-nav-item' }><div className="dot" />Use Cases</Button>
			            <Button id={1} onClick={ this.changeSource } className={ this.state.currentImageIndex === 1 ? 'slide-list-nav-item selected': 'slide-list-nav-item' }><div className="dot" />Technology</Button>
			            <Button id={2} onClick={ this.changeSource } className={ this.state.currentImageIndex === 2 ? 'slide-list-nav-item selected': 'slide-list-nav-item' }><div className="dot" />Deployment</Button>
			            <Button id={3} onClick={ this.changeSource } className={ this.state.currentImageIndex === 3 ? 'slide-list-nav-item selected': 'slide-list-nav-item' }><div className="dot" />Customization</Button>
			            <Button id={4} onClick={ this.changeSource } className={ this.state.currentImageIndex === 4 ? 'slide-list-nav-item selected': 'slide-list-nav-item' }><div className="dot" />Result</Button>
			          </div>
			        </div>
				</div>
				)
			}
			else {
				return (
				<div className="new-carousel">
					<Image url={ sources[this.state.currentImageIndex].image } />
					<div className="slide-list-nav">
			          <div className="slide-list-nav-wrapper">
			            <Button id={0} onClick={ this.changeImage } className="slide-list-nav-item completed"><div className="dot use-case" />Use Cases</Button>
			            <Button id={1} onClick={ this.changeImage } className="slide-list-nav-item completed"><div className="dot technologies" />Technology</Button>
			            <Button id={2} onClick={ this.changeImage } className="slide-list-nav-item completed"><div className="dot deployment" />Deployment</Button>
			            <Button id={3} onClick={ this.changeImage } className="slide-list-nav-item completed"><div className="dot customization" />Customization</Button>
			            <Button id={4} onClick={ this.changeImage } className="slide-list-nav-item completed"><div className="dot result" />Result</Button>
			          </div>
			        </div>
				</div>
				)
			}
	}
}

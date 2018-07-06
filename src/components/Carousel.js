import React from 'react';
import { Button } from 'reactstrap';
import Video from './Video';
import Image from './Image';

const sources = [
  { id: 0, name: 'Use Cases', class: 'use-cases', video: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/01_Use_Cases.mp4', image: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/svg/UseCases.svg', text: 'Choose your use case. Auth0’s Universal Identity Platform for web, mobile and IoT can handle any of them — B2C, B2B, B2E or a combination.'  },
  { id: 1, name: 'Technology', class: 'technologies', video: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/02_Technology_1.mp4', image: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/svg/Technology.svg', text: 'Your language. Your stack. Auth0 can connect to any application or API. Our 65+ SDKs and pre-configured Quickstarts offer rapid integration.' },
  { id: 2, name: 'Deployment', class: 'deployment',  video: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/03_Deployment.mp4', image: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/svg/Deployment.svg', text: 'Choose the deployment that suits your needs — your cloud, Auth0 Cloud, on-premise, or hybrid.' },
  { id: 3, name: 'Customization', class: 'customization', video: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/04_Customization.mp4', image: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/svg/Customization.svg', text: 'Easily customize your app’s authentication process by writing code or picking one of our 100+ pre-built Auth0 Rules and Extensions.' },
  { id: 4, name: 'Result', class: 'result', video: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/05_Result.mp4', image: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/svg/Result.svg', text: 'Your use case(s) + Your tech stack + Your deployment model + Your customization + Your changing needs = a seamless and secure Auth0 Identity solution that adapts to your future' }
];

var navListClass = 'slide-list-nav-item',
	lastIndex = sources.length -1,
	isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

export default class Carousel extends React.Component {
	constructor (props, context) {
		super(props, context);
		
		this.state = {
			currentIndex: 0,
			videoVisibility: true, 
		};

		this.videoHandler = this.videoHandler.bind(this);
		this.changeSource = this.changeSource.bind(this);
		this.changeImage = this.changeImage.bind(this);
	}

	componentDidMount() {
	    if(isMobile) 
	    {
			this.state = {
				videoVisibility: false, 
			};
	    }
	    else {
			document.querySelector('.new-carousel video').addEventListener('ended', this.videoHandler, false);
	    }
	}

	componentWillUnmount() {
		document.querySelector('.new-carousel video').removeEventListener('ended', this.videoHandler, false);
	}

	videoHandler = (event) => {
		var videoElement = document.querySelector('.new-video');
		if(!videoElement) { return; }
		if(this.state.currentIndex === lastIndex) {
			var that = this;
			return new Promise(function (resolve) {
			    document.querySelector('.new-carousel video').addEventListener('ended', function endedListener() {
			    	document.querySelector('.new-carousel video').removeEventListener('ended', endedListener);
	            	that.setState({
						currentIndex: lastIndex,
						videoVisibility: false
					});
			        resolve();
			    });
			});
		}
		var updatedIndex = this.state.currentIndex + 1;
		this.setState({
			currentIndex: updatedIndex
		});
	}

	changeSource(event) {
		var buttons = document.getElementsByTagName("Button"),
			currentButtonIndex = Number(event.target.id);
		if(currentButtonIndex === lastIndex) {
			for(var i = 0; i < buttons.length; i++)
			{
				if(buttons[i].classList.contains('selected')) {
					buttons[i].classList.remove('selected');
				}
				buttons[i].classList.add('completed', sources[i].class);
			}
		} else {
			for(var i = 0; i < buttons.length; i++)
			{
				if(buttons[i].classList.contains('selected') && event.target.id !== buttons[i].id)
				{
					buttons[i].classList.remove('selected');
				}
				else if(event.target.id === buttons[i].id) {
					event.target.classList.add('selected');
				}
			}
		}

		this.setState({
			currentIndex: event.target.id,
			videoVisibility: false
		});
		document.querySelector('.new-carousel video').removeEventListener('ended', this.videoHandler, false);
	}

	changeImage(event) {
		var buttons = document.getElementsByTagName("Button"),
			currentButtonIndex = Number(event.target.id);
			if(!isMobile){
				if(currentButtonIndex === lastIndex) {
					for(var i = 0; i < buttons.length; i++)
					{
						if(buttons[i].classList.contains('selected')) {
							buttons[i].classList.remove('selected');
						}
						buttons[i].classList.add('completed', sources[i].class);
					}
				} else {
					for(var i = 0; i < buttons.length; i++)
					{
						if(buttons[i].classList.contains('completed')) {
							buttons[i].classList.remove('completed', sources[i].class);
							event.target.classList.add('selected');
						}
						else if(buttons[i].classList.contains('selected') && event.target.id !== buttons[i].id)
						{
							buttons[i].classList.remove('selected');
						}
						else if(event.target.id === buttons[i].id) {
							event.target.classList.add('selected');
						}
					}
				}				
			}
			if(window.innerWidth <= 600) {
				for(var i = 0; i < buttons.length; i++)
				{
					buttons[i].classList.add('completed', sources[i].class);
					if(event.target.id === buttons[i].id) {
						event.target.classList.add('mobile-selected');
					} else if(buttons[i].classList.contains('mobile-selected') && event.target.id !== buttons[i].id) 
					{
						buttons[i].classList.remove('mobile-selected');
					}
				}
			}

		this.setState({
			currentIndex: event.target.id
		});
	}

	render () {
			if(this.state.videoVisibility === true) {
				return (
				<div className="new-carousel">
	              	<h3 className="h3-carousel">{ sources[this.state.currentIndex].text }</h3>
					<Video url={ sources[this.state.currentIndex].video } />
					<div className="slide-list-nav">
			          <div className="slide-list-nav-wrapper">
			            <Button id={0} onClick={ this.changeSource } className={ this.state.currentIndex === 0 ? 'slide-list-nav-item selected': 'slide-list-nav-item' }>Use Cases</Button>
			            <Button id={1} onClick={ this.changeSource } className={ this.state.currentIndex === 1 ? 'slide-list-nav-item selected': 'slide-list-nav-item' }>Technology</Button>
			            <Button id={2} onClick={ this.changeSource } className={ this.state.currentIndex === 2 ? 'slide-list-nav-item selected': 'slide-list-nav-item' }>Deployment</Button>
			            <Button id={3} onClick={ this.changeSource } className={ this.state.currentIndex === 3 ? 'slide-list-nav-item selected': 'slide-list-nav-item' }>Customization</Button>
			            <Button id={4} onClick={ this.changeSource } className={ this.state.currentIndex === 4 ? 'slide-list-nav-item selected': 'slide-list-nav-item' }>Result</Button>
			          </div>
			        </div>
				</div>
				)
			}
			if(this.state.videoVisibility === false) {
				return (
				<div className="new-carousel">
	              	<h3 className="h3-carousel">{ sources[this.state.currentIndex].text }</h3>
					<Image url={ sources[this.state.currentIndex].image } />
					<div className="slide-list-nav">
			          <div className="slide-list-nav-wrapper">
			            <Button id={0} onClick={ this.changeImage } className={navListClass}>Use Cases</Button>
			            <Button id={1} onClick={ this.changeImage } className={navListClass}>Technology</Button>
			            <Button id={2} onClick={ this.changeImage } className={navListClass}>Deployment</Button>
			            <Button id={3} onClick={ this.changeImage } className={navListClass}>Customization</Button>
			            <Button id={4} onClick={ this.changeImage } className={navListClass}>Result</Button>
			          </div>
			        </div>
				</div>
				)
			}
	}
}

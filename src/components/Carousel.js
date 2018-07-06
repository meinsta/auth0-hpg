import React from 'react';
import { Button } from 'reactstrap';
import Video from './Video';
import Image from './Image';

const sources = [
  { id: 0, name: 'Use Cases', class: 'use-cases', video: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/01_Use_Cases.mp4', image: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/svg/UseCases.svg', text: 'Choose your use case. Auth0’s Universal Identity Platform for web, mobile and IoT can handle any of them — B2C, B2B, B2E or a combination.'  },
  { id: 1, name: 'Technology', class: 'technologies', video: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/02_Technology_1.mp4', image: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/svg/Technology.svg', text: 'Your language. Your stack. Auth0 can connect to any application or API. Our 65+ SDKs and pre-configured Quickstarts offer rapid integration.' },
  { id: 2, name: 'Deployment', class: 'deployment',  video: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/03_Deployment.mp4', image: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/svg/Deployment.svg', text: 'Choose the deployment that suits your needs — your cloud, Auth0 Cloud, on-premise, or hybrid.' },
  { id: 3, name: 'Customization', class: 'customization', video: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/04_Customization.mp4', image: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/svg/Customization.svg', text: 'Easily customize your app’s authentication process by writing code or picking one of our 100+ pre-built Auth0 Rules and Extensions.', linkText: 'Auth0 Rules and Extensions', linkHref: 'https://auth0.com/docs/extensions/authorization-extension/v2' },
  { id: 4, name: 'Result', class: 'result', video: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/05_Result.mp4', image: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/svg/Result.svg', text: 'Your use case(s) + Your tech stack + Your deployment model + Your customization + Your changing needs = a seamless and secure Auth0 Identity solution that adapts to your future' }
];

var lastIndex = sources.length -1;

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
};

export default class Carousel extends React.Component {
	constructor (props, context) {
		super(props, context);
		
		this.state = {
			currentIndex: 0,
			videoVisibility: true,
			listeners: true 
		};

		this.resize = this.resize.bind(this);
		this.videoHandler = this.videoHandler.bind(this);
		this.changeSource = this.changeSource.bind(this);
		this.changeImage = this.changeImage.bind(this);
	}

	componentDidMount() {
		window.addEventListener('load', this.resize, false);
	    window.addEventListener('resize', throttle(this.resize, 500), false);

	    if(window.innerWidth >= 600 && this.state.listeners === true ) {
			document.querySelector('.new-carousel video').addEventListener('ended', this.videoHandler, false);
	    }
	}

	componentWillUnmount() {
		document.querySelector('.new-carousel video').removeEventListener('ended', this.videoHandler, false);
	}

   	resize = (event) => {
   		if(this.state.listeners === true) {
		    this.setState({videoVisibility: window.innerWidth >= 600});
   		}
		var buttons = document.querySelectorAll('.slide-list-nav-wrapper Button');
		if(window.innerWidth >= 600){
			for(var i = 0; i < buttons.length; i++)
			{
				if(buttons[this.state.currentIndex].classList.contains('mobile-selected'))
				{
					buttons[i].classList.remove('mobile-selected');
				}
				if(buttons[i].classList.contains('completed'))
				{
					buttons[i].classList.remove('completed', sources[i].class);
				}
				buttons[this.state.currentIndex].classList.add('selected');
			}
		}
		if(window.innerWidth < 600){
			for(var i = 0; i < buttons.length; i++)
			{
				if(!buttons[i].classList.contains('completed'))
				{
					buttons[i].classList.add('completed', sources[i].class);
				}
				if(buttons[i].classList.contains('mobile-selected') && buttons[i].id !== buttons[this.state.currentIndex]) {
					buttons[i].classList.remove('mobile-selected');
				}
				buttons[this.state.currentIndex].classList.add('mobile-selected');
			}
		}
	}

	videoHandler = (event) => {
		var buttons = document.querySelectorAll('.slide-list-nav-wrapper Button'),
			videoElement = document.querySelector('.new-video');
		if(!videoElement) { return; }
		if(this.state.currentIndex === lastIndex && this.state.listeners === true) {
			for(var i = 0; i < buttons.length; i++)
			{
				if(buttons[i].classList.contains('selected')) 
				{
					buttons[i].classList.remove('selected');
					buttons[i].classList.add('completed', sources[i].class);
				}
				buttons[i].classList.add('completed', sources[i].class);
			}  
			var that = this;
			return new Promise(function (resolve) {
			    document.querySelector('.new-carousel video').addEventListener('ended', function endedListener() {
			    	document.querySelector('.new-carousel video').removeEventListener('ended', endedListener);
	            	that.setState({
						currentIndex: lastIndex,
						videoVisibility: false,
						listeners: false,
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
		var currentButtonIndex = Number(event.target.id); 
		this.setState({
			currentIndex: currentButtonIndex,
			videoVisibility: false,
			listeners: false
		});
		document.querySelector('.new-carousel video').removeEventListener('ended', this.videoHandler, false);
	}

	changeImage(event) {
		var currentButtonIndex = Number(event.target.id),
			buttons = document.querySelectorAll('.slide-list-nav-wrapper Button');
		if(window.innerWidth >= 600){
			for(var i = 0; i < buttons.length; i++)
			{
				if(currentButtonIndex === lastIndex) {
					buttons[i].classList.add('completed', sources[i].class);
					buttons[i].classList.remove('selected');
				}
				if(currentButtonIndex !== lastIndex) {
					if(buttons[i].classList.contains('completed'))
					{
						buttons[i].classList.remove('completed', sources[i].class);
					}
				}  
			}
		}
		this.setState({
			currentIndex: currentButtonIndex
		});
	}

	render () {
			if(this.state.videoVisibility === true) {
				return (
				<div className="new-carousel">
	              	<h3 className="h3-carousel" dangerouslySetInnerHTML={{__html: sources[this.state.currentIndex].linkText ? (sources[this.state.currentIndex].text).replace(sources[this.state.currentIndex].linkText, sources[this.state.currentIndex].linkText.link(sources[this.state.currentIndex].linkHref)) : sources[this.state.currentIndex].text }} />
					<Video url={ sources[this.state.currentIndex].video } />
					<div className="slide-list-nav">
			          <div className="slide-list-nav-wrapper">
			            <Button id={0} onClick={ this.changeSource } className={ this.state.currentIndex === 0 ? 'slide-list-nav-item selected': 'slide-list-nav-item'  }>Use Cases</Button>
			            <Button id={1} onClick={ this.changeSource } className={ this.state.currentIndex === 1 ? 'slide-list-nav-item selected': 'slide-list-nav-item' }>Technology</Button>
			            <Button id={2} onClick={ this.changeSource } className={ this.state.currentIndex === 2 ? 'slide-list-nav-item selected': 'slide-list-nav-item' }>Deployment</Button>
			            <Button id={3} onClick={ this.changeSource } className={ this.state.currentIndex === 3 ? 'slide-list-nav-item selected': 'slide-list-nav-item'  }>Customization</Button>
			            <Button id={4} onClick={ this.changeSource } className={ this.state.currentIndex === 4 ? 'slide-list-nav-item selected': 'slide-list-nav-item' }>Result</Button>
			          </div>
			        </div>
				</div>
				)
			}
			if(this.state.videoVisibility === false) {
				 if(window.innerWidth >= 600) {
					return (
					<div className="new-carousel">
		              	<h3 className="h3-carousel" dangerouslySetInnerHTML={{__html: sources[this.state.currentIndex].linkText ? (sources[this.state.currentIndex].text).replace(sources[this.state.currentIndex].linkText, sources[this.state.currentIndex].linkText.link(sources[this.state.currentIndex].linkHref)) : sources[this.state.currentIndex].text }} />
						<Image alt={ sources[this.state.currentIndex].alt } url={ sources[this.state.currentIndex].image } />
						<div className="slide-list-nav">
				          <div className="slide-list-nav-wrapper">
				            <Button id={0} onClick={ this.changeImage } className={ this.state.currentIndex === 0 ? 'slide-list-nav-item selected': this.state.currentIndex === 4 ? 'slide-list-nav-item completed use-cases': 'slide-list-nav-item' }>Use Cases</Button>
				            <Button id={1} onClick={ this.changeImage } className={ this.state.currentIndex === 1 ? 'slide-list-nav-item selected': this.state.currentIndex === 4 ? 'slide-list-nav-item completed technologies': 'slide-list-nav-item' }>Technology</Button>
				            <Button id={2} onClick={ this.changeImage } className={ this.state.currentIndex === 2 ? 'slide-list-nav-item selected': this.state.currentIndex === 4 ? 'slide-list-nav-item completed deployment': 'slide-list-nav-item' }>Deployment</Button>
				            <Button id={3} onClick={ this.changeImage } className={ this.state.currentIndex === 3 ? 'slide-list-nav-item selected': this.state.currentIndex === 4 ? 'slide-list-nav-item completed customization': 'slide-list-nav-item' }>Customization</Button>
				            <Button id={4} onClick={ this.changeImage } className={ this.state.currentIndex === 4 ? 'slide-list-nav-item completed result': 'slide-list-nav-item'}>Result</Button>
				          </div>
				        </div>
					</div>
					) 
				}
				if(window.innerWidth < 600) {
					return (
					<div className="new-carousel">
		              	<h3 className="h3-carousel" dangerouslySetInnerHTML={{__html: sources[this.state.currentIndex].linkText ? (sources[this.state.currentIndex].text).replace(sources[this.state.currentIndex].linkText, sources[this.state.currentIndex].linkText.link(sources[this.state.currentIndex].linkHref)) : sources[this.state.currentIndex].text }} />
						<Image alt={ sources[this.state.currentIndex].alt } url={ sources[this.state.currentIndex].image } />
						<div className="slide-list-nav">
				          <div className="slide-list-nav-wrapper">
	 			            <Button id={0} onClick={ this.changeImage } className={ this.state.currentIndex === 0 ? 'slide-list-nav-item mobile-selected completed use-cases': 'slide-list-nav-item completed use-cases' }>Use Cases</Button>
				            <Button id={1} onClick={ this.changeImage } className={ this.state.currentIndex === 1 ? 'slide-list-nav-item mobile-selected completed technologies': 'slide-list-nav-item completed technologies' }>Technology</Button>
				            <Button id={2} onClick={ this.changeImage } className={ this.state.currentIndex === 2 ? 'slide-list-nav-item mobile-selected completed deployment': 'slide-list-nav-item completed deployment' }>Deployment</Button>
				            <Button id={3} onClick={ this.changeImage } className={ this.state.currentIndex === 3 ? 'slide-list-nav-item mobile-selected completed customization': 'slide-list-nav-item completed customization' }>Customization</Button>
				            <Button id={4} onClick={ this.changeImage } className={ this.state.currentIndex === 4 ? 'slide-list-nav-item mobile-selected completed result': 'slide-list-nav-item completed result' }>Result</Button>
				          </div>
				        </div>
					</div>
					) 
				}
			}			
	}
}

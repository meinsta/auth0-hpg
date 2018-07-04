import React from 'react';
import { Button } from 'reactstrap';
import Video from './Video';
import Icon from './Icon';

const sources = [
  { id: 0, name: 'UseCases', video: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/01_Use_Cases.mp4' },
  { id: 1, name: 'Technology', video: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/02_Technology_1.mp4' },
  { id: 2, name: 'Deployment', video: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/03_Deployment.mp4' },
  { id: 3, name: 'Customization', video: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/04_Customization.mp4' },
  { id: 4, name: 'Result', video: 'https://meinsta.github.io/auth0-hpg/What_is_Auth0/05_Result.mp4' }
];

export default class Carousel extends React.Component {
	constructor (props) {
		super(props);
		
		this.state = {
			currentImageIndex: 0
		};
	}

	componentDidMount() {
		document.querySelector('.new-carousel video').addEventListener('ended', this.videoHandler, false);
	}

	videoHandler = (event) => {
		const lastIndex = sources.length - 1;

		if( !lastIndex )
		{
			const { currentImageIndex } = this.state;
			const index =  currentImageIndex + 1;
			this.setState({
				currentImageIndex: index
			});
		}

	};

	changeSource(index) {
		if(document.querySelector('.new-video')) {
			var videoElement = document.querySelector('.new-video');
			videoElement.parentNode.removeChild(videoElement);
			document.querySelector('.new-image').classList.add('new-image-only');
		}
		return () => {
		  this.setState({
		    currentImageIndex: index
		  });
		};
	}

	render () {

		var elementPos = sources.map(function(x) {return x.id; }).indexOf(this.state.currentImageIndex);

		return (
			<div className="new-carousel">
				<ImageSlide url={ sources[elementPos].name } />
				<Video name={ sources[elementPos].name } url={ sources[elementPos].video } />
				<div className="slide-list-nav">
		          <div className="slide-list-nav-wrapper">
		            <Button onClick={this.changeSource(0)} className={ this.state.currentImageIndex === 0 ? 'slide-list-nav-item selected': 'slide-list-nav-item' }><div className="dot" />Use Cases</Button>
		            <Button onClick={this.changeSource(1)} className={ this.state.currentImageIndex === 1 ? 'slide-list-nav-item selected': 'slide-list-nav-item' }><div className="dot" />Technology</Button>
		            <Button onClick={this.changeSource(2)} className={ this.state.currentImageIndex === 2 ? 'slide-list-nav-item selected': 'slide-list-nav-item' }><div className="dot" />Deployment</Button>
		            <Button onClick={this.changeSource(3)} className={ this.state.currentImageIndex === 3 ? 'slide-list-nav-item selected': 'slide-list-nav-item' }><div className="dot" />Customization</Button>
		            <Button onClick={this.changeSource(4)} className={ this.state.currentImageIndex === 4 ? 'slide-list-nav-item selected': 'slide-list-nav-item' }><div className="dot" />Result</Button>
		          </div>
		        </div>
			</div>
		);
	}
}

const ImageSlide = ({ url }) => (
		<div className="new-image container"><Icon icon={`${url}`} iconStyle={'image-slide'} /></div>
)

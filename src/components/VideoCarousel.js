import React from 'react';

export default class VideoCarousel extends React.Component  {

  //add listeners when component is added to DOM
  componentDidMount() {
    // define the selected video
    var carouselVideo = document.querySelector('.slide.selected video');
    //scroll listener which controls play/pause
    window.addEventListener("scroll", function(){
      if (elementVisible(carouselVideo)) {
        carouselVideo.play();
      }
      if (!elementVisible(carouselVideo)) {
        carouselVideo.pause();
      }
    })

    // ended video listener, which determines when to go to next slide
    carouselVideo.addEventListener('ended',carouselHandler,false);

    // handles visibility within the browser window
    function elementVisible( element ) {
        var elementTop    = element.getBoundingClientRect().top,
            elementBottom = element.getBoundingClientRect().bottom;

        return elementTop >= 0 && elementBottom <= window.innerHeight;
    }

    // quick and dirty implementation of video advancement
    function carouselHandler(e) {

      // determine initial selected state of the slide as well as slide legend
      var slides = document.querySelectorAll('.slide');
      var slideSelected = document.querySelector('.slide.selected');

      var slideLegend = document.querySelectorAll('.slide-list-nav li');
      var slideLegendSelected = document.querySelector('.slide-list-nav li.selected');

      // iterate over sides
      for(var i = 0; i < slides.length;i++)
      {
         if(slides[i] == slideSelected)
         {
           var next = slides[i + 1];

           // if there is a next slide, swap selected class and play video
           if(next) {
             slideSelected.classList.remove('selected');
             next.classList.add('selected');
             next.querySelector('video').play();
           }
           // if you are at the end, hide the videos and show the images
           if(!next) {
            slides[i].querySelector('video').classList.add('hidden');
            slides[i].querySelector('img').classList.remove('hidden');

           }
         }
         //since the length is the same, i will abuse the initial for loop here
         if(slideLegend[i] == slideLegendSelected)
         {
           var nextLegend = slideLegend[i + 1];

           // same vibe as above-if there is a next slide, swap selected class
           if(next) {
             slideLegendSelected.classList.remove('selected');
             nextLegend.classList.add('selected');
           }
           // if you are at the end, add the colored treatment to the legend
           if(!next) {
            var lastLegend =  slideLegend[slideLegend.length - 1];;
            lastLegend.classList.remove('selected');
            slideLegend[0].classList.add('completed');
            slideLegend[1].classList.add('completed');
            slideLegend[2].classList.add('completed');
            slideLegend[3].classList.add('completed');
            slideLegend[4].classList.add('completed');
            slideLegend[0].querySelector('.dot').classList.add('use-case');
            slideLegend[1].querySelector('.dot').classList.add('technologies');
            slideLegend[2].querySelector('.dot').classList.add('deployment');
            slideLegend[3].querySelector('.dot').classList.add('customization');
            slideLegend[4].querySelector('.dot').classList.add('result');
           }
         }
      }
    }

  }
  render() {
      return (
        <div>
          <div>
            <ul className="slide-list">
              <li className="slide selected" id="0">
                <div>
                    <video controls playsInline poster="https://meinsta.github.io/auth0-hpg/What_is_Auth0/posters/1.svg"><source src="https://meinsta.github.io/auth0-hpg/What_is_Auth0/01_Use_Cases.mp4" type="video/mp4" /></video>
                    <img className="poster-image hidden" src="https://meinsta.github.io/auth0-hpg/What_is_Auth0/posters/1.svg" />
                </div>
              </li>
              <li className="slide" id="1">
                <div>
                    <video controls playsInline poster="https://meinsta.github.io/auth0-hpg/What_is_Auth0/posters/2.svg"><source src="https://meinsta.github.io/auth0-hpg/What_is_Auth0/02_Technology_1.mp4" type="video/mp4" /></video>
                    <img className="poster-image hidden" src="https://meinsta.github.io/auth0-hpg/What_is_Auth0/posters/2.svg" />
                </div>
              </li>
              <li className="slide" id="2">
                <div>
                    <video controls playsInline poster="https://meinsta.github.io/auth0-hpg/What_is_Auth0/posters/3.svg"><source src="https://meinsta.github.io/auth0-hpg/What_is_Auth0/03_Deployment.mp4" type="video/mp4" /></video>
                    <img className="poster-image hidden" src="https://meinsta.github.io/auth0-hpg/What_is_Auth0/posters/3.svg" />
                </div>
              </li>
              <li className="slide" id="3">
                <div>
                    <video controls playsInline poster="https://meinsta.github.io/auth0-hpg/What_is_Auth0/posters/4.svg"><source src="https://meinsta.github.io/auth0-hpg/What_is_Auth0/04_Customization.mp4" type="video/mp4" /></video>
                    <img className="poster-image hidden" src="https://meinsta.github.io/auth0-hpg/What_is_Auth0/posters/4.svg" />
                </div>
              </li>
              <li className="slide" id="4">
                <div>
                    <video controls playsInline poster="https://meinsta.github.io/auth0-hpg/What_is_Auth0/posters/5.svg"><source src="https://meinsta.github.io/auth0-hpg/What_is_Auth0/05_Result.mp4" type="video/mp4" /></video>
                    <img className="poster-image hidden" src="https://meinsta.github.io/auth0-hpg/What_is_Auth0/posters/5.svg" />
                </div>
              </li>
            </ul>
          </div>
          <div className="slide-list-nav-container">
            <ul className="slide-list-nav">
              <li className="slide-list-nav-item selected" id="0"><div className="dot" />Use Case</li>
              <li className="slide-list-nav-item" id="1"><div className="dot" />Technologies</li>
              <li className="slide-list-nav-item" id="2"><div className="dot" />Deployment</li>
              <li className="slide-list-nav-item" id="3"><div className="dot" />Customization</li>
              <li className="slide-list-nav-item" id="4"><div className="dot" />Result</li>
            </ul>
          </div>
        </div>
      );
  }
}
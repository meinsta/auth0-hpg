import React from 'react';

export default class VideoCarousel extends React.Component  {

  //add listeners when component is added to DOM
  componentDidMount() {
    // define the selected video
    var carouselVideo = document.querySelector('.slide.selected video');

    // detect all videos
    var vids = document.querySelectorAll('.slide video'); 

    //pause all the videos by default
    for (var i = vids.length - 1; i >= 0; i--) {
      vids[i].pause();
    }

    // promise test
    let autoPlayAllowed = true;
    let v = document.createElement('video');
    v.src = ""; // we need this

    const promise = v.play();
    if (promise instanceof Promise) {
      promise.catch(function(error) {
        console.log(error.message);
        // Check if it is the right error
        if (error.name === 'NotAllowedError') {
          autoPlayAllowed = false;
        } else {
          // Don't throw the error so that we get to the then
          // or throw it but set the autoPlayAllowed to true in here
        }
      }).then(function() {
        if (autoPlayAllowed) {
          // Autoplay is allowed - continue with initialization
          console.log('autoplay allowed')
          //scroll listener which controls play/pause
          window.onscroll = autoplay;
          // ended video listener, which determines when to go to next slide
          carouselVideo.addEventListener('ended', carouselHandler, false);
        } else {
          // Autoplay is not allowed - wait for the user to trigger the play button manually
          console.log('autoplay NOT allowed')
        }
      });

    } else {
      // Unknown if allowed
      // Note: you could fallback to simple event listeners in this case
      console.log('autoplay unknown')
    }

    function autoplay() {
        for (var i = vids.length - 1; i >= 0; i--) {
            var currentYpos = window.pageYOffset || document.documentElement.scrollTop;
        if ( currentYpos >= vids[i].offsetTop && currentYpos <= vids[i].offsetTop + vids[i].offsetHeight ) {
          vids[i].play();
        }else{
          vids[i].pause();
        }
      }
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
                    <video controls muted playsInline poster="https://meinsta.github.io/auth0-hpg/What_is_Auth0/posters/1.svg"><source src="https://meinsta.github.io/auth0-hpg/What_is_Auth0/01_Use_Cases.mp4" type="video/mp4" /></video>
                    <img className="poster-image hidden" src="https://meinsta.github.io/auth0-hpg/What_is_Auth0/posters/1.svg" alt="Use Cases" />
                </div>
              </li>
              <li className="slide" id="1">
                <div>
                    <video controls muted playsInline poster="https://meinsta.github.io/auth0-hpg/What_is_Auth0/posters/2.svg"><source src="https://meinsta.github.io/auth0-hpg/What_is_Auth0/02_Technology_1.mp4" type="video/mp4" /></video>
                    <img className="poster-image hidden" src="https://meinsta.github.io/auth0-hpg/What_is_Auth0/posters/2.svg" alt="Technology" />
                </div>
              </li>
              <li className="slide" id="2">
                <div>
                    <video controls muted playsInline poster="https://meinsta.github.io/auth0-hpg/What_is_Auth0/posters/3.svg"><source src="https://meinsta.github.io/auth0-hpg/What_is_Auth0/03_Deployment.mp4" type="video/mp4" /></video>
                    <img className="poster-image hidden" src="https://meinsta.github.io/auth0-hpg/What_is_Auth0/posters/3.svg" alt="Deployment" />
                </div>
              </li>
              <li className="slide" id="3">
                <div>
                    <video controls muted playsInline poster="https://meinsta.github.io/auth0-hpg/What_is_Auth0/posters/4.svg"><source src="https://meinsta.github.io/auth0-hpg/What_is_Auth0/04_Customization.mp4" type="video/mp4" /></video>
                    <img className="poster-image hidden" src="https://meinsta.github.io/auth0-hpg/What_is_Auth0/posters/4.svg" alt="Customization" />
                </div>
              </li>
              <li className="slide" id="4">
                <div>
                    <video controls muted playsInline poster="https://meinsta.github.io/auth0-hpg/What_is_Auth0/posters/5.svg"><source src="https://meinsta.github.io/auth0-hpg/What_is_Auth0/05_Result.mp4" type="video/mp4" /></video>
                    <img className="poster-image hidden" src="https://meinsta.github.io/auth0-hpg/What_is_Auth0/posters/5.svg" alt="Result" />
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
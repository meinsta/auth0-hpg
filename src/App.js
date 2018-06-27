import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const url = 'https://meinsta.github.io/auth0-hpg/symbol-defs.svg';

const Icon = (props) => (
  <svg viewBox='0 0 16 16' className={`icon icon-${props.icon}`}>
    <use xlinkHref={`${url}#icon-${props.icon}`} />
  </svg>
);

class App extends Component {

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
      <div className="App">
      <header>
        <video autoPlay playsInline muted loop id="hero"><source src="https://meinsta.github.io/auth0-hpg/Hero/atom.mp4" type="video/mp4" /></video>
        <aside>
        <h1>Never compromise on <span className="emphasis">identity</span></h1>
        <h4>We provide a universal authentication &amp; authorization platform for web,<br />mobile and legacy applications.</h4>
        </aside>
      </header>
      <main>
        <section className="carousel">
          <div className="carousel-container">
            <h2>What’s Auth0</h2>
            <h3 className="h3-carousel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</h3>
            <div className="video-carousel"><VideoCarousel /></div>
          </div>
        </section>
      <CustomerCloud />
      <section className="stats">
        <div className="stats-column">
          <h2 className="h2-stats">Risk-based, security-first approach</h2>
          <h3 className="h3-stats">Robust security architecture and features providing adaptive multi-layer security, designed by world-class security experts.</h3>
          <div className="stats-table">
            <div className="stats-table-column">
              <h5>1.1B<span className="emphasis">+</span></h5>
              <div className="stats-list">
                <p>Monthly Logins</p>
                <p>Securely Authenticated</p>
              </div>
            </div>
            <div className="stats-table-column">
              <h5>1.3M<span className="emphasis">+</span></h5>
              <div className="stats-list">
                <p>Malicious Logins</p>
                <p>Prevented</p>
              </div>
            </div>
          </div>
          <p className="h3-link">Learn more <div className="triangle" /></p>
        </div>
        <div className="stats-column">
          <h2 className="h2-stats">Enterprise-class availability. Always ready.</h2>
          <h3 className="h3-stats">Advanced infrastructure ensuring high availability and resiliency for its users with globally distributed data centers and full disaster recovery systems.</h3>
          <div className="stats-table">
            <div className="stats-table-column">
              <div className="stats-list-cluster">
                <h5 className="stats-list-cluster-label">3</h5>
                <div className="stats-list-cluster-icon-container">
                  <img className="stats-list-cluster-icon" src="https://twemoji.maxcdn.com/2/svg/1f1fa-1f1f2.svg" alt="USA" />
                  <img className="stats-list-cluster-icon" src="https://twemoji.maxcdn.com/2/svg/1f1e6-1f1fa.svg" alt="New Zealand" />
                  <img className="stats-list-cluster-icon" src="https://twemoji.maxcdn.com/2/svg/1f1ea-1f1fa.svg" alt="European Union" />
                </div>
              </div>
              <div className="stats-list small">
                <p>Clusters</p>
                <p className="stats-list-detail">(US, EU, AU)</p>
              </div>
            </div>
            <div className="stats-table-column">
              <h5>99.9<span className="emphasis">%</span></h5>
              <div className="stats-list small">
                <p>Guaranteed SLA</p>
                <p className="stats-list-detail">For Prod. Environments</p>
              </div>
            </div>
          </div>
          <p className="h3-link">Learn more <div className="triangle" /></p>
        </div>
      </section>
      </main>
      </div>
    );
  }
}

class VideoCarousel extends Component {
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

class CustomerCloud extends Component {
    render() {

        let logos = ["aeromexico", "jet-airways", "nvidia", "amd", "mns", "pbs", "atalssian", "mazda", "polaris", "bluetooth", "mozilla", "vmware", "harpercollins", "news-corp"];

        let svgs = logos.map(svg => {
           return <Icon icon={svg} />
        });

        return (
          <section className="customers">
            <h2 className="h2-customers">Join thousands of companies that trust Auth0 everyday</h2>
            <div className="cloud-container">{ svgs }</div>
            <p className="h3-link">See All Customers <div className="triangle" /></p>
          </section>
        );
    }
}

export default App;

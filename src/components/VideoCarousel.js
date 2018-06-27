import React from 'react';

export default class VideoCarousel extends React.Component  {
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
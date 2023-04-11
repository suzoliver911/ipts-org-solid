import type { Component } from 'solid-js';
import styles from './App.module.css';

import logo from './ipts-light-logo.svg';
import hamburger from './menu1.svg';
import twitter from './twitter.svg';
import facebook from './facebook.svg';
import instagram from './instagram.svg';
import linkedin from './linkedin.svg';
import placeholder from './spaceship-cockpit.jpg';
import vid1 from './spaceship-cockpit.mp4';
import vid2 from './astronaut-walking-on-an-mars.mp4';
import vid3 from './camera-moving-through-some-planets.mp4';
import vid4 from './intergalactic-travel.mp4';
import vid5 from './flight-in-multidimensional-hyperspace.mp4';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <div class={styles.container}>
        <div class={styles.header}>
          <img src={logo} class={styles.logo} alt="logo" />
          <div class={styles.menu}>
            <a class={styles.selected}>HOME</a>
            <a>ARTICLES</a>
            <a>VIDEOS</a>
            <a>ABOUT</a>
            <a>CONTACT</a>
          </div>
          <div class={styles.mobile}>
            <img src={hamburger} class={styles.icon} alt="menu" />
          </div>
        </div>
        <div class={styles.content}>
          <div id="hero">
            <video
              playsinline
              autoplay
              muted
              loop
              poster={placeholder}
              id="bgvideo"
              width="x"
              height="y"
            >
              <source src={vid1} type="video/mp4" />
              <source src={vid2} type="video/mp4" />
              <source src={vid3} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <footer>
        <div class={styles.fbody}>
          <div class={styles.links}>
            {/* <img src={logo} class={styles.logo} alt="logo" /> */}
            <h6>Quick Links</h6>
            <ul class={styles.footlinks}>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Reserve Your Adventure</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div class={styles.fform}>
            <h6>Subscribe</h6>
            <p>
              Sign up to receive updates on Interplanetary Travel news,
              announcements and travel deals.
            </p>
            <label for="submail">Email</label>
            <input type="email" id="submail" />
            <button type="button" id="subscribe">
              Submit
            </button>
          </div>
        </div>

        <hr />
        <div class={styles.theend}>
          <p class={styles.copyright}>
            Copyright &copy; 2023 All Rights Reserved by
            <a href="#">Interplanetary Travel System</a>.
          </p>
          <ul class={styles.socialcons}>
            <li>
              <a class={styles.facebook} href="#">
                <img src={facebook} alt="facebook" />
              </a>
            </li>
            <li>
              <a class={styles.twitter} href="#">
                <img src={twitter} alt="twitter" />
              </a>
            </li>
            <li>
              <a class={styles.instagram} href="#">
                <img src={instagram} alt="instagram" />
              </a>
            </li>
            <li>
              <a class={styles.linkedin} href="#">
                <img src={linkedin} alt="linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default App;

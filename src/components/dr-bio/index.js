import { LitElement, html, css } from 'lit-element';

import "svgs/github";
import "svgs/linkedin";
import "svgs/mail";
import "svgs/resume";
import "svgs/twitter";

export const BioStyle = css`
.bio-container {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 23%;
  height: 100%;
  max-height: 100%;

  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-right: solid 1px #E6E6E6;
  overflow-y: hidden;
}

.bio-container > div {
  margin-bottom: 50px;
}


/* title is inline block to allow nav to be on the top bar as well, also has custom font */
.profile{
  width: 100%;
  font: normal 1.35rem Palatino, "Palatino Linotype", serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: baseline;
}

.profile img {
  border: solid 1px #E6E6E6;
  border-radius: 100%;
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
}

.profile a {
  color: #353535;
}

.profile a:hover {
  color: #E50053;
}

.description {
  color: #888888;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.description .description-entry {
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
}

.page-menu {
  font-family: 'Roboto', sans-serif;
  font-weight: 200;
  font-size: 18px;
  letter-spacing: 1px;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.page-menu a {
  display: inline-block;
  color: #888888;
  text-decoration: none;

  padding: 5px 10px;

  border-left: 1px solid #353535;
  margin-bottom: .25rem;
  width: 100%;
}

.page-menu a:hover {
  color: #E5005E;
  text-decoration: none;
  border-left: 4px solid #E5005E;
  transform: scale(1, 1.01);
  transition: 0.2s ease-out;
}

.bio-links {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  font-size: 15px;
  width: 100%;
}

.icon-container {
  border-radius: 100px;
  border: 2px solid #EFEFEF;
  padding: 10px;
  margin-right: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
}

.icon-container:hover {
  border: 2px solid #E5005E;
  transition: 0.2s ease-out;
}

.icon {
  width: .65rem;
  height: .65rem;
}

.bio-footer {
  font-family: 'Roboto', sans-serif;
  font-size: .5rem;
  color: #888888;
}
`;


class Bio extends LitElement {

  static get styles() {
    return [ BioStyle ];
  }

  render() {
    return html`
      <link rel="stylesheet" type="module" href="./style.css"/>

      <div class="bio-container">
        <!-- profile info -->
        <div class="profile">
          <img alt="profile-pic" src="./img/profile_img.jpg"/>
          <div><a href="./index.html"> Doug Rudolph </a></div>
        </div>

        <!-- Description -->
        <div class="description">
          <div class="description-entry"> First engineer <a target="_blank" href="https://www.Interseller.io/about">@Interseller.io</a> </div>
          <div class="description-entry"> Former back-end engineer <a href="https://buzzfeed.com">@BuzzFeed</a> </div>
          <div class="description-entry"> Former SWE intern <a target="_blank" href="https://tech.buzzfeed.com/meet-buzzfeed-techs-2017-intern-squad-7d9d3bcefa05">@BuzzFeed</a> </div>
          <div class="description-entry"> <a target="_blank" href="https://hackny.org/blog/2017/06/announcing-the-class-of-2017-hackny-fellows">@hackNY Fellow </a> – 2017 </div>
          <div class="description-entry"> Rendering 👾 – Rust 🦀 – Haskell <b style="color: purple">λ</b></div>
        </div>

        <div class="page-menu">
          <a href="./index.html"> Blog posts </a>
          <a href="./about.html"> About me </a>
          <a href="./contact.html"> Contact info </a>
        </div>

        <div class="bio-links">
          <div>
            <a href="./doug_rudolph_resume.pdf" target="_blank">
              <span class="icon-container">
                <svg-resume></svg-resume>
              </span>
            </a>
          </div>
          <div>
            <a href="mailto:drudolph914@gmail.com?Subject=Hello" target="_top">
              <span class="icon-container">
                <svg-mail></svg-mail>
              </span>
            </a>
          </div>
          <div>
            <a href="https://twitter.com/_dougrudolph" target="_blank">
              <span class="icon-container">
                <svg-twitter></svg-twitter>
              </span>
            </a>
          </div>
          <div>
            <a href="https://github.com/11" target="_blank">
              <span class="icon-container">
                <svg-github></svg-github>
              </span>
            </a>
          </div>
          <div>
            <a href="https://linkedin.com/in/dougjrudolph" target="_blank">
              <span class="icon-container">
                <svg-linkedin></svg-linkedin>
              </span>
            </a>
          </div>
        </div>

        <div class="bio-footer">
          © All rights reserved – Theme by: <a target="_blank" href="https://twitter.com/_dougrudolph">@_dougrudolph</a>
        </div>
      </div>
    `;
  }
}

customElements.define('dr-bio', Bio);
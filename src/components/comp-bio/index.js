import { LitElement, html } from 'lit-element';

import { keyframes } from 'styles'
import { DesktopStyles } from './styles/desktop'

import profileImg from "./assets/prof2.jpg";
import "svgs/github";
import "svgs/linkedin";
import "svgs/mail";
import "svgs/resume";
import "svgs/twitter";
import "components/comp-link";

class Bio extends LitElement {
  static get styles() {
    return [
      keyframes.WaveAnimation,
      ...DesktopStyles
    ];
  }

  render() {
    return html`
      <div class="bio-wrapper">
        <div class="profile-picture-wrapper">
          <img src="${profileImg}"/>
        </div>

        <div class="bio-content-wrapper">
          <div class="bio-title">
            <div>Hello World, I'm<span class="bio-title-emphasis">Doug Rudolph <span class="wavy-hand">👋</span></span></div>
          </div>

          <div class="page-menu">
            <a href="/"> Blog posts </a>
            <a href="/about"> About me </a>
          </div>

          <div class="bio-icon-links">
            <div>
              <comp-link url="./doug_rudolph_resume.pdf" target="_blank">
                <span class="icon-container">
                  <svg-resume></svg-resume>
                </span>
              </comp-link>
            </div>
            <div>
              <comp-link url="mailto:drudolph914@gmail.com?Subject=Hello" target="_top">
                <span class="icon-container">
                  <svg-mail></svg-mail>
                </span>
              </comp-link>
            </div>
            <div>
              <comp-link url="https://twitter.com/_dougrudolph" target="_blank">
                <span class="icon-container">
                  <svg-twitter></svg-twitter>
                </span>
              </comp-link>
            </div>
            <div>
              <comp-link url="https://github.com/11" target="_blank">
                <span class="icon-container">
                  <svg-github></svg-github>
                </span>
              </comp-link>
            </div>
            <div>
              <comp-link url="https://linkedin.com/in/dougjrudolph" target="_blank">
                <span class="icon-container">
                  <svg-linkedin></svg-linkedin>
                </span>
              </comp-link>
            </div>
          </div>

          <div class="bio-footer"> © All rights reserved</div>
        </div>
      </div>
    `;
  }
}

customElements.define('comp-bio', Bio);

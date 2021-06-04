import { LitElement, html } from 'lit-element'

import { keyframes } from 'styles'
import { LandscapeStyles } from '../../styles/landscape'

import profileImg from "../../assets/prof2.jpg"
import "svgs/github"
import "svgs/linkedin"
import "svgs/mail"
import "svgs/resume"
import "svgs/twitter"
import "components/comp-link"

class NavLandscape extends LitElement {
  static get styles() {
    return [
      keyframes.WaveAnimation,
      ...LandscapeStyles
    ]
  }

  render() {
    return html`
      <div class="nav-wrapper">
        <div class="profile-picture-wrapper">
          <img src="${profileImg}"/>
        </div>

        <div class="nav-content-wrapper">
          <div class="nav-title">
            <div>Hello World, I'm<span class="nav-title-emphasis">Doug Rudolph <span class="wavy-hand">👋</span></span></div>
          </div>

          <nav class="nav-menu">
            <a href="/"> Blog posts </a>
            <a href="/about"> About me </a>
          </nav>

          <div class="nav-icon-links">
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

          <div class="nav-footer"> © All rights reserved</div>
        </div>
      </div>
    `
  }
}

customElements.define('nav-landscape', NavLandscape)

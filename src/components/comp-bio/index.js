import { LitElement, html } from 'lit-element';

import { DesktopStyle, MobileStyle } from './styles.js';
import { isMobile } from 'utils/device.js';

import profileImg from "./assets/profile_img.jpg";
import "svgs/github";
import "svgs/linkedin";
import "svgs/mail";
import "svgs/resume";
import "svgs/twitter";
import "components/comp-link";


class Bio extends LitElement {
  static get styles() {
    // const style = isMobile() ? MobileStyle : DesktopStyle;
    // return style;

    return DesktopStyle;
  }

  render() {
    return html`
      <div class="bio-container">
        <!-- profile info -->
        <div class="profile">
          <img alt="profile-pic" src="${profileImg}"/>
          <div><a href="/"> Doug Rudolph </a></div>
        </div>

        <!-- Description -->
        <div class="description">
          <div class="description-entry"> Creator of <comp-link url="https://schoolofthought.io">@schoolofthought.io</comp-link></b></div>
          <div class="description-entry"> First engineer <comp-link url="https://www.Interseller.io/about">@interseller.io</comp-link> </div>
          <div class="description-entry"> Former back-end engineer <comp-link url="https://buzzfeed.com">@BuzzFeed</comp-link> </div>
          <div class="description-entry"> Former engineering intern <comp-link url="https://tech.buzzfeed.com/meet-buzzfeed-techs-2017-intern-squad-7d9d3bcefa05">@BuzzFeed</comp-link> </div>
          <div class="description-entry"> <comp-link url="https://hackny.org/blog/2017/06/announcing-the-class-of-2017-hackny-fellows">@hackNY Fellow</comp-link> – 2017 </div>
        </div>

        <div class="page-menu">
          <a href="/"> Blog posts </a>
          <a href="/about"> About me </a>
          <a href="/contact"> Contact info </a>
        </div>

        <div class="bio-links">
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

        <div class="bio-footer">
          © All rights reserved – Theme by <comp-link url="https://twitter.com/_dougrudolph">@_dougrudolph</comp-link>
        </div>
      </div>
    `;
  }
}

customElements.define('comp-bio', Bio);

import { LitElement, css, html } from 'lit-element'
import { PageWrapper, colors, fonts } from 'styles'

import 'components/comp-bio'

const AboutStyle = css`
  .about-wrapper {
    position: static;
    z-index: 100;
    background-color: white;

    padding: 10rem 10rem 0 10rem;

    width: 100%;
    height: 100%;

    overflow-y: scroll
  }

  .about-title {
    font-family: ${fonts.wotfard2};
    font-weight: 900;
    font-size: 36px;
    padding-bottom: 5rem;
    text-align: center;
  }

  .about-description {
    display: inline-block;

    line-height: 1.6;
    font-family: ${fonts.wotfard};
    font-size: 22px;
    font-weight: 300;

    margin-bottom: 10rem;
    padding:0 25%;
  }

  .about-link {
    color: ${colors.orange};
    transition: 0.2s ease-out;
    text-decoration: underline solid transparent;
    font-weight: 600;
  }

  .about-link:hover {
    text-decoration: underline solid Currentcolor;
  }
`

const MomentList = css`
 .moment-list {
    display: flex;
    flex-direction: column;
    justify: center;
    align-items: center;

    height: 100%;
    width: 100%;
  }

  .moment-wrapper {
    width: 100%;
    height: 100%;
    border-radius: 2px;
    background-color: ${colors.white};
    margin: 0;

    display: grid;
    grid-template-columns: 50% 2rem 50%;
    grid-gap: 1rem;

  }

  .moment-right {
    justify-content: start;
  }

  .moment-left {
    text-align: right;
  }
`

const MomentContent = css`
  .moment-content {
    cursor: pointer;
    padding: 2rem;
    margin: 1rem;
    transition: 0.2s ease-out;
    display: block;
    height: auto;
  }

  .moment-title {
    text-transform: uppercase;
    font-family: ${fonts.wotfard2};
    font-size: 38px;
    font-weight: 900;
  }

  .moment-description {
    color: ${colors.black};
    font-family: ${fonts.wotfard};
    font-size: 20px;
    font-weight: 300;
  }

  .moment-date {
    background-color: ${colors.gray20};
    display: inline-block;
    padding: .75rem;
    margin-bottom: .25rem;
    font-family: ${fonts.roboto};
    font-size: 20px;
    font-weight: 300;
  }

  .moment-empty {
    display: inline-block;
    width: 1px;
    opacity: 0;
    height: auto;
  }
`

const MomentDivider = css`
  .moment-divider-wrapper {
    display: grid;
    justify-content: center;

    width: 100%;
    height: 100%;
  }

  .moment-divider {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 2rem;
    height: 100%;
  }

  .moment-divider-bar {
    background-color: ${colors.black};
    width: .25rem;
    height: 100%;
  }

  .moment-divider-dot {
    border-radius: 100px;
    background-color: ${colors.black};
    display: block;
    width: 20px;
    height: 20px;
  }
`

const MomentHover = css`
  .moment-content:hover {
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`

class About extends LitElement {
  static get styles() {
    return [
      PageWrapper,
      AboutStyle,
      MomentContent,
      MomentList,
      MomentDivider,
      MomentHover,
    ]
  }

  constructor() {
    super()
    this.moments = [
      {
        title: 'School of thought',
        description: 'Building my own education platform - schoolofthought.io',
        date: 'In my free time',
      },
      {
        title: 'Interseller.io',
        description: 'First engineer and leading an engineering team',
        date: 'July 2019 - Current',
      },
      {
        title: 'BuzzFeed',
        description: 'Full-time Backend engineer',
        date: 'August 2017 - Feburary 2019',
      },
      {
        title: 'BuzzFeed',
        description: 'Engineering internship',
        date: 'May 2017 - August 2017',
      },
      {
        title: 'hackNY Fellow',
        description: 'hackNY Fellow - class of 2017',
        date: 'June 2017 - August 2017',
      },
    ]
  }

  renderMoment = (title, description, date=null, idx=0) => {
    if (idx === 0 || idx % 2 === 0) {
      return html`
        <div class="moment-wrapper moment-left">
          <div class="moment-content">
            <div class="moment-date">${date}</div>
            <div class="moment-title">${title}</div>
            <div class="moment-description">${description}</div>
          </div>

          <div class="moment-divider-wrapper">
            <div class="moment-divider">
              <div class="moment-divider-dot"></div>
              <div class="moment-divider-bar"></div>
            </div>
          </div>

          <div class="moment-empty"></div>
        </div>
      `
    }

    return html`
      <div class="moment-wrapper moment-right">
        <div class="moment-empty"></div>

        <div class="moment-divider-wrapper">
          <div class="moment-divider">
            <div class="moment-divider-dot"></div>
            <div class="moment-divider-bar"></div>
          </div>
        </div>

        <div class="moment-content">
          <div class="moment-date">${date}</div>
          <div class="moment-title">${title}</div>
          <div class="moment-description">${description}</div>
        </div>
      </div>
    `
  }

  render() {
    return html`
      <div class="page-wrapper">
        <comp-bio></comp-bio>
        <div class="about-wrapper">

          <div class="about-title"> A Little About Myself </div>
          <div class="about-description">
            My name is Doug. I am a Software Engineer from Brookyln. I currently work and lead an engineering team at <a class="about-link" href="https://interseller.io">interseller.io</a>.
            <br><br>
            I recently was diagnosed with an RSI injury called Tenosynovitis, and have transitioned to coding full-time using just my voice. I recently had a conversation about my experiences on the <a class="about-link" href="https://www.youtube.com/watch?v=IxXlkSesbwY&ab_channel=Contentful">Conteful developer podcast</a>.
            <br><br>
            If you'd like to get reach out about an oppurtunity, or just want to say hi, you can message on Twitter <a class="about-link" href="https://twitter.com/_dougrudolph">@_dougrudolph</a>, or through <a class="about-link" href="">email</a>.
          </div>

          <div class="about-title">Things That I've Done</div>
          <div class="moment-list">
            ${this.moments.map(({ title, description, date }, idx) => {
              return this.renderMoment(title, description, date, idx)
            })}
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('view-about', About)

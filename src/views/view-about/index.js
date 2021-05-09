import { LitElement, css, html } from 'lit-element'
import { PageWrapper, colors, fonts } from 'styles'

import 'components/comp-bio'

const AboutStyle = css`
  .about-wrapper {
    width: 100%;
    height: 100%;

    position: static;
    z-index: 100;
    background-color: white;

    padding: 10rem 10rem 0 10rem;

    overflow-y: scroll;
  }

  .about-description {
    font-family: ${fonts.wotfard};
    font-size: 28px;
    font-weight: 300;
    margin-bottom: 10rem;
  }
`

const MomentList = css`
 .moment-list {
    display: flex;
    flex-direction: column;
    justify: center;
    align-items: center;
  }

  .moment-wrapper {
    width: 100%;
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
  }

  .moment-content:hover {
    box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
  .moment-content:hover .moment-divider-dot {
    background-color: ${colors.orange};
  }

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

class About extends LitElement {
  static get styles() {
    return [
      PageWrapper,
      AboutStyle,
      MomentContent,
      MomentList,
      MomentDivider,
    ]
  }

  constructor() {
    super()
    this.moments = [
      {
        title: 'School of thought',
        description: 'Building my own education platform - schoolofthought.io',
        date: 'May 2021',
      },
      {
        title: 'Conteful Podcast',
        description: 'Conversation about coding with your voice',
        date: 'May 2021',
      },
      {
        title: 'Interseller.io',
        description: 'First engineer and building an engineering team',
        date: 'July 2019 - Current',
      },
      {
        title: 'BuzzFeed',
        description: 'Backend engineer @ BuzzFeed',
        date: 'August 2017 - Feburary 2019',
      },
      {
        title: 'BuzzFeed',
        description: 'Engineering intern @ BuzzFeed',
        date: 'May 2017 - August 2017',
      },
      {
        title: 'hackNY Fellow',
        description: 'hackNY Fellow - class of 2017',
        date: 'May 2017 - August 2017',
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
          <div class="about-description">
            My name is Doug. I am a Software Engineer in NYC.
            <br><br>
            I currently work at <a href="https://interseller.io">interseller.io</a>. I'm lucky enough to have worked at many fun places and with cool organizations along the way.
            <br><br>
            I like free-style soccer and chess. Follow me on twitter <a href="https://twitter.com/_dougrudolph">@_dougrudolph</a>
          </div>

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

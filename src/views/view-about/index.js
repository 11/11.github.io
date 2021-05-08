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

    padding: 0 10rem;
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
    background-color: ${colors.gray10};
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
    padding: 2rem;
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

  .about-moment-date {
    font-family: ${fonts.wotfard};
    font-size: 20px;
    font-weight: 900;
  }

  .moment-empty {
    display: inline-block;
    width: 1px;;
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
    width: 1rem;
    height: 1rem;
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
        description: 'Currently creating my own STEM education platform - schoolofthought.io',
        date: '',
      },
      {
        title: 'Conteful Podcast',
        description: 'Talked about coding without using hands',
        date: '',
      },
      {
        title: 'Interseller',
        description: 'First engineer and am actively managing a team @ interseller.io',
        date: '',
      },
      {
        title: 'BuzzFeed',
        description: 'Backend engineer @ BuzzFeed',
        date: '',
      },
      {
        title: 'BuzzFeed',
        description: 'Engineering intern @ BuzzFeed',
        date: '',
      },
      {
        title: 'hackNY Fellow',
        description: 'hackNY Fellow - class of 2017',
        date: '',
      },
    ]
  }

  renderMoment = (title, description, date=null, idx=0) => {
    if (idx === 0 || idx % 2 === 0) {
      return html`
        <div class="moment-wrapper moment-left">
          <div class="moment-content">
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
          <div class="moment-list">
            ${this.moments.map(({ title, description, date }, idx) => {
              return this.renderMoment(title, description, null, idx)
            })}
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('view-about', About)

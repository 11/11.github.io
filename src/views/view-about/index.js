import { LitElement, css, html } from 'lit-element'
import { PageWrapper, colors, fonts } from 'styles'

import 'components/comp-nav'

const AboutStyle = css`
  .about-wrapper {
    width: 100%;
    height: 100%;
    background-color: white;

    position: static;
    padding: 0 10rem;

    z-index: 100;
    overflow-y: scroll
  }

  .about-title {
    font-family: ${fonts.wotfard2};
    font-weight: 900;
    font-size: 36px;
    text-transform: capitalize;
    text-align: center;
    padding-bottom: 5rem;
  }

  .about-description {
    display: inline-block;

    line-height: 1.6;
    font-family: ${fonts.wotfard};
    font-size: 22px;
    font-weight: 300;

    margin-bottom: 10rem;
    padding:0 15%;
  }

  .about-link {
    color: ${colors.green};
    transition: 0.2s ease-out;
    text-decoration: underline solid transparent;
    font-weight: 600;
  }

  .about-link:hover {
    text-decoration: underline solid Currentcolor;
  }

  .about-divider {
    height: 10rem;
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
    border-radius: 4px;
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
  }

  .moment-link {
    display: block;
    text-decoration: none;
    color: currentcolor;
  }

  .moment-title {
    text-transform: uppercase;
    font-family: ${fonts.wotfard2};
    font-size: 38px;
    font-weight: 900;

    transition: 0.2s ease-out;
    text-decoration: underline solid transparent;
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
    font-size: 16px;
    font-weight: 300;
    transition: 0.2s ease-out;
    border-radius: 4px;
  }

  .moment-empty {
    display: inline-block;
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
    transition: 0.2s ease-out;
  }

  .moment-divider-dot {
    border-radius: 100px;
    border: 4px solid ${colors.black};
    background-color: ${colors.white};
    display: block;
    width: 1rem;
    height: 1rem;
    transition: 0.2s ease-out;
  }
`

const MomentHover = css`
  .moment-wrapper:hover .moment-divider-dot {
    background-color: ${colors.green};
  }

  .moment-wrapper:hover .moment-date {
    background-color: ${colors.green};
    color: ${colors.white};
  }

  .moment-wrapper:hover .moment-title {
    text-decoration: underline solid currentcolor;
    text-decoration: underline;
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
        description: 'Building an education platform in my spare time',
        date: 'In my free time',
        link: 'https://schoolofthought.io',
      },
      {
        title: 'Interseller.io',
        description: 'First engineer and leading an engineering team',
        date: 'July 2019 - Current',
        link: 'https://www.Interseller.io/about',
      },
      {
        title: 'BuzzFeed',
        description: 'Full-time Backend engineer',
        date: 'August 2017 - February 2019',
        link: '#',
      },
      {
        title: 'BuzzFeed',
        description: 'Backend engineering intern',
        date: 'May 2017 - August 2017',
        link: 'https://tech.buzzfeed.com/meet-buzzfeed-techs-2017-intern-squad-7d9d3bcefa05',
      },
      {
        title: 'hackNY Fellow - 2017',
        description: '1 of 29 chosen for an intensive technical program run by Columbia and NYU',
        date: 'June 2017 - August 2017',
        link: 'https://hackny.org/blog/2017/06/announcing-the-class-of-2017-hackny-fellows',
      },
    ]
  }

  renderMoment = (title, description, date, link, idx=0) => {
    if (idx === 0 || idx % 2 === 0) {
      return html`
        <div class="moment-wrapper moment-left">
          <a class="moment-link" href="${link}">
            <div class="moment-content">
              <div class="moment-date">${date}</div>
              <div class="moment-title">${title}</div>
              <div class="moment-description">${description}</div>
            </div>
          </a>
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

        <a class="moment-link" href="${link}">
          <div class="moment-content">
            <div class="moment-date">${date}</div>
            <div class="moment-title">${title}</div>
            <div class="moment-description">${description}</div>
          </div>
        </a>
      </div>
    `
  }

  render() {
    return html`
      <div class="page-wrapper">
        <comp-nav></comp-nav>
        <div class="about-wrapper">
          <div class="about-divider"></div>
          <div class="about-title"> A Little About Myself </div>
          <div class="about-description">
            My name is Doug. I am a Software Engineer from Brookyln. I currently work and lead an engineering team at <a class="about-link" href="https://interseller.io">Interseller.io</a>.
            <br><br>
            I recently was diagnosed with an RSI injury called Tenosynovitis, and have transitioned to coding full-time using only my voice. I have gotten the oppurtunity to speak about the experience on the <a class="about-link" href="https://www.youtube.com/watch?v=IxXlkSesbwY&ab_channel=Contentful">Conteful developer podcast</a> and wrote a <a class="about-link" href="/coding-without-your-hands">blog post</a> about the logistics of it all.
            <br><br>
            Separate from work, I am developing an interactive education platform called <a class="about-link" href="https://schoolofthought.io">schoolofthought.io</a>; and in my free-time I like to play chess, go longboarding, and create <a class="about-link" href="https://www.instagram.com/p/BG2u7YXwC2x/">free-style soccer videos</a>.
            <br><br>
            If you'd like to reach out about an oppurtunity, or just want to say hi, my <a class="about-link" href="https://twitter.com/_dougrudolph">Twitter DMs</a> and <a class="about-link" href="mailto:drudolph914@gmail.com">email</a> are open.
          </div>

          <div class="about-title">Some Things That I've Done</div>
          <div class="moment-list">
            ${this.moments.map(({ title, description, date, link }, idx) => {
              return this.renderMoment(title, description, date, link, idx)
            })}
          </div>
          <div class="about-divider"></div>
        </div>
      </div>
    `
  }
}

customElements.define('view-about', About)

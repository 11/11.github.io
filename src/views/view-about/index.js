import { LitElement, css, html } from 'lit-element'
import { colors, fonts } from 'styles'

import 'components/comp-bio'

const AboutStyle = css`
  .about-wrapper {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    position: static;
    z-index: 100; background-color: white;
  }

  .about-list {
    display: flex;
    flex-direction: column;
    justify: center;
    align-items: center;
  }

  .about-moment-left {
    width: 100%;
    border-radius: 2px;
    background-color: ${colors.gray10};

    margin: 0;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .about-moment-right {
    width: 100%;

    border-radius: 2px;
    background-color: ${colors.gray10};

    margin: 0;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .about-moment-content {
    padding: 1rem;
  }

  .about-moment-title {
    text-transform: uppercase;
    font-family: ${fonts.wotfard2};
    font-size: 45px;
    font-weight: 900;
  }

  .about-moment-description {
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

  .about-moment-divider {
    background-color: ${colors.black};
    width: .25rem;
    height: 100%;
  }

  .about-empty {
    margin: 0;
    padding: 1rem;
  }
`

class About extends LitElement {
  static get styles() {
    return [
      AboutStyle
    ]
  }

  constructor() {
    super()
  }

  render() {
    return html`
      <div class="about-wrapper">
        <comp-bio></comp-bio>

        <div class="about-list">

          <div class="about-moment-left">
            <div class="about-moment-content">
              <div class="about-moment-title">School of thought</div>
              <div class="about-moment-description">School of thought</div>
            </div>
            <div class="about-moment-divider"></div>
            <div class="about-empty"></div>
          </div>

          <div class="about-moment-right">
            <div class="about-moment-title">
              contentful podcast
            </div>
          </div>

          <div class="about-moment-left">
            <div class="about-moment-title">
              Interseller.io
            </div>
          </div>

          <div class="about-moment-right">
            <div class="about-moment-title">
              buzzfeed
            </div>
          </div>

          <div class="about-moment-left">
            <div class="about-moment-title">
              buzzfeed
            </div>
          </div>

          <div class="about-moment-right">
            <div class="about-moment-title">
              hackNY Fellow
            </div>
          </div>

        </div>
      </div>
    `
  }
}

customElements.define('view-about', About)

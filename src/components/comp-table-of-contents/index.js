import { LitElement, html, css } from 'lit-element'

import { colors, fonts } from 'styles'

const TableOfContentsStyles = css`
  .toc-wrapper {
    padding: 1rem;
    background-color: ${colors.white};
    width: 250px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: ${fonts.wotfard};
  }

  .toc-title {
    text-transform: uppercase;
    color: ${colors.black};
    font-size: 18px;
    font-weight: 700;
  }

  .toc-section {
    text-transform: capitalize;
    color: ${colors.gray30};
    font-size: 16px;
    margin-top: 1rem;
  }
`

class ComponentTableOfContents extends LitElement {
  static get styles() {
    return [
      TableOfContentsStyles
    ]
  }

  static get properties() {
    return {
      sections: { type: Array }
    }
  }

  constructor() {
    super()

    this.sections = []
  }

  render() {
    return html`
      <div class="toc-wrapper">
        <div class="toc-title">Table of Contents</div>

        <div class="toc-sections">
          ${this.sections.map((sectionName) => {
            return html`
              <div class="toc-section">
                ${sectionName}
              <div>
            `
          })}
        </div>
      </div>
    `
  }
}

customElements.define('comp-table-of-contents', ComponentTableOfContents)

import { html, css, LitElement } from 'lit-element'

import { colors, fonts } from 'styles'

const CodeBlockStyle = css`
  .code-block-wrapper {
    border-radius: 4px;
    width: 100%;
    margin: 32px 0
  }

  .code-block-tag-wrapper {
    display: flex;
    flex-direction: row;
    background-color: ${colors.white};
    justify-content: flex-end;

    margin: 0;
    margin-right: 3rem;
  }

  .code-tag {
    color: ${colors.black};
    font-family: ${fonts.wotfard};
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 2px;

    background-color: ${colors.gray10};

    padding: .75rem 1rem;
    border-radius: 4px;
    transform: translateY(2px);
  }

  .code-block-text {
    padding: 2rem;
    background-color: ${colors.gray10};
    font-family: ${fonts.code};
    border-radius: 4px;
    font-size: 18px;
    margin: 0;
    overflow-x: scroll;
  }
`

class ComponentCodeBlock extends LitElement {
  static get styles() {
    return [
      CodeBlockStyle,
    ]
  }

  static get properties() {
    return {
      language: { type: String },
      code: { type: String },
    }
  }

  constructor() {
    super()

    this.language = ''
    this.code = ''
  }

  render() {
    return html`
      <div class="code-block-wrapper">
        <div class="code-block-tag-wrapper">
          <span class="code-tag">${this.language}</span>
        </div>
        <div class="code-block-text">
          ${this.code}
        </div>
      </div>
    `
  }
}

customElements.define('comp-codeblock', ComponentCodeBlock)

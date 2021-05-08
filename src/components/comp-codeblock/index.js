import { html, css, LitElement } from 'lit-element'

import { colors, fonts } from 'styles'

const CodeBlockStyle = css`
  .code-block-wrapper {
    border-radius: 2px;
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
    font-family: ${fonts.roboto};
    font-size: 18px;

    padding: .75rem;
    background-color: ${colors.gray10};
    border-radius: 2px;
  }

  .code-block-text {
    padding: 2rem;
    background-color: ${colors.gray10};
    border-radius: 2px;
    font-family: 'League Mono', sans-serif;
    font-size: 18px;
    margin: 0;
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

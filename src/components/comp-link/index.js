import { LitElement, html, css } from 'lit-element';

import { colors } from 'styles/colors';


class Link extends LitElement {
  static get styles() {
    return css`
      a {
        font-family: inherit;

        color: ${colors.pink};
        text-decoration: underline solid transparent;

        transition: text-decoration 150ms ease;
      }

      /* on hover, underline the text */
      a:hover {
        text-decoration: underline solid Currentcolor;
      }
    `;
  }

  static get properties() {
    return {
      url: { type: String },
      text: { type: String },
    };
  }

  constructor() {
    super();
    this.url = "#";
  }

  render() {
    return html`
      <a href="${this.url}"><slot></slot></a>
    `;
  }
}

customElements.define('comp-link', Link);
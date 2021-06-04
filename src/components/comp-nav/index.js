import { LitElement, html } from "lit-element"

import './components/nav-portrait'
import './components/nav-landscape'

class ComponentNav extends LitElement {
  render() {
    if (window.innerWidth <= 1000) {
       return html`<nav-portrait></nav-portrait>`
    }

    return html`<nav-landscape></nav-landscape>`
  }
}

customElements.define('comp-nav', ComponentNav)
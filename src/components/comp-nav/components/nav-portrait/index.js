import { LitElement, html } from 'lit-element'

import { PortraitStyles } from '../../styles/portrait'

class NavPortrait extends LitElement {
  static get styles() {
    return [
      ...PortraitStyles,
    ]
  }

  static get properties() {
    return {
      showNavMenu: { type: Boolean },
    }
  }

  constructor() {
    super()

    this.showNavMenu = false
  }

  _toggleVisibility = () => {
    this.showNavMenu = !this.showNavMenu
  }

  renderHamburgerButton = () => {
    return html`
      <div class='hamburger-button' @click='${this._toggleVisibility}'>
        <div class='hamburger-button-bar'></div>
        <div class='hamburger-button-bar'></div>
        <div class='hamburger-button-bar'></div>
      </div>
    `
  }

  render() {
    if (!this.showNavMenu) {
      return html`
        <div class='portrait-nav-bar'>
          ${this.renderHamburgerButton()}
        </div>
      `
    }

    return html`
      <div class='portrait-nav-wrapper'>

      </div>
    `
  }
}

customElements.define('nav-portrait', NavPortrait)

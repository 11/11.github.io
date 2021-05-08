import { LitElement, html, css } from 'lit-element'
import { colors, fonts } from 'styles'

const DisclaimerStyle = (success, warning, info) => {
  let bdColor = ''
  let bgColor = ''
  if (success) {

  } else if (warning) {

  } else if (info) {

  }

  // return css`
  //   .disclaimer-wrapper {
  //     border-left: 3px solid ${colors.};
  //   }
  // `
}

class ComponentDisclaimer extends LitElement {
  static get styles() {
    return [
      DisclaimerStyle(this.success, this.warning, this.info)
    ]
  }

  static get properties() {
    return {
      success: { type: Boolean },
      warning: { type: Boolean },
      info: { type: Boolean},
    }
  }

  constructor() {
    super()

    this.success = false
    this.warning = false
    this.info = true
  }

  render() {
    return html`
      <div class="disclaimer-wrapper">
        <slot></slot>
      </div>
    `
  }
}

customElements.define('comp-disclaimer', ComponentDisclaimer)

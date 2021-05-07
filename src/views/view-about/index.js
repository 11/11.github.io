import { LitElement, css, html } from 'lit-element'
import { router } from 'src/index'
import { colors, fonts } from 'styles'

import 'components/comp-bio'

const AboutStyle = css`
  .
`

class About extends LitElement {
  static get styles() {
    return [
      AboutStyle
    ]
  }

  constructor() {
    super()
    this.moments = [
      {
        title: '',
        description: '',
      }
    ]
  }

  render() {
    return html`
      <comp-bio></comp-bio>
    `
  }
}

customElements.define('view-about', About)

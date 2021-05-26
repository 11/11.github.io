import { LitElement, html, css } from 'lit-element'
import { colors } from 'styles'

const LikeClapStyle = css`
  .like-clap-wrapper {
    font-size: 30px;

    border: 1px solid ${colors.black};
    border-radius: 100px;

    padding: .5rem .75rem;
    display: inline-block;
  }
`

class LikeClap extends LitElement {
  static get styles() {
    return [
      LikeClapStyle
    ]
  }

  constructor() {
    super()
  }

  render() {
    return html`
      <div class="like-clap-wrapper"> 👏 </div>
    `
  }
}

customElements.define('comp-like-clap', LikeClap)

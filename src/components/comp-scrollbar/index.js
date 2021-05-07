import { LitElement, html, css } from 'lit-element';

import { colors } from 'styles/colors';


const ScrollbarStyle = css`
  .scroll-bar {
    height: 3px;
    background-color: ${colors.pink};
  }
`;

class Scrollbar extends LitElement {
  static get styles() {
    return [ ScrollbarStyle ];
  }

  constructor() {
    this.handleScroll = this.handleScroll.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("scroll", this.handleScroll);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("scroll",this.handleScroll);
  }

  handleScroll = () => {
    const scrollBar = this.shadowRoot.getElementById('scroll-bar');

    let diff = document.body.offsetHeight - window.innerHeight;

    const scrollTop = window.pageYOffset
      || (document.documentElement
          || document.body.parentNode
          || document.body).scrollTop;

    let curHeight = scrollTop/diff * 100;

    scrollBar.setAttribute("style", `width: ${curHeight}%`);
  }


  render() {
    return html`
      <div id="scroll-bar" class="scroll-bar"></div>
    `;
  }
}


customElements.define('comp-scrollbar', Scrollbar);
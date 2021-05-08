import { LitElement, css, html } from 'lit-element';

import { BlogStyle } from 'styles/blogs'
import { runAnimation } from './particle-net';

import "components/comp-bio/"
import 'components/comp-codeblock'
import 'components/comp-table-of-contents'

const PageWrapper = css`
  .page-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;
    width: 100%;

    padding: 0;
    margin: 0;
  }
`

class BlogParticleNet extends LitElement {
  static get styles() {
    return [
      BlogStyle,
      PageWrapper
    ];
  }

  constructor() {
    super();
    document.title = 'Doug Rudolph - Particle Net';
  }

  connectedCallback() {
    super.connectedCallback()

    window.addEventListener("resize", this.handleResize)
  }

  updateSubtreeComplete() {

  }

  disconnectedCallback() {
    super.disconnectedCallback();

    window.removeEventListener("resize", this.handleResize);
  }


  onMount = () => {
    this.handleResize()
    this.startAnimation()
  }

  handleResize = () => {
    const canvas = this.shadowRoot.getElementById('blog-canvas')
    const { width: blogWidth} = canvas.parentElement.getBoundingClientRect()
    const paddingOffest = window.getComputedStyle(canvas.parentElement).paddingInline
    canvas.width = blogWidth - (parseInt(paddingOffest) * 2)
    canvas.height = 300
  }

  startAnimation = () => {
    const canvas = this.shadowRoot.getElementById('blog-canvas');
    const ctx = canvas.getContext("2d");
    runAnimation(canvas, ctx);
  }

  render() {
    return html`
      <div class="page-wrapper">
        <comp-bio></comp-bio>
        <div class="blog-wrapper">
          <div class="blog">
            <h1 class="blog-header1">An Introduction to Rendering on the Web</h1>
            <p class="blog-text"> If you've been thinking about learning to develop your own browser games, or to create animations for the web, you've probably been a bit overwhelmed by the number of technologies and concepts at your disposable. We live in an era of abundance, and there are a lot of options.  </p>
            <canvas id="blog-canvas"></canvas>
            <p class="blog-text"> When I started working on my first rendering project for the web, my biggest priority was to was to find a solution that was native to the browser, and could be optimized for all devices - like this particle net animation that I have here.  </p>
            <p class="blog-text"> In this article, we are going to go over the native browser tools that can create web animations, video games, visualizations, and more.  </p>
            <h3 class="blog-header2">The Canvas</h3>
            <p class="blog-text">All rendering projects need a place to draw their outputs, and on the web we use the canvas element to do just that.</p>
            <comp-codeblock
              language="JavaScript"
              code="this is a test"
            ></comp-codeblock>
          </div>

          <div class="blog-utils">
            <comp-table-of-contents
              .sections="${[
                'Introduction',
                'The Canvas'
              ]}"
            ></comp-table-of-contents>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('view-particle-net', BlogParticleNet);

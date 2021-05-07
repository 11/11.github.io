import { LitElement, css, html } from 'lit-element';

import { BlogStyle } from 'styles/blogs'
import { runAnimation } from './particle-net';

import "components/comp-bio/";

const PageWrapper = css`
  .page-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    max-width: 100%;
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

    this.handleResize = this.handleResize.bind(this);
    this.startAnimation = this.startAnimation.bind(this);
  }

  firstUpdated() {
    super.connectedCallback();
    this.handleResize();
    this.startAnimation();
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("resize", this.handleResize);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    const canvas = this.shadowRoot.getElementById('blog-canvas');
    const blogPadding = window.getComputedStyle(canvas.parentElement).padding;
    const offset = parseInt(blogPadding, 10);
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 300;
  }

  startAnimation() {
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
            <h1 class="blog-header1">Intro to Rendering for the Web</h1>
            <p class="blog-text"> If you've been thinking about learning to develop your own browser games, or to create animations for the web, you've probably been a bit overwhelmed by the number of technologies and concepts at your disposable. We live in an era of abundance, and there are a lot of options.  </p>
            <canvas id="blog-canvas"></canvas>
            <p class="blog-text"> When I started working on my first rendering project for the web, my biggest priority was to was to find a solution that was native to the browser, and could be optimized for all devices - like this particle net animation that I have here.  </p>
            <p class="blog-text"> In this article, we are going to go over the native browser tools that can create web animations, video games, visualizations, and more.  </p>
            <h3 class="blog-header2">The Canvas</h3>
            <p class="blog-text">All rendering projects need a place to draw their outputs, and on the web we use the canvas element to do just that.</p>
            <div class="blog-code-block">
              &ltcanvas&gt</canvas>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('view-particle-net', BlogParticleNet);
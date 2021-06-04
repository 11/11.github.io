import { LitElement, css, html } from 'lit-element'

import { BlogStyle } from 'styles/blogs'

import 'components/comp-nav'
import 'components/comp-codeblock'
import 'components/comp-table-of-contents'
import 'components/comp-like-clap'

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

class CodingWithoutYourHands extends LitElement {
  static get styles() {
    return [
      BlogStyle,
      PageWrapper
    ]
  }

  constructor() {
    super()
    document.title = 'Coding without your Hands'
  }

  connectedCallback() {
    super.connectedCallback()
    window.addEventListener("resize", this.handleResize)
    window.addEventListener('load', () => {
      this.handleResize()
      this.startAnimation()
    })
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    window.removeEventListener("resize", this.handleResize)
  }

  render() {
    return html`
      <div class="page-wrapper">
        <comp-nav></comp-nav>
        <div class="blog-wrapper">
          <div class="blog">
            <h1 class="blog-header1">Coding without your Hands</h1>
            <p class="blog-text">During the early months of the Covid-19 outbreak, I started to suffer from a repitive-strian injury (RSI) called Tenosynovitis in both of my hands. Due to the severity of my injury, I took several months off work with the hopes of returning back after physical therapy and a potential surgery. With the newly set CDC quarantine guidelines to stay indoors, as well as having no job 🙃, I decided to use all my free time to research any possible way I could continue working on a computer without typing.</p>
            <p class="blog-text">As you could imagine, this was a pretty big deal. I'm only 25 at the time of writing this and I've invested nearly a decade into becoming a developer. My only skill is typing instructions into a computer, and it's not just my day job, but rather my main hobby and an artistic outlet. My sanity for getting through quarantine depended on finding a way to continue typing.</p>
            <p class="blog-text">Throughout the months I was off, I tried around 10 different ways to work alongside my injury. I learned to type on a stenography keyboard, I wore every wrist guard one could order on amazon, I went to phsyical therapy, I changed my diet, I bought several traditional erogonmic keyboards, I took daily inflammation supplements, I went to chryotherapy, I attended mindfullness classes, I even considerd if my RSI was a mentally stress-induced injury after reading a book called [The Mindbody Perscription](https://www.amazon.com/Mindbody-Prescription-Healing-Body-Pain/dp/0446675156). Of all the things I tried, the only thing that allowed me to keep working on my computer was picking up a newly developed dictation software called <a href="https://talonvoice.com/">Talon voice</a>.</p>

            <h3 class="blog-header2">What is Talon Voice?</h3>
            <p class="blog-text">Talon voice may be better described as an easily hackable voice-command API disguised as user-friendly dictation software. The intended users for this project are developers that can no longer type and want the added talon interface to create custom voice commands.</p>>
          </div>

          <div class="blog-utils">
            <comp-table-of-contents></comp-table-of-contents>
            <comp-like-clap></comp-like-clap>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('coding-without-your-hands', CodingWithoutYourHands)

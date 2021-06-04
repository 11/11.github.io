import { LitElement, html, css } from 'lit-element'

import { colors, fonts } from 'styles'

const TableOfContentsStyles = css`
  .toc-wrapper {
    padding: 1rem;
    background-color: ${colors.white};
    width: 250px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: ${fonts.wotfard};
  }

  .toc-title {
    text-transform: uppercase;
    color: ${colors.black};
    font-size: 18px;
    font-weight: 700;
  }

  .toc-section {
    text-transform: capitalize;
    color: ${colors.gray30};
    font-size: 16px;
    margin-top: 1rem;
  }

  .toc-active-section {
    color: ${colors.orange};
    margin-top: 1rem;
    font-weight: 600;
  }
`

class ComponentTableOfContents extends LitElement {
  static get styles() {
    return [
      TableOfContentsStyles
    ]
  }

  static get properties() {
    return {
      activeSection: { type: Object },
    }
  }

  constructor() {
    super()

    this.sections = null
    this.activeSection = null
  }

  connectedCallback() {
    super.connectedCallback()
    window.addEventListener('load', () => {
      this.sections = this._getBlogSections()
      this.activeSection = this.sections[0]

      const root = document.querySelector('output').firstElementChild.shadowRoot
      const blogWrapper = root.querySelector('.blog-wrapper')
      blogWrapper.addEventListener('scroll', this.onScroll, true)
    })
  }

  _getBlogSections = () => {
    const root = document.querySelector('output').firstElementChild.shadowRoot
    const blogDiv = root.querySelector('.blog')

    // get the div of the blog title
    const intro = blogDiv.querySelector('.blog-header1')

    // get the div of all the subsections of the blog
    const blogSections = Array.from(blogDiv.querySelectorAll('.blog-header2'))

    return [intro, ...blogSections]
  }

  onScroll = () => {
    this.activeSection = this._getBlogSections().reduce((selectedSection, nextSection) => {
      if (!selectedSection) {
        return nextSection
      }

      const { top: nextTop } = nextSection.getBoundingClientRect()
      if (nextTop < window.innerHeight / 2) {
        return nextSection
      } else {
        return selectedSection
      }
    }, null)
    console.log(this.activeSection.innerHTML)
  }

  render() {
    if (window.innerWidth <= 1000) {
      return null
    }

    return html`
      <div class="toc-wrapper">
        <div class="toc-title">Table of Contents</div>

        <div class="toc-sections">
          ${!this.sections
              ? null
              : this.sections.map((section) => {
                  return html`
                    <div class=${section.innerHTML === this.activeSection.innerHTML
                      ? 'toc-active-section'
                      : 'toc-section'
                    }>
                      ${section.innerHTML}
                    </div>`
                })
          }
        </div>
      </div>
    `
  }
}

customElements.define('comp-table-of-contents', ComponentTableOfContents)

import { LitElement, html, css } from 'lit-element'
import { fonts, colors } from 'styles'
import 'components/comp-nav/'

const HomepageStyle = css`
  .homepage-wrapper {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
  }

  .content-wrapper {
    width: 100%;
    height: 100%;
    padding: 0 10rem;

    display: grid;
    justify-content: start;

    overflow-y: scroll;
    position: relative;
    z-index: 100;
    background-color: ${colors.white};
  }

  .page-title {
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #E5005E;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
  }

  .blog-list-container {
    width: 100%;
    height: 100%;
  }

  .blog-post-link-container {
    margin-top: 4rem;
    cursor: pointer;

    transition: 0.15s ease-out;
  }

  .blog-post-link-container:hover .blog-post-link-title {
    text-decoration: underline solid currentcolor;
  }

  .blog-post-link-container a {
    color: #353535;
    text-decoration: none;
  }

  .blog-post-link-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .tag {
    font-family: 'Roboto', sans-serif;
    font-size: 8px;
    font-weight: 100;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #353535;

    padding: 10px;
    margin-top: 10px;
    margin-left: 20px;
    border-radius: 10px;
    background-color: #EFEFEF;
  }

  .blog-post-link-title {
    font-family: ${fonts.wotfard2};
    font-weight: 700;
    font-size: 36px;
    text-transform: capitalize;
    text-decoration: underline solid transparent;
    letter-spacing: .75px;

    transition: 0.3s ease-out;
  }

  .blog-post-link-description {
    color: ${colors.black};
    font-family: ${fonts.wotfard};
    font-size: 22px;
    font-weight: 300;
    line-height: 1.6;

    margin-bottom: 1rem;
  }

  .blog-post-read-more {
    color: ${colors.black};
    font-family: ${fonts.wotfard};
    font-size: 18px;
    font-weight: 600;
    line-height: 1.6;
  }
`;

class Homepage extends LitElement {
  static get styles() {
    return [
      HomepageStyle
    ]
  }

  constructor() {
    super()
    this.blogList = [
      {
        title: 'An Introduction to Rendering on the Web',
        tag: 'Animation',
        date: 'January 2018',
        route: '/an-introduction-to-rendering-on-the-web',
        description: 'An in-depth look at the native rendering technology in the browser! We\'ll see how to create keyframe animations in css, take a dive into the new JavaScript web animations library, and even how walk through rendering 3D web-components with hardware accelerated CSS.',
      },
      {
        title: 'Coding without your Hands',
        tag: 'Animation',
        date: 'January 2018',
        route: '/coding-without-your-hands',
        description: '',
      },
      {
        title: 'Transitioning to Native Web-components',
        tag: 'Animation',
        date: 'January 2018',
        route: '/transitioning-to-native-web-components',
        description: '',
      },
      {
        title: 'What is Web Assembly?',
        tag: 'Animation',
        date: 'January 2018',
        route: '/transitioning-to-native-web-components',
        description: '',
      },
    ]
  }

  renderBlogPosts = (posts) => {
    return html`
      <div class="blog-list-container">
        ${posts.map((postData) => {
          const { title, tag, description, route } = postData;
          return html`
            <div class="blog-post-link-container">
              <a href="${route}">
                <div class="blog-post-link-header">
                  <div>
                    <span class="blog-post-link-title">${title}</span>
                  </div>
                  </div>
                  <div class="blog-post-link-description">
                    <span> ${description} </span>
                  </div>
                  <div>
                    <span class="blog-post-read-more">Read more</span>
                  </div>
                </div>
              </a>
            </div>
          `;
        })}
      </div>
    `;
  }

  render() {
    return html`
      <div class="homepage-wrapper">
        <comp-nav></comp-nav>

        <div class="content-wrapper">
          ${this.renderBlogPosts(this.blogList)}
        </div>
      </div>
    `;
  }
}

customElements.define('view-homepage', Homepage);

import { LitElement, html, css } from 'lit-element';
import "components/comp-bio/";


const HomepageStyle = css`
.homepage-wrapper{
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
}

.content-wrapper {
  width: 100%;
  height: 100%;
  margin-left: 4rem;

  display: grid;
  justify-content: start;

  overflow-y: scroll;
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
  margin-top: 48px;
  cursor: pointer;
  max-width: 600px;
}

.blog-post-link-container:hover {
  transition: 0.3s ease-out;
}

.blog-post-link-container:hover .blog-post-link-title {
  text-decoration: underline;
  text-decoration-color: #E5005E;
  color: #E5005E;
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
  margin-bottom: 30px;
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
  font-family: 'Roboto', sans-serif;
  font-weight: bolder;
  font-size: 20px;
  letter-spacing: .75px;
}

.blog-post-link-description {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  letter-spacing: .75px;
  line-height: 22px;
  text-overflow: wrap;
}
`;

class Homepage extends LitElement {

  static get styles() {
    return [ HomepageStyle ];
  }

  constructor() {
    super();
    this.blogList = [
      {
        title: 'Introduction to Rendering for the Web',
        tag: 'Animation',
        date: 'January 2018',
        route: '/particle-net',
        description: 'So this small animation is my first ever JavaScript canvas project, and let me tell you, this project has made me grow as a developer.',
      },
    ];
  }

  renderPostList = (posts) => {
    return html`
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
              </div>
            </a>
          </div>
        `;
      })}
    `;
  }

  render() {
    return html`
      <div class="homepage-wrapper">
        <comp-bio></comp-bio>

        <div class="content-wrapper">
          <div class="blog-list-container">
            ${this.renderPostList(this.blogList)}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('view-homepage', Homepage);

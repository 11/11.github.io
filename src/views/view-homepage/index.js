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
        title: 'Installing ChunkWM',
        tag: 'Tutorial',
        date: 'July 2018',
        route: '/installing-chunkwm',
        description: 'I recently had to start using OS X for work, and as a former Linux user, I felt something missing from my workflow. OS X is often thought of as the more capable and professional Linux machine, yet I still miss that ability to personalize the user experience to my liking.',
      },
      {
        title: 'Oscillations',
        tag: 'Animation',
        date: 'May 2018',
        route: '/oscillations',
        description: "I've come to the conclusion that I'm obsessed with wave animations and it's an actual problem. This is the fifth animation where I have used some form of unit circle logic, and I think it's time to create something with a little more creativity."
      },
      {
        title: 'Vimrc Starter Kit',
        tag: 'Tutorial',
        date: 'April 2018',
        Route: '/vimrc-starter-kit',
        description: 'Throughout this post, we are going to be editing the .vimrc file. Before we start editing files, we first have to understand what files we are going to be creating throughout this tutorial - as well as the purpose of each file.',
      },
      {
        title: 'Just Concentrate',
        tag: 'Article',
        date: 'April 2018',
        route: '/just-concentrate',
        description: "As an ambitious twenty something looking to be more than a software engineer, I always feel as if I’m the slowest of my peers to progress my career forward."
      },
      {
        title: 'DNA Helix',
        tag: 'Animation',
        date: 'March 2018',
        route: '/dna-helix',
        description: "So recently, I've just been obsessed with using trig in my animations. I felt that my previous Wrapping Waves post didn't create the illusion I wanted, so I decided to give it another go.",
      },
      {
        title: 'Particle Net',
        tag: 'Animation',
        date: 'January 2018',
        route: '/particle-net',
        description: 'So this small animation is my first ever JavaScript canvas project, and let me tell you, this project has made me grow as a developer.',
      },
    ];

    this.popularPosts = [
      {
        title: 'DNA Helix',
        tag: 'Animation',
        date: 'March 2018',
        route: '/dna-helix',
        description: "So recently, I've just been obsessed with using trig in my animations. I felt that my previous Wrapping Waves post didn't create the illusion I wanted, so I decided to give it another go.",
      },
      {
        title: 'Particle Net',
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
                  <span class="tag"> ${tag} </span>
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
            <div class="page-title">Recently Posted</div>
            ${this.renderPostList(this.blogList)}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('view-homepage', Homepage);

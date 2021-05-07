import { css } from 'lit-element';
import { colors, fonts } from 'styles'


export const BlogStyle = css`
.blog-wrapper {
  display: grid;
  justify-content: start;
  height: 100%;
  width: 100%;
}

.blog {
  height: 100%;
  width: 675px;
  margin-left: 4rem;
  white-space: wrap;
  overflow-x: hidden;
  overflow-y: scroll;
}

.blog-header1 {
  font-family: ${fonts.wotfard};
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  letter-spacing: .75px;
  line-height: 1.6;
  margin: 128px 0;
  padding: 0 1.5rem;
}

.blog-header2 {
  font-family: ${fonts.wotfard};
  font-size: 30px;
  font-weight: 600;
  letter-spacing: .75px;
  padding: 48px 1.5rem 16px 1.5rem;
}

.blog-header3 {
  font-family: ${fonts.wotfard};
  font-size: 20px;
  font-weight: 600;
  letter-spacing: .75px;
}
}


.blog-subtitle {

}



.blog-text {
  color: ${colors.black};
  font-family: ${fonts.wotfard};
  font-size: 19px;
  font-weight: 400;
  line-height: 1.6;

  margin-bottom: 32px;
  padding: 0 1.5rem;

}

.blog-code-inline {

}

.blog-code-block {
  padding: 2rem;
  background-color: ${colors.gray10};
  border-radius: 6px;
  font-family: 'League Mono', sans-serif;
  font-size: 18px;
  margin: 32px 0;
}

.blog-link {

}

.blog-header {
  width: 100%;
}

canvas{
  background-color: #dd2176;
  margin-bottom: 20px;
  border-radius: 6px;
}


@media screen and (max-width: 1080px){
  canvas{
    margin: 0;
    padding: 0;
    margin: 32px 0;
    background-color: #e50053;
  }
}
`;

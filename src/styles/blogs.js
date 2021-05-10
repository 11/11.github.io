import { css } from 'lit-element';
import { colors, fonts } from 'styles'


export const BlogStyle = css`
.blog-wrapper {
  position: static;
  z-index: 100;
  background-color: ${colors.white};

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  height: 100%;
  width: calc(100%);
  white-space: wrap;
  overflow-y: scroll;
}

.blog-utils {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  top: 30%;
  position: sticky;
}

.blog {
  height: 100%;
  width: 100%;
  min-width: 800px;
  max-width: 1000px;
  padding: 0 10rem;
}

.blog-header1 {
  font-family: ${fonts.wotfard2};
  font-size: 45px;
  font-weight: bold;
  text-align: center;
  letter-spacing: .75px;
  line-height: 1.6;
  margin: 128px 0;
  padding: 0 3rem;
}

.blog-header2 {
  font-family: ${fonts.wotfard2};
  font-size: 36px;
  font-weight: 600;
  letter-spacing: .75px;

  padding: 5rem 4rem 3rem 4rem;
}

.blog-header3 {
  font-family: ${fonts.wotfard2};
  font-size: 20px;
  font-weight: 600;
  letter-spacing: .75px;
}

.blog-subtitle { }

.blog-text {
  color: ${colors.black};
  font-family: ${fonts.wotfard};
  font-weight: 300;
  font-size: 22px;
  line-height: 1.6;

  margin-bottom: 32px;
  padding: 0 4rem;

}

.blog-code-inline {

}

.blog-link {

}

.blog-header {
  width: 100%;
}

canvas{
  background-color: ${colors.violet};
  margin-bottom: 20px;
  border-radius: 4px;
}


@media screen and (max-width: 1080px){
  canvas{
    margin: 0;
    padding: 0;
    margin: 32px 0;
    background-color: ${colors.green};
  }
}
`

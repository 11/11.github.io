import { css } from 'lit-element'

const header = css`
  h1, h2, h3, h4, h5, h6 {
    font-family: roboto;
  }

  h1 {

  }
`

const inlines = css`

  p {

  }

  /* Links */
  a {
    color: ${pink};
    font-family: inherit;
    text-decoration: underline solid transparent;
    transition: text-decoration 150ms ease;
  }

  a:hover {
    text-decoration: underline solid Currentcolor;
  }

  /* Links */
  code {

  }

`

const lists = css``

const media = css``

export {
  header,
  paragraph,
  inlines,
  lists,
  media,
}
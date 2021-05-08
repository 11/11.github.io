import { css } from 'lit-element'

import { colors } from './colors'
import { fonts } from './fonts'

const PageWrapper = css`
  .page-wrapper {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
  }
`

export {
  colors,
  fonts,
  PageWrapper
}

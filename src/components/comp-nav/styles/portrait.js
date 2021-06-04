import { css } from 'lit-element'
import { colors, fonts } from 'styles'

const HamburgerMenu = css`
  .hamburger-button {
    width: 5rem;
    height: 90%;
    padding: 0 1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .hamburger-button-bar {
    background-color: ${colors.black};
    height: .5rem;
    width: 100%;
  }
`

const PortraitNavWrapper = css`
  .portrait-nav-bar {
    z-index: 1000;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;

    width: 100%;
    height: 100px;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    background-color: rgba(255, 0, 0, .5);
  }

  .portrait-nav-wrapper {
    z-index: 1000;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 2rem;


    background-color: rgba(255, 255, 255, .9);
  }
`

export const PortraitStyles = [
  HamburgerMenu,
  PortraitNavWrapper
]

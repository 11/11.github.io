import { css } from 'lit-element'

import { fonts, colors } from 'styles'

const BioDesktop = css`
  .bio-wrapper {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  }

  .bio-content-wrapper {
    position: relative;
    z-index: 10;
    padding: 1.5rem 4rem 1.5rem 4rem;
  }

  .bio-footer {
    white-space: nowrap;
    font-family: 'Roboto', sans-serif;
    font-size: .75rem;
    color: ${colors.white};
  }
`

const ProfilePicture = css`
  .profile-picture-wrapper {
    position: absolute;
    z-index: 1;
    height: 100%;
    width: auto;
    max-width: 30%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    object-fit: contain;
  }

  .profile-picture-wrapper img {
    height: 100%;
    vertical-align: middle;
    filter: brightness(55%) saturate(120%);
  }
`

const BioTitle = css`
  .bio-content-wrapper > div, nav {
    margin-bottom: 30px;
  }

  .bio-title {
    color: ${colors.black};
    font-family: ${fonts.wotfard2};
    font-weight: 300;
    font-size: 24px;
    white-space: nowrap;

    cursor: default;
    padding: .75rem;
    background-color: ${colors.white};
    border-radius: 4px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: baseline;
  }

  .bio-title-emphasis {
    display: block;
    font-family: ${fonts.wotfard2};
    font-size: 45px;
    font-weight: 600;
    margin-top: .25rem;
    text-decoration: none;
    transition: 0.2s ease-out;
  }

  .bio-title:hover .wavy-hand{
    animation-name: wave-animation;
    animation-duration: 1s;
    animation-iteration-count: 1;
    transform-origin: 70% 70%;
    display: inline-block;
  }
`

const NavMenu = css`
  .nav-menu {
    font-family: ${fonts.roboto};
    font-weight: 300;
    font-size: 22px;
    letter-spacing: 1px;

    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-menu a {
    display: inline-block;
    color: ${colors.white};
    text-decoration: none;

    padding: 5px 10px;

    border-left: 1px solid ${colors.white};
    margin-bottom: .25rem;
    width: 100%;
    transition: 0.2s ease-out;
  }

  .nav-menu a:hover {
    color: ${colors.orange};
    text-decoration: none;
    border-left: 4px solid ${colors.orange};
    transform: scale(1, 1.01);
  }
`

const BioIconLinks = css`
  .bio-icon-links {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    font-size: 15px;
    width: 100%;
  }

  .icon-container {
    border-radius: 100px;
    border: 3px solid ${colors.white};
    background-color: rgba(255,255,255, 0.7);
    padding: 10px;
    margin-right: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .icon-container:hover {
    background-color: rgba(255,255,255, 1);
    border: 3px solid ${colors.violet};
    transition: 0.2s ease-out;
  }

  .icon {
    width: .65rem;
    height: .65rem;
  }
`

const WideScreenMediaQueries = css`
  @media screen and (max-width: 2100px) {
    .bio-content-wrapper {
      padding: 1.5rem 2rem 1.5rem 2rem;
    }

    .profile {
      font-size: 20px;
    }

    .bio-title-emphasis {
      font-size: 32px;
    }
  }

  @media screen and (max-width: 2100px) {
    .bio-content-wrapper {
      padding: 1.5rem;
    }

    .profile {
      font-size: 20px;
    }

    .bio-title-emphasis {
      font-size: 32px;
    }
  }
`

export const LandscapeStyles = [
  BioDesktop,
  BioTitle,
  BioIconLinks,
  ProfilePicture,
  NavMenu,
  WideScreenMediaQueries,
]

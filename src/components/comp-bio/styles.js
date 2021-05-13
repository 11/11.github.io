import { css, unsafeCSS } from 'lit-element'

import { fonts, colors, keyframes } from 'styles'

export const DesktopStyle = css`
  .bio-wrapper {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  }

  .background-image-wrapper {
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

  .background-image-wrapper img {
    height: 100%;
    vertical-align: middle;
    filter: brightness(55%) saturate(120%);
  }

  .bio-content-wrapper {
    position: relative;
    z-index: 10;
    padding: 1.5rem 4rem 1.5rem 4rem;
  }

  .bio-content-wrapper > div {
    margin-bottom: 30px;
  }

  .profile {
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

  .profile-accent {
    display: block;
    font-family: ${fonts.wotfard2};
    font-size: 45px;
    font-weight: 600;
    margin-top: .25rem;
    text-decoration: none;
    transition: 0.2s ease-out;
  }

  .profile:hover .profile-hand {
    animation-name: wave-animation;  /* Refers to the name of your @keyframes element below */
    animation-duration: 1s;        /* Change to speed up or slow down */
    animation-iteration-count: 1;  /* Never stop waving :) */
    transform-origin: 70% 70%;       /* Pivot around the bottom-left palm */
    display: inline-block;
  }

  .page-menu {
    font-family: ${fonts.roboto};
    font-weight: 300;
    font-size: 22px;
    letter-spacing: 1px;

    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .page-menu a {
    display: inline-block;
    color: ${colors.white};
    text-decoration: none;

    padding: 5px 10px;

    border-left: 1px solid ${colors.white};
    margin-bottom: .25rem;
    width: 100%;
    transition: 0.2s ease-out;
  }

  .page-menu a:hover {
    color: ${colors.orange};
    text-decoration: none;
    border-left: 4px solid ${colors.orange};
    transform: scale(1, 1.01);
  }

  .bio-links {
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

  .bio-footer {
    white-space: nowrap;
    font-family: 'Roboto', sans-serif;
    font-size: .75rem;
    color: ${colors.white};
  }

  @media screen and (max-width: 2100px) {
    .bio-content-wrapper {
      padding: 1.5rem 2rem 1.5rem 2rem;
    }

    .profile {
      font-size: 20px;
    }

    .profile-accent {
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

    .profile-accent {
      font-size: 32px;
    }
  }

`

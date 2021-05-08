import { css, unsafeCSS } from 'lit-element'

import { fonts, colors } from 'styles'

export const DesktopStyle = css`
  .bio-wrapper {
    height: 100%;
    width: 600px;
    border-right: solid 1px ${colors.gray20};

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

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    object-fit: contain;
    transform: translateX(-30%);
  }

  .background-image-wrapper img {
    height: 100%;
    vertical-align: middle;
    filter: brightness(55%) saturate(120%);
  }

  .bio-content-wrapper {
    position: relative;
    z-index: 10;
    padding: 1.5rem 12rem 1.5rem 4rem;
  }

  .bio-content-wrapper > div {
    margin-bottom: 30px;
  }

  /* title is inline block to allow nav to be on the top bar as well, also has custom font */
  .profile {
    color: ${colors.white};
    font-family: ${fonts.roboto};
    font-weight: 300;
    font-size: 24px;
    white-space: nowrap;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: baseline;
    color: ${colors.black};
    background-color: rgba(255,255,255,.95);
    padding: .75rem;
    border-radius: 2px;
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

  .description {
    color: ${colors.gray30};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .description .description-entry {
    display: inline-block;
    white-space: nowrap;
    padding-bottom: .15rem;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
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
`

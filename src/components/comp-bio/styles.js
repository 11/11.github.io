import { css } from 'lit-element';

import {
  pink,
  gray10,
  gray20,
  gray30,
  black
} from 'styles/colors';

export const MobileStyle = css``;

export const DesktopStyle = css`
  .bio-container {
    height: 100%;
    padding: 2rem 4rem;
    margin-left: 15vw;
    border-right: solid 1px ${gray20};

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .bio-container > div {
    margin-bottom: 50px;
  }

  /* title is inline block to allow nav to be on the top bar as well, also has custom font */
  .profile {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 26px;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: baseline;
  }

  .profile img {
    border: solid 1px ${gray20};
    border-radius: 100%;
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
  }

  .profile a {
    color: ${black};
  }

  .profile a:hover {
    color: ${pink};
  }

  .description {
    color: ${gray30};
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
    font-family: 'Roboto', sans-serif;
    font-weight: 200;
    font-size: 20px;
    letter-spacing: 1px;

    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .page-menu a {
    display: inline-block;
    color: ${gray30};
    text-decoration: none;

    padding: 5px 10px;

    border-left: 1px solid ${black};
    margin-bottom: .25rem;
    width: 100%;
  }

  .page-menu a:hover {
    color: ${pink};
    text-decoration: none;
    border-left: 4px solid ${pink};
    transform: scale(1, 1.01);
    transition: 0.2s ease-out;
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
    border: 2px solid ${gray10};
    padding: 10px;
    margin-right: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .icon-container:hover {
    border: 2px solid ${pink};
    transition: 0.2s ease-out;
  }

  .icon {
    width: .65rem;
    height: .65rem;
  }

  .bio-footer {
    font-family: 'Roboto', sans-serif;
    font-size: .5rem;
    color: ${gray30};
  }
`;
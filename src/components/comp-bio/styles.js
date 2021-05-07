import { css } from 'lit-element';

import { fonts, colors } from 'styles';

export const DesktopStyle = css`
  .bio-container {
    height: 100%;
    padding: 2rem 4rem;
    margin-left: 15vw;
    border-right: solid 1px ${colors.gray20};

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
    font: "Palatino Linotype", sans-serif;
    font-weight: 600;
    font-size: 26px;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: baseline;
  }

  .profile img {
    margin: 1rem 0;
    border: solid 1px ${colors.gray20};
    border-radius: 100%;
    margin-right: 1rem;
    width: 4rem;
    height: 4rem;
  }

  .profile a {
    color: ${colors.black};
    text-decoration: none;
    transition: 0.2s ease-out;
  }

  .profile a:hover {
    color: ${colors.pink};
    text-decoration: underline;
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
    color: ${colors.gray30};
    text-decoration: none;

    padding: 5px 10px;

    border-left: 1px solid ${colors.black};
    margin-bottom: .25rem;
    width: 100%;
  }

  .page-menu a:hover {
    color: ${colors.pink};
    text-decoration: none;
    border-left: 4px solid ${colors.pink};
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
    border: 2px solid ${colors.gray10};
    padding: 10px;
    margin-right: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .icon-container:hover {
    border: 2px solid ${colors.pink};
    transition: 0.2s ease-out;
  }

  .icon {
    width: .65rem;
    height: .65rem;
  }

  .bio-footer {
    font-family: 'Roboto', sans-serif;
    font-size: .75rem;
    color: ${colors.gray30};
  }
`;
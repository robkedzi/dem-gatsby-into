import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import useInstagram from './hooks/use-instagram';

const Insta = () => {
  const instaPhotos = useInstagram();
  const { username } = instaPhotos[0];

  return (
    <div
      css={css`
        display: flex;
        flex-flow: column;
        grid-area: 'side';
        margin: 1rem 0.5rem;
      `}
    >
      <h2>Instagram posts from @{username}</h2>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        `}
      >
        {instaPhotos.map(photo => (
          <a
            key={photo.id}
            href={`https://instagram.com/p/${photo.id}`}
            css={css`
              box-shadow: 0;
              display: block;
              max-width: calc(33% - 0.5rem);
              width: 100%;
              height: 120px;
              transition: 200ms box-shadow linear;

              + * {
                margin: 0;
              }

              :focus,
              :hover {
                box-shadow: 0 2px 14px #22222244;
                z-index: 10;
              }

              @media (max-width: 1024px) {
                max-width: calc(50% - 0.5rem);
              }
            `}
          >
            <Image
              fluid={photo.fluid}
              alt={photo.caption}
              css={css`
                width: 100%;
                height: 100%;
              `}
            />
          </a>
        ))}
      </div>
      <a href={`https://instagram.com/${username}`}>See more on instargam</a>
    </div>
  );
};

export default Insta;

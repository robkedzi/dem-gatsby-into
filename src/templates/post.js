import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import { styled } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import Image from 'gatsby-image';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        image {
          sharp: childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => {
  return (
    <Layout
      css={css`
        padding: 1rem;
      `}
    >
      <Image
        css={css`
          width: 100%;
          background-position: bottom center;
          background-repeat: repeat-y;
          background-size: cover;
          max-height: 300px;
        `}
        objectFit="cover"
        objectPosition="50% 50%"
        fluid={post.frontmatter.image.sharp.fluid}
      />
      <div
        css={css`
          margin: 0 0.5rem;
        `}
      >
        <h1>{post.frontmatter.title}</h1>
        <p
          css={css`
            font-size: 0.75rem;
          `}
        >
          Posted by {post.frontmatter.author}
        </p>
        <MDXRenderer>{post.body}</MDXRenderer>

        <ReadLink to="/">&larr; back to all posts</ReadLink>
      </div>
    </Layout>
  );
};

export default PostTemplate;

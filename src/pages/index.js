import React from 'react';
import Layout from '../components/layout';
import usePosts from '../components/hooks/use-posts';
import PostPreview from '../components/post-preview';
import { css } from '@emotion/core';

export default () => {
  const posts = usePosts();
  return (
    <>
      <Layout>
        <div
          css={css`
            margin: 0 0.5rem;
          `}
        >
          <h2>Read my blog</h2>
          {posts.map(post => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </div>
      </Layout>
    </>
  );
};

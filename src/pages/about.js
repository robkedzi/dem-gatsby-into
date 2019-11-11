import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>About Me</h1>
    <p>about me page</p>
    <Link to="/">&larr; Go to home</Link>
  </Layout>
);

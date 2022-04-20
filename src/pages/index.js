   
import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';

import './index.css';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`);

  return (
    <Layout>
      <div class='hero'>
        <h1>{data.site.siteMetadata.title}</h1>
      </div>
    </Layout>
  );
}
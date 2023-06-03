import React from 'react';
import {getMDXComponent} from 'mdx-bundler/client'
import type { GetStaticProps } from 'next';

const Post = () => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <p>Hi, html element</p>
      <Component />
    </>
  );
}

// Get data identified by id
// Id is determined by file name.
export const getStaticProps: GetStaticProps = async ({ params: any }) => {

};

export default Post;
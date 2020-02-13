import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import Posts from '../../features/Posts/PostsContainer';

const HomePage = () => (
  <div>
    <PageTitle>Blog</PageTitle>
    <Posts postsPerPage={3} />
  </div>
);

export default HomePage;

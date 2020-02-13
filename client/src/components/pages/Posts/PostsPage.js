import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import PostsCounter from '../../features/PostsCounter/PostsCounterContainer';
import Posts from '../../features/Posts/PostsContainer';

const PostsPage = () => (
  <div>
    <PageTitle>Posts list</PageTitle>
    <PostsCounter />
    <Posts pagination={true}/>
  </div>
);

export default PostsPage;
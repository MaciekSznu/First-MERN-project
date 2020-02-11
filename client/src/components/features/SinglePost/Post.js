import React from 'react';
import { PropTypes } from 'prop-types';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import SectionTitle from '../../common/SectionTitle/SectionTitle';

const Post = ({title, author, content}) => (
  <article className="post-summary">
    <SectionTitle>{title}</SectionTitle>
    <p>Author: {author}</p>
    <HtmlBox>{content}</HtmlBox>
  </article>
);

Post.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string.isRequired,
  content: PropTypes.string,
};

export default Post;
import React from 'react';
import { PropTypes } from 'prop-types';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import SectionTitle from '../../common/SectionTitle/SectionTitle';

const Post = ({title, content}) => (
  <article className="post-summary">
    <SectionTitle>{title}</SectionTitle>
    <HtmlBox>{content}</HtmlBox>
  </article>
);

Post.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Post;
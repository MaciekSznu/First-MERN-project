import React from 'react';
import { Link } from 'react-router-dom';

class PostsPage extends React.Component {

  state = {
    posts: [],
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/posts')
      .then(res => res.json())
      .then(res => {
        this.setState({ posts: res });
    });
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        <ul>
            {this.state.posts.map(post => <Link to={`/posts/${post.id}`}><li key={post.id}>{post.title}</li></Link>)}
        </ul>
      </div>
    );
  }

};

export default PostsPage;
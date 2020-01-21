import React from 'react';

class App extends React.Component {

  state = {
    posts: [],
  }

  // connection to server endpoint, endpoint answer is written to this.state.posts
  componentDidMount() {
    fetch('http://localhost:8000/api/posts')
      .then(res => res.json())
      .then(res => {
        this.setState({posts: res});
    });
  }

  render() {
    return (
      <div>
        <ul>{this.state.posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>
      </div>
    );
  }
};

export default App;

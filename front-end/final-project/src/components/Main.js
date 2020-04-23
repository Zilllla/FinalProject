import React from 'react';
import axios from 'axios';
import Post from './Post.js';

let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3005'
} else {
  console.log('this is for heroku');
}

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  fetchPosts = () => {
  fetch(`${baseUrl}`)
  .then(data => data.json())
  .then(jData => {
    this.setState({
      posts: jData
    })
  }).catch(err => console.log(err))
  }

  //
  // componentDidMount() {
  //   axios.get(`${baseUrl}`)
  //     .then(res => {
  //       this.setState({ posts:res.data });
  //     })
  //     // .catch (err) => {
  //     //   console.log(err);
  //     // }
  // };

  componentDidMount() {
    this.fetchPosts()
    console.log();
  }

  render() {
    return(
      <div>
      {this.state.posts.map((postData) => (
        <Post
          key={postData.id}
          postData={postData}
        />
      ))}
      </div>
    )
  }

}

export default Main;

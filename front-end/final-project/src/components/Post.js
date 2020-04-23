import React from 'react';

class Post extends React.Component {
  render() {
    return(
      <div>
        {this.props.postData.title}
      </div>
    )
  }
}

export default Post;

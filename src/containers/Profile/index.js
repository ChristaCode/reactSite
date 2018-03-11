import React, { Component } from 'react';

class Profile extends Component {

  render() {
    let posts = this.props.posts;
    //let login = this.props.login;

    //let _this = this;

    if (!posts) {
      return false;
    }

    return (
      <div className="Posts">
        <div>Profile:</div>
        { Object.keys(posts).map(function(key) {
            return (
              <div key={key}>
                <div>Title: { posts[key].title }</div>
                <div>Upvotes: { posts[key].upvote }</div>
                <div>Downvotes: { posts[key].downvote }</div>
              </div>
            );
        })}
      </div>
    );
  }
}

export default Profile;

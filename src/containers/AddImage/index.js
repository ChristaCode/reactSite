import React, { Component } from 'react';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';
 
class uploadPic extends Component {
  state = {
    image: '',
    isUploading: false,
    progress: 0,
    imageURL: ''
  };  

  handleUploadStart = () => this.setState({isUploading: true, progress: 0});
  handleProgress = (progress) => this.setState({progress});
  handleUploadError = (error) => {
    this.setState({isUploading: false});
    console.error(error);
  }
  handleUploadSuccess = (filename) => {
    this.setState({image: filename, progress: 100, isUploading: false});
    firebase.storage().ref('').child(filename).getDownloadURL().then(url => this.setState({imageURL: url}));
    this.props.firebase.ref('posts').push({
      title: filename,
      upvote: 0,
      downvote: 0,
      type: 'image',
      postedBy: ''
    });
  };
 
  render() {
    debugger;

    //hack for generating unique photo filenames
    var randomNumForFilename = Math.floor(Math.random() * 10000);
    var timestamp = Math.floor(Date.now() /1000);

    return (
      <div>
        <form>
          <label>Image:</label>
          {this.state.isUploading &&
            <p>Progress: {this.state.progress}</p>
          }
          {this.state.imageURL &&
            <img src={this.state.imageURL} alt="uploaded image"/>
          }
          <FileUploader
            accept="image/*"
            name="image"
            filename={timestamp + '+' + randomNumForFilename}
            storageRef={firebase.storage().ref('')}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
        </form>
      </div>
    );
  }
}
 
export default uploadPic;